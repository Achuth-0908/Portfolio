"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useState, useEffect, useMemo, useCallback } from "react"
import { LampDemo } from "./LampDemo"
import { Skills } from "./Skills"
import { Experience } from "./Experience"
import { Projects } from "./Projects"
import { Contact } from "./Contact"
import { Certificates } from "./Certificates"
import { Education } from "./Education"
import { Bubbles } from "./ui/bubbles"
import { ChevronUp, Menu, X } from "lucide-react"

const sectionVariants = {
  hidden: { 
    opacity: 0, 
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut"
    },
  },
}

const navItems = [
  { name: "Home", href: "#home", icon: "🏠" },
  { name: "Skills", href: "#skills", icon: "⚡" },
  { name: "Experience", href: "#experience", icon: "💼" },
  { name: "Education", href: "#education", icon: "🎓" },
  { name: "Certificates", href: "#certificates", icon: "🏆" },
  { name: "Projects", href: "#projects", icon: "🚀" },
  { name: "Contact", href: "#contact", icon: "📧" },
]

export default function App() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const { scrollY } = useScroll()
  
  // Simplified parallax effects
  const headerOpacity = useTransform(scrollY, [0, 100], [0.85, 0.95])

  // Loading state
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  // Optimized scroll handler
  const handleScroll = useCallback(() => {
    const sections = navItems.map(item => item.href.substring(1))
    const scrollPosition = window.scrollY + 200

    for (const section of sections) {
      const element = document.getElementById(section)
      if (element) {
        const { offsetTop, offsetHeight } = element
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section)
          break
        }
      }
    }

    setShowScrollTop(window.scrollY > 500)
  }, [])

  // Throttled scroll event listener
  useEffect(() => {
    let ticking = false
    
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledHandleScroll, { passive: true })
    return () => window.removeEventListener('scroll', throttledHandleScroll)
  }, [handleScroll])

  const scrollToSection = useCallback((href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setIsMenuOpen(false)
  }, [])

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  // Simplified animation variants
  const headerVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const navItemVariants = {
    hover: {
      scale: 1.02,
      transition: { duration: 0.2, ease: "easeOut" }
    }
  }

  const logoVariants = {
    hover: {
      scale: 1.02,
      transition: { duration: 0.2, ease: "easeOut" }
    }
  }

  if (!isLoaded) {
    return (
      <div className="bg-slate-950 min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
        >
          Loading...
        </motion.div>
      </div>
    )
  }

  return (
    <div className="bg-slate-950 relative overflow-x-hidden">
      <div className="relative">
        <div className="fixed inset-0 z-0">
          <Bubbles />
        </div>

        <div className="relative z-10">
          {/* Optimized Header */}
          <motion.header
            className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6"
            style={{ backdropFilter: "blur(12px)" }}
            variants={headerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="bg-slate-900/70 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl"
              style={{ opacity: headerOpacity }}
              whileHover={{ 
                borderColor: "rgba(148, 163, 184, 0.3)",
                transition: { duration: 0.2 }
              }}
            >
              <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
                <motion.h1
                  className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 cursor-pointer"
                  variants={logoVariants}
                  whileHover="hover"
                  onClick={() => scrollToSection("#home")}
                >
                  G ACHUTH
                </motion.h1>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-2">
                  {navItems.map((item) => (
                    <motion.li
                      key={item.name}
                      variants={navItemVariants}
                      whileHover="hover"
                    >
                      <button
                        onClick={() => scrollToSection(item.href)}
                        className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                          activeSection === item.href.substring(1)
                            ? "text-cyan-400 bg-cyan-400/10"
                            : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                        }`}
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          <span className="text-xs">{item.icon}</span>
                          {item.name}
                        </span>
                        
                        {/* Active indicator */}
                        {activeSection === item.href.substring(1) && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-cyan-400/15 to-purple-500/15 rounded-xl"
                            layoutId="activeTab"
                            transition={{ duration: 0.2, ease: "easeOut" }}
                          />
                        )}
                      </button>
                    </motion.li>
                  ))}
                </ul>

                {/* Mobile Menu Button */}
                <motion.button
                  className="md:hidden p-2 rounded-xl bg-slate-800/50 text-white hover:bg-slate-700/50 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  whileTap={{ scale: 0.95 }}
                >
                  <AnimatePresence mode="wait">
                    {isMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -45, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 45, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                      >
                        <X size={20} />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 45, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -45, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                      >
                        <Menu size={20} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </nav>
            </motion.div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  className="md:hidden mt-4 mx-4"
                  initial={{ opacity: 0, y: -10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4 shadow-2xl">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.name}
                        onClick={() => scrollToSection(item.href)}
                        className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-3 ${
                          activeSection === item.href.substring(1)
                            ? "text-cyan-400 bg-cyan-400/10"
                            : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                        }`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="text-lg">{item.icon}</span>
                        {item.name}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.header>

          <main className="relative text-white pt-20">
            {/* Home Section */}
            <motion.section
              id="home"
              className="min-h-screen flex items-center justify-center relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionVariants}
            >
              <LampDemo />
            </motion.section>

            {/* Skills Section */}
            <motion.section
              id="skills"
              className="py-20 md:py-32 px-4 relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={sectionVariants}
            >
              <div className="max-w-7xl mx-auto">
                <motion.h2
                  className="text-4xl md:text-6xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  Skills
                </motion.h2>
                <Skills />
              </div>
            </motion.section>

            {/* Experience Section */}
            <motion.section
              id="experience"
              className="py-20 md:py-32 px-4 relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={sectionVariants}
            >
              <div className="max-w-7xl mx-auto">
                <motion.h2
                  className="text-4xl md:text-6xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  Experience
                </motion.h2>
                <Experience />
              </div>
            </motion.section>

            {/* Education Section */}
            <motion.section
              id="education"
              className="py-20 md:py-32 px-4 relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={sectionVariants}
            >
              <div className="max-w-7xl mx-auto">
                <motion.h2
                  className="text-4xl md:text-6xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  Education
                </motion.h2>
                <Education />
              </div>
            </motion.section>

            {/* Certificates Section */}
            <motion.section
              id="certificates"
              className="py-20 md:py-32 px-4 relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={sectionVariants}
            >
              <div className="max-w-7xl mx-auto">
                <motion.h2
                  className="text-4xl md:text-6xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  Certificates
                </motion.h2>
                <Certificates />
              </div>
            </motion.section>

            {/* Projects Section */}
            <motion.section
              id="projects"
              className="py-20 md:py-32 px-4 relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={sectionVariants}
            >
              <div className="max-w-7xl mx-auto">
                <motion.h2
                  className="text-4xl md:text-6xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  Projects
                </motion.h2>
                <Projects />
              </div>
            </motion.section>

            {/* Contact Section */}
            <motion.section
              id="contact"
              className="py-20 md:py-32 px-4 relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={sectionVariants}
            >
              <div className="max-w-7xl mx-auto">
                <motion.h2
                  className="text-4xl md:text-6xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  Contact
                </motion.h2>
                <Contact />
              </div>
            </motion.section>
          </main>

          {/* Optimized Footer */}
          <motion.footer
            className="relative bg-slate-900/60 backdrop-blur-xl border-t border-slate-700/50 p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="max-w-4xl mx-auto">
              <p className="text-slate-400 text-lg mb-4">
                &copy; {new Date().getFullYear()} G ACHUTH. Crafted with passion and precision.
              </p>
              
              <div className="flex justify-center space-x-6">
                {["💻", "🚀", "⚡", "🎯"].map((emoji, index) => (
                  <motion.span
                    key={index}
                    className="text-2xl cursor-pointer"
                    whileHover={{ 
                      scale: 1.2,
                      transition: { duration: 0.2 }
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {emoji}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.footer>

          {/* Scroll to Top Button */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full shadow-2xl transition-all duration-200"
                onClick={scrollToTop}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <ChevronUp size={24} />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
