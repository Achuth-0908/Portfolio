"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";

export const Bubbles = () => {
  const bubbles = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => ({
        id: i,
        size: 20 + i * 8,
        x: 10 + i * 15,
        y: 10 + i * 14,
        delay: i * 0.3,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full bg-gradient-to-br from-cyan-400/8 to-purple-600/8"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, -10, 0],
            scale: [1, 1.1, 0.95, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8 + bubble.delay * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: bubble.delay,
          }}
        />
      ))}
    </div>
  );
};
