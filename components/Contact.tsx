"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from "lucide-react"
import { useState } from "react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "achuthganesh09@gmail.com",
    href: "mailto:achuthganesh09@gmail.com",
    color: "from-blue-400 to-cyan-500"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Chennai, India",
    href: "#",
    color: "from-purple-400 to-pink-500"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Achuth-0908",
    href: "https://github.com/Achuth-0908",
    color: "from-gray-400 to-slate-500"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/gachuth",
    href: "https://www.linkedin.com/in/achuth-g-69104a251/",
    color: "from-blue-500 to-indigo-600"
  }
]

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  },
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Reset form
    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="relative max-w-6xl mx-auto px-4">
      {/* Section Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.p
          className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Let's connect and explore opportunities to collaborate on exciting projects
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6"
        >
          <motion.h3 
            className="text-2xl font-bold text-white mb-6 flex items-center gap-2"
            whileHover={{ x: 3 }}
            transition={{ duration: 0.2 }}
          >
            <MessageCircle className="w-6 h-6 text-cyan-400" />
            Get In Touch
          </motion.h3>

          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.href}
              className="block p-4 bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(6, 182, 212, 0.1)"
              }}
            >
              <div className="flex items-center gap-4">
                <motion.div
                  className={`p-3 rounded-xl bg-gradient-to-r ${info.color} bg-opacity-20`}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.4 }}
                >
                  <info.icon className="w-5 h-5 text-white" />
                </motion.div>
                <div>
                  <p className="text-sm text-slate-400">{info.label}</p>
                  <p className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-200">
                    {info.value}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}

          <motion.div
            className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl border border-cyan-500/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <h4 className="text-lg font-semibold text-white mb-2">Quick Response</h4>
            <p className="text-slate-400 text-sm">
              I typically respond to emails within 24 hours. For urgent matters, feel free to reach out via phone.
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8"
        >
          <motion.h3 
            className="text-2xl font-bold text-white mb-6 flex items-center gap-2"
            whileHover={{ x: 3 }}
            transition={{ duration: 0.2 }}
          >
            <Send className="w-6 h-6 text-cyan-400" />
            Send a Message
          </motion.h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                placeholder="Your full name"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                placeholder="your.email@example.com"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Tell me about your project or how we can collaborate..."
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-200 disabled:opacity-50"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {isSubmitting ? (
                <motion.div 
                  className="flex items-center justify-center gap-2"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending...
                </motion.div>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </span>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Additional CTA */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <motion.div
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-cyan-400 text-sm font-medium">Open for collaborations</span>
          <motion.div
            className="w-2 h-2 bg-green-400 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
