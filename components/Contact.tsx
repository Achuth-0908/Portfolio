"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Code2 } from "lucide-react"

const contactItems = [
  { icon: "📍", text: "Chennai, Tamil Nadu, India" },
  { icon: "📧", text: "achuthganesh09@gmail.com" },
  { icon: "📱", text: "+91-8939662734" },
]

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/achuth-g-69104a251/",
    icon: <Linkedin className="w-6 h-6" />,
  },
  {
    name: "GitHub",
    url: "https://github.com/Achuth-0908",
    icon: <Github className="w-6 h-6" />,
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/achuthganesh09/",
    icon: <Code2 className="w-6 h-6" />,
  },
]

export function Contact() {
  return (
    <div className="max-w-3xl mx-auto text-center">
      {contactItems.map((item, index) => (
        <motion.p
          key={index}
          className="mb-4 text-lg text-slate-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <span className="mr-3 text-2xl">{item.icon}</span>
          {item.text}
        </motion.p>
      ))}
      <div className="flex justify-center space-x-6 mt-8">
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {link.icon}
            <span className="sr-only">{link.name}</span>
          </motion.a>
        ))}
      </div>
    </div>
  )
}

