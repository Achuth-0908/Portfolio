"use client"

import { motion } from "framer-motion"

const certificates = [
  {
    name: "Supervised Machine Learning: Regression and Classification",
    issuer: "Coursera",
    year: 2024,
    link: "https://drive.google.com/file/d/1-08205lOeMCInqddDbC2kZdqz_HterOm/view?usp=sharing"
  },
  {
    name: "Unsupervised Learning, Recommenders, Reinforcement Learning",
    issuer: "Coursera",
    year: 2024,
    link: "https://drive.google.com/file/d/1JGexV4JlNO10y6mn6nD8BgzZzq0V-zRS/view?usp=sharing"
  },
  {
    name: "AI with Google TensorFlow",
    issuer: "SmartInternz",
    year: 2024,
    link: "https://drive.google.com/file/d/1PTn8gTNh-S9KbqifcJLgOBXfzv9Mx0hq/view?usp=sharing"
  }
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

export function Certificates() {
  return (
    <div className="relative">
      <div className="relative z-10 max-w-3xl mx-auto px-4">
        {certificates.map((cert, index) => (
          <motion.a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-6 p-6 rounded-lg shadow-xl transition-all duration-300
                       backdrop-blur-md bg-blue-800/30 hover:bg-blue-800/40
                       border border-blue-700/50
                       hover:shadow-blue-500/20 hover:-translate-y-1"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
          >
            <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {cert.name}
            </h3>
            <p className="text-gray-300 font-medium mb-1">Issuer: {cert.issuer}</p>
            <p className="text-gray-400">Year: {cert.year}</p>
          </motion.a>
        ))}
      </div>
    </div>
  )
}
