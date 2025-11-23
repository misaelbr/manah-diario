'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function GridBackground() {
  const [particles, setParticles] = useState<
    { id: number; x: number; y: number }[]
  >([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (typeof window !== 'undefined') {
      // Start at random grid intersections
      const maxX = Math.floor(window.innerWidth / 40)
      const maxY = Math.floor(window.innerHeight / 40)

      const initialParticles = Array.from({ length: 10 }).map((_, i) => ({
        id: i,
        x: Math.floor(Math.random() * maxX) * 40,
        y: Math.floor(Math.random() * maxY) * 40,
      }))

      setParticles(initialParticles)
    }
  }, [])

  useEffect(() => {
    if (!mounted) return

    const moveParticles = () => {
      setParticles((prev) => {
        return prev.map((particle) => {
          const directions = [
            { x: 40, y: 0 }, // Right
            { x: -40, y: 0 }, // Left
            { x: 0, y: 40 }, // Down
            { x: 0, y: -40 }, // Up
          ]

          const move = directions[Math.floor(Math.random() * directions.length)]

          return {
            ...particle,
            x: particle.x + move.x,
            y: particle.y + move.y,
          }
        })
      })
    }

    // Move every 2 seconds
    const interval = setInterval(moveParticles, 2000)
    return () => clearInterval(interval)
  }, [mounted])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="bg-grid-white absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]" />

      {mounted &&
        particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute left-0 top-0 -ml-[1.5px] -mt-[1.5px] h-1 w-1 rounded-full bg-blue-400 shadow-[0_0_8px_2px_rgba(96,165,250,0.6)]"
            animate={{
              x: particle.x,
              y: particle.y,
              opacity: 1,
            }}
            initial={{ opacity: 0 }}
            transition={{
              duration: 2,
              ease: 'linear',
              opacity: { duration: 0.5 },
            }}
          />
        ))}
    </div>
  )
}
