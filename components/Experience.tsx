"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    title: "CNS Training Intern",
    company: "Airports Authority of India",
    date: "June 2024 – July 2024",
  },
  {
    title: "Project Training Intern",
    company: "Samsung PRISM",
    date: "June 2024 – Present",
  },
  {
    title: "UI / UX Design Lead",
    company: "Newton School of Coding Club VIT-C",
    date: "July 2024 – Present",
  },
  {
    title: "Marketing and Sponsorship Lead",
    company: "CodeChef VIT-C Student Chapter",
    date: "April 2024 – Present",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
}

export function Experience() {
  return (
    <div className="relative">
      {/* Content with glass effect cards */}
      <div className="relative z-10 max-w-3xl mx-auto px-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="mb-6 p-6 rounded-lg shadow-xl transition-all duration-300
                       backdrop-blur-md bg-blue-800/30 hover:bg-blue-800/40
                       border border-blue-700/50
                       hover:shadow-blue-500/20 hover:-translate-y-1"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
          >
            <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {exp.title}
            </h3>
            <p className="text-gray-300 font-medium mb-1">{exp.company}</p>
            <p className="text-gray-400 text-sm">{exp.date}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

