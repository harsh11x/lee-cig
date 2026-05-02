'use client'

import { useEffect, useRef } from 'react'

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let mouseX = 0
    let mouseY = 0
    const particles: Array<{
      x: number
      y: number
      targetX: number
      targetY: number
      size: number
      opacity: number
    }> = []

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      // Create particle at mouse position
      particles.push({
        x: mouseX,
        y: mouseY,
        targetX: mouseX,
        targetY: mouseY,
        size: 4,
        opacity: 1,
      })
    }

    const animate = () => {
      // Clear with transparent background
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]

        // Fade out
        p.opacity -= 0.02
        p.size *= 0.98

        // Draw particle
        ctx.fillStyle = `rgba(201, 168, 76, ${p.opacity * 0.6})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()

        if (p.opacity < 0.01) {
          particles.splice(i, 1)
        }
      }

      requestAnimationFrame(animate)
    }

    animate()
    window.addEventListener('mousemove', handleMouseMove)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ cursor: 'none' }}
    />
  )
}
