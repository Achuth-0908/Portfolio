"use client"

import { motion } from "framer-motion"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"

const skills = [
  { name: "JavaScript", icon: "🟨" },
  { name: "Python", icon: "🐍" },
  { name: "Java", icon: "☕" },
  { name: "C++", icon: "🔷" },
  { name: "C", icon: "🔵" },
  { name: "Flutter", icon: "📱" },
  { name: "React.js", icon: "⚛️" },
  { name: "Express.js", icon: "🚂" },
  { name: "Node.js", icon: "🟩" },
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "Flask", icon: "🧪" },
  { name: "MySQL", icon: "🐬" },
  { name: "Firebase", icon: "🔥" },
  { name: "Figma", icon: "🖌️" },
  { name: "Canva", icon: "🎨" },
  { name: "TensorFlow", icon: "🧠" },
  { name: "Git", icon: "🔀" },
]

export function Skills() {
  const skillItems = skills.map((skill) => ({
    content: (
      <motion.div
        className="w-full h-full flex flex-col items-center justify-center bg-blue-800 rounded-lg p-4 hover:bg-blue-500 transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="text-4xl mb-2">{skill.icon}</div>
        <h3 className="text-lg font-semibold">{skill.name}</h3>
      </motion.div>
    ),
  }))

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <InfiniteMovingCards items={skillItems} direction="right" speed="slow" />
    </div>
  )
}

