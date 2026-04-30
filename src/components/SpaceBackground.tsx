'use client'
import { useEffect, useRef } from 'react'

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let stars: { x: number; y: number; size: number; speed: number; opacity: number; depth: number }[] = []
    let solarRings: { radius: number; speed: number; angle: number; color: string }[] = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initEntities()
    }

    const initEntities = () => {
      stars = []
      // The larger the screen, the more stars.
      const numStars = Math.floor((canvas.width * canvas.height) / 3000)
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5,
          speed: Math.random() * 0.3 + 0.05,
          opacity: Math.random() * 0.8 + 0.2,
          depth: Math.random() * 2 + 0.5,
        })
      }

      // Solar Orbit Rings
      solarRings = [
        { radius: canvas.height * 0.4, speed: 0.0005, angle: 0, color: 'rgba(124, 58, 237, 0.05)' },
        { radius: canvas.height * 0.6, speed: -0.0003, angle: Math.PI / 4, color: 'rgba(210, 187, 255, 0.03)' },
        { radius: canvas.height * 0.8, speed: 0.0002, angle: Math.PI / 2, color: 'rgba(124, 58, 237, 0.02)' }
      ]
    }

    let mouseX = canvas.width / 2
    let mouseY = canvas.height / 2
    let currentX = canvas.width / 2
    let currentY = canvas.height / 2

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMouseMove)
    resize()

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Smooth mouse follow interpolation
      currentX += (mouseX - currentX) * 0.05
      currentY += (mouseY - currentY) * 0.05

      const targetX = (currentX - canvas.width / 2) * 0.02
      const targetY = (currentY - canvas.height / 2) * 0.02

      // Draw subtle ambient solar glow
      const cx = canvas.width / 2
      const cy = canvas.height / 2
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, canvas.width * 0.6)
      gradient.addColorStop(0, 'rgba(124, 58, 237, 0.08)')
      gradient.addColorStop(0.5, 'rgba(20, 15, 30, 0.03)')
      gradient.addColorStop(1, 'transparent')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw Solar Rings (Orbit lines)
      solarRings.forEach((ring) => {
        ring.angle += ring.speed
        ctx.beginPath()
        ctx.ellipse(
          cx - targetX, 
          cy - targetY, 
          ring.radius, 
          ring.radius * 0.4, 
          ring.angle, 
          0, 
          Math.PI * 2
        )
        ctx.strokeStyle = ring.color
        ctx.lineWidth = 1
        ctx.stroke()
      })

      // Draw Stars with parallax
      stars.forEach((star) => {
        // Upward movement
        star.y -= star.speed
        if (star.y < -10) {
          star.y = canvas.height + 10
          star.x = Math.random() * canvas.width
        }

        const parallaxX = star.x - targetX * star.depth
        const parallaxY = star.y - targetY * star.depth

        // Wrap around logic for parallax so stars don't disappear at edges
        let drawX = parallaxX
        let drawY = parallaxY

        if (drawX < 0) drawX += canvas.width
        if (drawX > canvas.width) drawX -= canvas.width

        ctx.beginPath()
        ctx.arc(drawX, drawY, star.size, 0, Math.PI * 2)
        
        // Slightly shimmer effect
        const shimmer = Math.sin(Date.now() * 0.003 * star.speed) * 0.2
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, star.opacity + shimmer)})`
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1, opacity: 0.8 }}
    />
  )
}
