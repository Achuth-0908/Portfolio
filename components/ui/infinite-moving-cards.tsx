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
  className?: string
}

export const InfiniteMovingCards = ({
  items,
  direction = "right",
  speed = "fast",
  className,
}: InfiniteMovingCardsProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const [duplicatedItems, setDuplicatedItems] = useState<Item[]>([])
  const controls = useAnimation()
  const x = useMotionValue(0)
  const CARD_WIDTH = 300

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth)
    }
  }, [])

  useEffect(() => {
    if (containerWidth > 0) {
      const totalWidth = items.length * CARD_WIDTH
      const duplicateCount = Math.ceil(containerWidth / totalWidth) + 2
      setDuplicatedItems(Array(duplicateCount).fill(items).flat())
    }
  }, [items, containerWidth])

  useEffect(() => {
    if (duplicatedItems.length > 0) {
      const totalWidth = duplicatedItems.length * CARD_WIDTH
      const duration = totalWidth / (speed === "fast" ? 50 : 25)
      controls.start({
        x: direction === "right" ? -totalWidth : totalWidth,
        transition: {
          duration,
          repeat: Infinity,
          ease: "linear",
        },
      })
    }
  }, [controls, direction, duplicatedItems, speed])

  const handleManualScroll = (direction: "left" | "right") => {
    const offset = direction === "left" ? CARD_WIDTH : -CARD_WIDTH
    x.set(x.get() + offset)
  }

  return (
    <div className={`relative ${className}`}>
      <div className="absolute top-1/2 left-2 z-20 transform -translate-y-1/2">
        <button
          onClick={() => handleManualScroll("left")}
          className="bg-blue-700 text-white p-2 rounded-full shadow hover:bg-blue-600"
        >
          ◀
        </button>
      </div>
      <div className="absolute top-1/2 right-2 z-20 transform -translate-y-1/2">
        <button
          onClick={() => handleManualScroll("right")}
          className="bg-blue-700 text-white p-2 rounded-full shadow hover:bg-blue-600"
        >
          ▶
        </button>
      </div>

      <div ref={containerRef} className="overflow-hidden">
        <motion.div style={{ x }} animate={controls} className="flex">
          {duplicatedItems.map((item, idx) => (
            <div key={idx} className="flex-shrink-0 w-[300px] h-[200px] mx-2">
              {item.content}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
