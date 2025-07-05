"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
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
    y: 100,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      duration: 1.2, 
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.1
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
  const { scrollY } = useScroll()
  
  // Parallax effects
  const headerOpacity = useTransform(scrollY, [0, 100], [0.8, 0.95])
  const headerBlur = useTransform(scrollY, [0, 100], [8, 20])

  useEffect(() => {
    const handleScroll = () => {
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
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setIsMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1
      }
    }
  }

  const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      scale: 1.1,
      y: -2,
      transition: { duration: 0.2, ease: "easeOut" }
    }
  }

  const logoVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }

  const sectionTitleVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  const floatingElements = Array.from({ length: 6 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-20"
      style={{
        top: `${20 + (i * 15)}%`,
        left: `${10 + (i * 12)}%`,
      }}
      animate={{
        y: [-20, 20, -20],
        x: [-10, 10, -10],
        opacity: [0.2, 0.6, 0.2],
        scale: [1, 1.5, 1],
      }}
      transition={{
        duration: 4 + i,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.5
      }}
    />
  ))

  return (
    <div className="bg-slate-950 relative overflow-x-hidden">
      {/* Floating background elements */}
      <div className="fixed inset-0 pointer-events-none">
        {floatingElements}
      </div>

      <div className="relative">
        <div className="fixed inset-0 z-0">
          <Bubbles />
        </div>

        <div className="relative z-10">
          {/* Enhanced Header */}
          <motion.header
            className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6"
            style={{
              backdropFilter: `blur(${headerBlur}px)`,
            }}
            variants={headerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl"
              style={{ opacity: headerOpacity }}
              whileHover={{ 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                borderColor: "rgba(148, 163, 184, 0.3)"
              }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
                <motion.h1
                  className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 cursor-pointer"
                  variants={logoVariants}
                  whileHover="hover"
                  onClick={() => scrollToSection("#home")}
                  style={{
                    backgroundSize: "200% 100%",
                  }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    backgroundPosition: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  G ACHUTH
                </motion.h1>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-2">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      variants={navItemVariants}
                      whileHover="hover"
                      custom={index}
                    >
                      <button
                        onClick={() => scrollToSection(item.href)}
                        className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 group ${
                          activeSection === item.href.substring(1)
                            ? "text-cyan-400 bg-cyan-400/10 shadow-lg shadow-cyan-400/20"
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
                            className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-xl"
                            layoutId="activeTab"
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          />
                        )}
                        
                        {/* Hover effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100"
                          transition={{ duration: 0.2 }}
                        />
                      </button>
                    </motion.li>
                  ))}
                </ul>

                {/* Mobile Menu Button */}
                <motion.button
                  className="md:hidden p-2 rounded-xl bg-slate-800/50 text-white hover:bg-slate-700/50 transition-colors"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  whileTap={{ scale: 0.95 }}
                >
                  <AnimatePresence mode="wait">
                    {isMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X size={20} />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
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
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4 shadow-2xl">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.name}
                        onClick={() => scrollToSection(item.href)}
                        className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-3 ${
                          activeSection === item.href.substring(1)
                            ? "text-cyan-400 bg-cyan-400/10"
                            : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
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
              <motion.div
                className="max-w-7xl mx-auto"
                variants={sectionTitleVariants}
              >
                <motion.h2
                  className="text-4xl md:text-6xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  Skills
                  <motion.div
                    className="absolute -inset-4 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 blur-xl rounded-full opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.h2>
                <Skills />
              </motion.div>
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
              <motion.div
                className="max-w-7xl mx-auto"
                variants={sectionTitleVariants}
              >
                <motion.h2
                  className="text-4xl md:text-6xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  Experience
                  <motion.div
                    className="absolute -inset-4 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 blur-xl rounded-full opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.h2>
                <Experience />
              </motion.div>
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
              <motion.div
                className="max-w-7xl mx-auto"
                variants={sectionTitleVariants}
              >
                <motion.h2
                  className="text-4xl md:text-6xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  Education
                  <motion.div
                    className="absolute -inset-4 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 blur-xl rounded-full opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.h2>
                <Education />
              </motion.div>
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
              <motion.div
                className="max-w-7xl mx-auto"
                variants={sectionTitleVariants}
              >
                <motion.h2
                  className="text-4xl md:text-6xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  Certificates
                  <motion.div
                    className="absolute -inset-4 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 blur-xl rounded-full opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.h2>
                <Certificates />
              </motion.div>
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
              <motion.div
                className="max-w-7xl mx-auto"
                variants={sectionTitleVariants}
              >
                <motion.h2
                  className="text-4xl md:text-6xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  Projects
                  <motion.div
                    className="absolute -inset-4 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 blur-xl rounded-full opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.h2>
                <Projects />
              </motion.div>
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
              <motion.div
                className="max-w-7xl mx-auto"
                variants={sectionTitleVariants}
              >
                <motion.h2
                  className="text-4xl md:text-6xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  Contact
                  <motion.div
                    className="absolute -inset-4 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 blur-xl rounded-full opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.h2>
                <Contact />
              </motion.div>
            </motion.section>
          </main>

          {/* Enhanced Footer */}
          <motion.footer
            className="relative bg-slate-900/60 backdrop-blur-xl border-t border-slate-700/50 p-8 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="max-w-4xl mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.p
                className="text-slate-400 text-lg"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                &copy; {new Date().getFullYear()} G ACHUTH. Crafted with passion and precision.
              </motion.p>
              
              <motion.div
                className="mt-4 flex justify-center space-x-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {["💻", "🚀", "⚡", "🎯"].map((emoji, index) => (
                  <motion.span
                    key={index}
                    className="text-2xl cursor-pointer"
                    whileHover={{ 
                      scale: 1.5, 
                      rotate: 360,
                      transition: { duration: 0.5 }
                    }}
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                      ease: "easeInOut"
                    }}
                  >
                    {emoji}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.footer>

          {/* Scroll to Top Button */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
                onClick={scrollToTop}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0, rotate: 180 }}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 20px 40px rgba(6, 182, 212, 0.4)"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
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
