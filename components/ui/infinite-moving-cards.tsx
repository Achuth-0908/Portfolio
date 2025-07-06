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
  const GAP = 16
  const EFFECTIVE_CARD_WIDTH = CARD_WIDTH + GAP

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth)
    }
  }, [])

  useEffect(() => {
    if (containerWidth > 0) {
      const totalWidth = items.length * EFFECTIVE_CARD_WIDTH
      const duplicateCount = Math.ceil(containerWidth / totalWidth) + 3
      setDuplicatedItems(Array(duplicateCount).fill(items).flat())
    }
  }, [items, containerWidth])

  const startAutoScroll = () => {
    const totalWidth = duplicatedItems.length * EFFECTIVE_CARD_WIDTH
    const speedFactor = speed === "fast" ? 20 : 40

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
    if (duplicatedItems.length > 0) {
      startAutoScroll()
    }
  }, [duplicatedItems])

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
        <motion.div
          style={{ x }}
          animate={controls}
          className="flex"
        >
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
