"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useScroll } from "framer-motion"

export function Bubbles() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const controls = useAnimation()

  useEffect(() => {
    // Calculate viewport-based positions
    const bubbles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 100 + 50,
      x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
      y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000), // Use viewport height
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }))

    controls.start((i) => ({
      y: [bubbles[i].y, bubbles[i].y - 100], // Reduced movement range
      x: [bubbles[i].x, bubbles[i].x + (Math.random() - 0.5) * 100], // Reduced movement range
      transition: {
        duration: bubbles[i].duration,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: bubbles[i].delay,
      },
    }))

    const handleScroll = () => {
      if (containerRef.current) {
        const scrollValue = scrollY.get()
        const parallaxValue = scrollValue * 0.5
        containerRef.current.style.transform = `translateY(${parallaxValue}px)`
      }
    }

    scrollY.onChange(handleScroll)

    return () => {
      scrollY.clearListeners()
    }
  }, [controls, scrollY])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ minHeight: "100%" }}
    >
      {Array.from({ length: 20 }, (_, i) => (
        <motion.div
          key={i}
          custom={i}
          animate={controls}
          className="absolute rounded-full bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-3xl"
          style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
          }}
        />
      ))}
    </div>
  )
}

