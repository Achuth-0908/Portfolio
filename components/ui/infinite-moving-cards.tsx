"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useAnimation, useMotionValue } from "framer-motion"
import type React from "react"

interface Item {
  content: React.ReactNode
}

interface InfiniteMovingCardsProps {
  items: Item[]
  direction?: "left" | "right"
  speed?: "fast" | "slow"
  pauseOnHover?: boolean
  className?: string
}

export const InfiniteMovingCards = ({
  items,
  direction = "right",
  speed = "fast",
  pauseOnHover = false,
  className,
}: InfiniteMovingCardsProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const [duplicatedItems, setDuplicatedItems] = useState<Item[]>([])
  const [isPaused, setIsPaused] = useState(false)
  const controls = useAnimation()
  const x = useMotionValue(0)

  const CARD_WIDTH = 220
  const GAP = 12
  const EFFECTIVE_CARD_WIDTH = CARD_WIDTH + GAP

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
      }
    }
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  useEffect(() => {
    if (containerWidth > 0) {
      const totalWidth = items.length * EFFECTIVE_CARD_WIDTH
      const duplicateCount = Math.ceil(containerWidth / totalWidth) + 3
      setDuplicatedItems(Array(duplicateCount).fill(items).flat())
    }
  }, [items, containerWidth])

  const startAutoScroll = () => {
    if (isPaused) return
    const totalWidth = duplicatedItems.length * EFFECTIVE_CARD_WIDTH
    const speedFactor = speed === "fast" ? 25 : 45

    controls.start({
      x: direction === "right" ? -totalWidth : totalWidth,
      transition: {
        duration: totalWidth / speedFactor,
        repeat: Infinity,
        ease: "linear",
      },
    })
  }

  useEffect(() => {
    if (duplicatedItems.length > 0 && !isPaused) {
      startAutoScroll()
    }
  }, [duplicatedItems, isPaused])

  const handleManualScroll = (dir: "left" | "right") => {
    controls.stop()
    const moveAmount = dir === "left" ? EFFECTIVE_CARD_WIDTH * 2 : -EFFECTIVE_CARD_WIDTH * 2

    controls.start({
      x: x.get() + moveAmount,
      transition: { duration: 0.4, ease: "easeOut" },
    }).then(() => {
      startAutoScroll()
    })
  }

  return (
    <div 
      className={`relative ${className}`}
      onMouseEnter={() => { if (pauseOnHover) { setIsPaused(true); controls.stop() } }}
      onMouseLeave={() => { if (pauseOnHover) { setIsPaused(false) } }}
    >
      <div className="absolute top-1/2 left-1 sm:left-2 z-20 transform -translate-y-1/2">
        <button
          onClick={() => handleManualScroll("left")}
          className="bg-slate-800/80 backdrop-blur-sm text-cyan-400 p-1.5 sm:p-2 rounded-full shadow-lg hover:bg-slate-700/80 border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-200"
        >
          ◀
        </button>
      </div>
      <div className="absolute top-1/2 right-1 sm:right-2 z-20 transform -translate-y-1/2">
        <button
          onClick={() => handleManualScroll("right")}
          className="bg-slate-800/80 backdrop-blur-sm text-cyan-400 p-1.5 sm:p-2 rounded-full shadow-lg hover:bg-slate-700/80 border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-200"
        >
          ▶
        </button>
      </div>

      <div ref={containerRef} className="overflow-hidden px-8 sm:px-10">
        <motion.div
          style={{ x }}
          animate={controls}
          className="flex gap-3"
        >
          {duplicatedItems.map((item, idx) => (
            <div key={idx} className="flex-shrink-0 w-[180px] sm:w-[220px] h-[160px] sm:h-[180px]">
              {item.content}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
