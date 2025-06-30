"use client"

import { motion } from "framer-motion"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"

const skills = [
  // Tech Stack
  { name: "React.js", icon: "⚛️" },
  { name: "Express.js", icon: "🚂" },
  { name: "Node.js", icon: "🟩" },
  { name: "Tailwind", icon: "💨" },
  { name: "HTML5", icon: "🌐" },
  { name: "CSS3", icon: "🎨" },
  { name: "Flask", icon: "🧪" },

  // Frameworks
  { name: "Scikit-learn", icon: "📊" },
  { name: "TensorFlow", icon: "🧠" },
  { name: "Keras", icon: "🔬" },
  { name: "NLTK", icon: "📚" },
  { name: "SpaCy", icon: "🧬" },
  { name: "Hugging Face", icon: "🤗" },
  { name: "T5", icon: "📝" },
  { name: "BERT", icon: "🧠" },
  { name: "SmolAgents", icon: "🎛️" },
  { name: "LangChain", icon: "🔗" },
  { name: "LangGraph", icon: "📈" },
  { name: "LlamaIndex", icon: "🦙" },

  // Databases
  { name: "MongoDB", icon: "🍃" },
  { name: "MySQL", icon: "🐬" },
  { name: "Firebase", icon: "🔥" },

  // Tools
  { name: "Git", icon: "🔀" },
  { name: "GitHub", icon: "🐙" },
  { name: "AWS", icon: "☁️" },
  { name: "Streamlit", icon: "📈" },
  { name: "Vercel", icon: "▲" },
  { name: "Docker", icon: "🐳" },
  { name: "GCP", icon: "🌥️" },
  { name: "Figma", icon: "🖌️" },
  { name: "Canva", icon: "🎨" },

  // DS/AI Concepts
  { name: "Machine Learning", icon: "🤖" },
  { name: "Deep Learning", icon: "🧠" },
  { name: "EDA", icon: "📊" },
  { name: "NLP", icon: "🗣️" },
  { name: "LLMs", icon: "🧠" },
  { name: "Generative AI", icon: "✨" },
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

