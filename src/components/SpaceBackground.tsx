'use client'
import { useEffect, useRef } from 'react'

interface Planet {
  radius: number;
  angle: number;
  speed: number;
  glowColor: string;
  label: string;
  currentX?: number;
  currentY?: number;
  isHovered?: boolean;
}

interface SolarRing {
  radius: number;
  color: string;
  planets: Planet[];
}

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let stars: { x: number; y: number; size: number; speed: number; opacity: number; depth: number }[] = []
    let solarRings: SolarRing[] = []

    let mouseX = canvas.width / 2
    let mouseY = canvas.height / 2
    let currentX = canvas.width / 2
    let currentY = canvas.height / 2

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initEntities()
    }

    const initEntities = () => {
      stars = []
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

      // 4 Rings, 9 planets representing the tech stack
      solarRings = [
        { 
          // Core Frontend
          radius: canvas.height * 0.25, 
          color: 'rgba(124, 58, 237, 0.25)',
          planets: [
            { label: 'React', radius: 14, angle: 0, speed: 0.0025, glowColor: 'rgba(0, 221, 221, 0.9)' },
            { label: 'Next.js', radius: 16, angle: Math.PI, speed: 0.0025, glowColor: 'rgba(255, 255, 255, 0.9)' }
          ]
        },
        { 
          // Languages
          radius: canvas.height * 0.40, 
          color: 'rgba(210, 187, 255, 0.15)',
          planets: [
            { label: 'TypeScript', radius: 13, angle: Math.PI / 2, speed: 0.0015, glowColor: 'rgba(49, 120, 198, 0.9)' },
            { label: 'JavaScript', radius: 13, angle: (Math.PI * 3) / 2, speed: 0.0015, glowColor: 'rgba(247, 223, 30, 0.9)' }
          ]
        },
        { 
          // Backend
          radius: canvas.height * 0.55, 
          color: 'rgba(124, 58, 237, 0.1)',
          planets: [
            { label: 'Node.js', radius: 15, angle: Math.PI / 4, speed: -0.001, glowColor: 'rgba(83, 158, 67, 0.9)' },
            { label: 'Express', radius: 11, angle: (Math.PI * 5) / 4, speed: -0.001, glowColor: 'rgba(200, 200, 200, 0.9)' }
          ]
        },
        { 
          // Data & Styling
          radius: canvas.height * 0.70, 
          color: 'rgba(124, 58, 237, 0.05)',
          planets: [
            { label: 'PostgreSQL', radius: 14, angle: 0, speed: 0.0007, glowColor: 'rgba(51, 103, 145, 0.9)' },
            { label: 'Prisma', radius: 12, angle: (Math.PI * 2) / 3, speed: 0.0007, glowColor: 'rgba(12, 52, 75, 0.9)' },
            { label: 'Tailwind', radius: 14, angle: (Math.PI * 4) / 3, speed: 0.0007, glowColor: 'rgba(56, 189, 248, 0.9)' }
          ]
        }
      ]
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMouseMove)
    resize()

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Smooth interpolation for parallax
      currentX += (mouseX - currentX) * 0.05
      currentY += (mouseY - currentY) * 0.05

      const targetX = (currentX - canvas.width / 2) * 0.02
      const targetY = (currentY - canvas.height / 2) * 0.02

      const cx = canvas.width / 2
      const cy = canvas.height / 2
      
      // Background ambient glow
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, canvas.width * 0.6)
      gradient.addColorStop(0, 'rgba(124, 58, 237, 0.08)')
      gradient.addColorStop(0.5, 'rgba(20, 15, 30, 0.03)')
      gradient.addColorStop(1, 'transparent')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // --- Central Glassy Sun ---
      const sunRadius = canvas.height * 0.08;
      const sunX = cx - targetX;
      const sunY = cy - targetY;
      
      const sunGradient = ctx.createRadialGradient(
        sunX - sunRadius * 0.3, sunY - sunRadius * 0.3, 0,
        sunX, sunY, sunRadius
      );
      sunGradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
      sunGradient.addColorStop(0.2, 'rgba(124, 58, 237, 0.4)');
      sunGradient.addColorStop(0.8, 'rgba(20, 15, 30, 0.5)');
      sunGradient.addColorStop(1, 'rgba(255, 255, 255, 0.2)');

      ctx.beginPath();
      ctx.arc(sunX, sunY, sunRadius, 0, Math.PI * 2);
      ctx.fillStyle = sunGradient;
      ctx.shadowColor = 'rgba(124, 58, 237, 0.8)';
      ctx.shadowBlur = 80;
      ctx.fill();
      ctx.shadowBlur = 0; // reset
      
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.stroke();

      // Inner glass reflection for Sun
      ctx.beginPath();
      ctx.ellipse(sunX - sunRadius * 0.3, sunY - sunRadius * 0.4, sunRadius * 0.5, sunRadius * 0.2, Math.PI / -6, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.fill();

      // Hover check for Sun
      const dSunX = mouseX - sunX;
      const dSunY = mouseY - sunY;
      if (dSunX * dSunX + dSunY * dSunY < sunRadius * sunRadius) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.font = 'bold 16px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('CORE SYSTEM', sunX, sunY + sunRadius + 25);
      }

      // --- Rings and Planets ---
      let hoveredPlanet: Planet | null = null;
      const orbitTilt = Math.PI / 10; // 18 degree tilt for all orbits to look 3D

      solarRings.forEach((ring) => {
        // Draw Orbit Line
        ctx.beginPath()
        ctx.ellipse(sunX, sunY, ring.radius, ring.radius * 0.35, orbitTilt, 0, Math.PI * 2)
        ctx.strokeStyle = ring.color
        ctx.lineWidth = 1
        ctx.stroke()

        ring.planets.forEach(p => {
          // Calculate parametric position
          const px = ring.radius * Math.cos(p.angle);
          const py = ring.radius * 0.35 * Math.sin(p.angle);

          // Rotate by orbit tilt
          const rx = px * Math.cos(orbitTilt) - py * Math.sin(orbitTilt);
          const ry = px * Math.sin(orbitTilt) + py * Math.cos(orbitTilt);

          const planetX = sunX + rx;
          const planetY = sunY + ry;

          p.currentX = planetX;
          p.currentY = planetY;

          // Hit detection
          const dx = mouseX - planetX;
          const dy = mouseY - planetY;
          // Much larger hit radius to make hovering very easy
          p.isHovered = (dx * dx + dy * dy < Math.pow(p.radius + 30, 2));
          
          if (p.isHovered) {
            hoveredPlanet = p;
          } else {
            p.angle += p.speed; // Pause animation when hovered
          }

          // Render Planet
          const renderRadius = p.isHovered ? p.radius * 1.3 : p.radius;
          const planetGradient = ctx.createRadialGradient(
            planetX - renderRadius * 0.3, planetY - renderRadius * 0.3, 0,
            planetX, planetY, renderRadius
          );
          
          const glowAlpha = p.isHovered ? '0.7' : '0.3';
          
          planetGradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
          planetGradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.2)');
          planetGradient.addColorStop(0.7, p.glowColor.replace(/0\.\d+\)/, `${glowAlpha})`));
          planetGradient.addColorStop(1, 'rgba(255, 255, 255, 0.4)');

          ctx.beginPath();
          ctx.arc(planetX, planetY, renderRadius, 0, Math.PI * 2);
          ctx.fillStyle = planetGradient;
          
          ctx.shadowColor = p.glowColor;
          ctx.shadowBlur = p.isHovered ? 40 : 20;
          ctx.fill();
          ctx.shadowBlur = 0; // reset

          // Outline
          ctx.lineWidth = p.isHovered ? 2 : 1;
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
          ctx.stroke();

          // Glass Reflection
          ctx.beginPath();
          ctx.ellipse(planetX - renderRadius * 0.3, planetY - renderRadius * 0.4, renderRadius * 0.5, renderRadius * 0.2, Math.PI / -6, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
          ctx.fill();
        })
      })

      // --- Draw Tooltip (Top layer) ---
      if (hoveredPlanet && hoveredPlanet.currentX && hoveredPlanet.currentY) {
        const textWidth = ctx.measureText(hoveredPlanet.label).width || 80;
        const boxWidth = textWidth + 30;
        const boxHeight = 30;
        const boxX = hoveredPlanet.currentX - boxWidth / 2;
        const boxY = hoveredPlanet.currentY - hoveredPlanet.radius - 45;

        // Tooltip Background
        ctx.fillStyle = 'rgba(10, 5, 20, 0.8)';
        ctx.beginPath();
        // Fallback for roundRect if not supported
        if (ctx.roundRect) {
          ctx.roundRect(boxX, boxY, boxWidth, boxHeight, 8);
        } else {
          ctx.rect(boxX, boxY, boxWidth, boxHeight);
        }
        ctx.fill();
        
        // Tooltip Border
        ctx.strokeStyle = hoveredPlanet.glowColor;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Tooltip Text
        ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        ctx.font = 'bold 12px monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(hoveredPlanet.label, hoveredPlanet.currentX, boxY + boxHeight / 2);
      }

      // --- Draw Parallax Stars ---
      stars.forEach((star) => {
        star.y -= star.speed
        if (star.y < -10) {
          star.y = canvas.height + 10
          star.x = Math.random() * canvas.width
        }

        let drawX = star.x - targetX * star.depth
        let drawY = star.y - targetY * star.depth

        // Wrap around
        if (drawX < 0) drawX += canvas.width
        if (drawX > canvas.width) drawX -= canvas.width

        ctx.beginPath()
        ctx.arc(drawX, drawY, star.size, 0, Math.PI * 2)
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
      style={{ zIndex: -1, opacity: 0.9 }}
    />
  )
}
