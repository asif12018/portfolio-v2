'use client'

import { useEffect, useRef } from 'react'
import createGlobe, { type COBEOptions } from 'cobe'
import { useMotionValue, useSpring } from 'framer-motion'

const MOVEMENT_DAMPING = 1400

export const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [0.48, 0.22, 0.93],
  markerColor: [0.78, 0.55, 1.0],
  glowColor: [0.48, 0.22, 0.93],
  devicePixelRatio: 2,
  markers: [
    { location: [23.8103, 90.4125], size: 0.1 },    // Dhaka (home)
    { location: [14.5995, 120.9842], size: 0.03 },  // Manila
    { location: [19.076, 72.8777], size: 0.07 },    // Mumbai
    { location: [30.0444, 31.2357], size: 0.07 },   // Cairo
    { location: [39.9042, 116.4074], size: 0.08 },  // Beijing
    { location: [-23.5505, -46.6333], size: 0.07 }, // São Paulo
    { location: [19.4326, -99.1332], size: 0.07 },  // Mexico City
    { location: [40.7128, -74.006], size: 0.1 },    // New York
    { location: [34.6937, 135.5022], size: 0.05 },  // Osaka
    { location: [41.0082, 28.9784], size: 0.06 },   // Istanbul
    { location: [51.5074, -0.1278], size: 0.08 },   // London
    { location: [48.8566, 2.3522], size: 0.07 },    // Paris
  ],
}

export interface GlobeProps {
  className?: string
  config?: COBEOptions
}

export function Globe({ className = '', config = GLOBE_CONFIG }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const phiRef = useRef(0)
  const widthRef = useRef(0)
  const pointerInteracting = useRef<number | null>(null)
  const rafRef = useRef<number>(0)
  // Tracks whether the globe WebGL instance has been created
  const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null)

  const r = useMotionValue(0)
  const rs = useSpring(r, { mass: 1, damping: 30, stiffness: 100 })

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? 'grabbing' : 'grab'
    }
  }

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current
      r.set(r.get() + delta / MOVEMENT_DAMPING)
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const onResize = () => {
      widthRef.current = canvas.offsetWidth
    }
    window.addEventListener('resize', onResize)
    onResize()

    // Only initialise WebGL + start RAF when the section scrolls into view.
    // This prevents the 60fps RAF loop from competing with the intro video.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || globeRef.current) return

        globeRef.current = createGlobe(canvas, {
          ...config,
          width: widthRef.current * 2,
          height: widthRef.current * 2,
        })

        const animate = () => {
          if (!pointerInteracting.current) phiRef.current += 0.005
          globeRef.current?.update({
            phi: phiRef.current + rs.get(),
            width: widthRef.current * 2,
            height: widthRef.current * 2,
          })
          rafRef.current = requestAnimationFrame(animate)
        }
        rafRef.current = requestAnimationFrame(animate)

        canvas.style.opacity = '1'
      },
      { threshold: 0.1 }
    )

    observer.observe(canvas)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(rafRef.current)
      globeRef.current?.destroy()
      globeRef.current = null
      window.removeEventListener('resize', onResize)
    }
  }, [rs, config])

  return (
    <canvas
      ref={canvasRef}
      className={`size-full opacity-0 transition-opacity duration-700 aspect-square ${className}`}
      onPointerDown={(e) => updatePointerInteraction(e.clientX)}
      onPointerUp={() => updatePointerInteraction(null)}
      onPointerOut={() => updatePointerInteraction(null)}
      onMouseMove={(e) => updateMovement(e.clientX)}
      onTouchMove={(e) => e.touches[0] && updateMovement(e.touches[0].clientX)}
    />
  )
}
