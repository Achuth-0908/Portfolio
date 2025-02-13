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

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth)
    }
  }, [])

  useEffect(() => {
    if (containerWidth > 0) {
      const totalWidth = items.length * 300 // Assuming each card is 300px wide
      const duplicateCount = Math.ceil(containerWidth / totalWidth) + 1
      setDuplicatedItems(Array(duplicateCount).fill(items).flat())
    }
  }, [items, containerWidth])

  useEffect(() => {
    if (duplicatedItems.length > 0) {
      const totalWidth = duplicatedItems.length * 300
      const duration = totalWidth / (speed === "fast" ? 50 : 25)
      controls.start({
        x: direction === "right" ? -totalWidth : totalWidth,
        transition: {
          duration,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          ease: "linear",
        },
      })
    }
  }, [controls, direction, duplicatedItems, speed])

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <motion.div style={{ x }} animate={controls} className="flex">
        {duplicatedItems.map((item, idx) => (
          <div key={idx} className="flex-shrink-0 w-[300px] h-[200px] mx-2">
            {item.content}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

