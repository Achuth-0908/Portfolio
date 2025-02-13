"use client"

import { motion } from "framer-motion"

const education = [
  {
    degree: "Bachelor of Technology (Computer Science and Engineering)",
    school: "Vellore Institute of Technology, Chennai",
    date: "September 2022 – June 2026",
    grade: "CGPA - 8.88",
  },
  {
    degree: "Class 12th – CBSE",
    school: "Sri Chaitanya Techno Senior Secondary School",
    date: "April 2021 – June 2022",
    grade: "Percentage – 92.4 %",
  },
  {
    degree: "Class 10th – CBSE",
    school: "Chhathrapathy Shivaji DAV Secondary School",
    date: "April 2019 – March 2020",
    grade: "Percentage – 88.4 %",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function Education() {
  return (
    <div className="max-w-3xl mx-auto">
      {education.map((edu, index) => (
        <motion.div
          key={index}
          className="mb-6 p-6 bg-purple-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={index}
        >
          <h3 className="text-xl font-semibold mb-2 text-pink-400">{edu.degree}</h3>
          <p className="text-gray-400">{edu.school}</p>
          <p className="text-gray-400">{edu.date}</p>
          <p className="text-gray-400">{edu.grade}</p>
        </motion.div>
      ))}
    </div>
  )
}

