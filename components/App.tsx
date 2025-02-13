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
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="bg-slate-950">
      <div className="relative">
        <div className="fixed inset-0">
          <Bubbles />
        </div>

        <div className="relative z-10">
          <header className="p-6 sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
            <nav className="flex justify-between items-center max-w-6xl mx-auto">
              <motion.h1
                className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                G ACHUTH
              </motion.h1>
              <ul className="flex space-x-6">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="hover:text-cyan-400 transition-colors duration-300 text-sm font-medium text-white"
                    >
                      {item.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </header>

          <main className="relative text-white">
            <motion.section
              id="home"
              className="min-h-screen flex items-center justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
            >
              <LampDemo />
            </motion.section>

            <motion.section
              id="skills"
              className="py-32"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
            >
              <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                Skills
              </h2>
              <Skills />
            </motion.section>

            <motion.section
              id="experience"
              className="py-32"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
            >
              <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                Experience
              </h2>
              <Experience />
            </motion.section>

            <motion.section
              id="certificates"
              className="py-32"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
            >
              <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                Certificates
              </h2>
              <Certificates />
            </motion.section>

            <motion.section
              id="projects"
              className="py-32"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
            >
              <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                Projects
              </h2>
              <Projects />
            </motion.section>

            <motion.section
              id="contact"
              className="py-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
            >
              <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                Contact
              </h2>
              <Contact />
            </motion.section>
          </main>

          <footer className="bg-slate-950/80 backdrop-blur-md border-t border-slate-800 p-6 text-center">
            <p className="text-slate-400">&copy; {new Date().getFullYear()} G ACHUTH. </p>
          </footer>
        </div>
      </div>
    </div>
  )
}

