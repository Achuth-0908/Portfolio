"use client"

import { motion } from "framer-motion"
import { LampDemo } from "./LampDemo"
import { Skills } from "./Skills"
import { Experience } from "./Experience"
import { Projects } from "./Projects"
import { Contact } from "./Contact"
import { Certificates } from "./Certificates"
import { Bubbles } from "./ui/bubbles"

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Certificates", href: "#certificates" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function App() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      <Bubbles />
      <section id="home" className="snap-start min-h-screen">
        <LampDemo />
      </section>
      <motion.section
        id="skills"
        className="snap-start min-h-screen"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Skills />
      </motion.section>
      <motion.section
        id="experience"
        className="snap-start min-h-screen"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Experience />
      </motion.section>
      <motion.section
        id="certificates"
        className="snap-start min-h-screen"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Certificates />
      </motion.section>
      <motion.section
        id="projects"
        className="snap-start min-h-screen"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Projects />
      </motion.section>
      <motion.section
        id="contact"
        className="snap-start min-h-screen"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Contact />
      </motion.section>
    </main>
  )
}
