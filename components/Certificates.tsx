"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink, Calendar, Building, CheckCircle, Star } from "lucide-react"

const certificates = [
  {
    name: "Supervised Machine Learning: Regression and Classification",
    issuer: "Coursera",
    year: 2024,
    link: "https://drive.google.com/file/d/1-08205lOeMCInqddDbC2kZdqz_HterOm/view?usp=sharing",
    category: "Machine Learning",
    skills: ["Regression", "Classification", "Python", "Scikit-learn"],
    description: "Comprehensive course covering supervised learning algorithms, model evaluation, and practical implementation of ML solutions."
  },
  {
    name: "Unsupervised Learning, Recommenders, Reinforcement Learning",
    issuer: "Coursera",
    year: 2024,
    link: "https://drive.google.com/file/d/1JGexV4JlNO10y6mn6nD8BgzZzq0V-zRS/view?usp=sharing",
    category: "Advanced ML",
    skills: ["Clustering", "Recommender Systems", "Reinforcement Learning", "Deep Learning"],
    description: "Advanced machine learning concepts including unsupervised learning, recommendation systems, and reinforcement learning algorithms."
  },
  {
    name: "AI with Google TensorFlow",
    issuer: "SmartInternz",
    year: 2024,
    link: "https://drive.google.com/file/d/1PTn8gTNh-S9KbqifcJLgOBXfzv9Mx0hq/view?usp=sharing",
    category: "Deep Learning",
    skills: ["TensorFlow", "Neural Networks", "Computer Vision", "NLP"],
    description: "Hands-on experience with TensorFlow framework for building and deploying AI models in real-world applications."
  }
]

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.98
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

const skillVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
}

const getCategoryColor = (category: string) => {
  const colors = {
    "Machine Learning": "from-cyan-400 to-blue-500",
    "Advanced ML": "from-purple-400 to-pink-500",
    "Deep Learning": "from-green-400 to-emerald-500",
  }
  return colors[category] || "from-slate-400 to-slate-600"
}

const getCategoryBorder = (category: string) => {
  const borders = {
    "Machine Learning": "border-cyan-500/30",
    "Advanced ML": "border-purple-500/30",
    "Deep Learning": "border-green-500/30",
  }
  return borders[category] || "border-slate-500/30"
}

export function Certificates() {
  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Section Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.p
          className="text-lg text-slate-400 mb-6 max-w-2xl mx-auto"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Professional certifications showcasing expertise in machine learning, AI, and modern development practices
        </motion.p>
      </motion.div>

      {/* Certificates Grid */}
      <div className="relative z-10 px-4">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className={`mb-8 p-6 bg-slate-900/60 backdrop-blur-xl border ${getCategoryBorder(cert.category)} 
                       rounded-2xl shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 
                       relative overflow-hidden group cursor-pointer`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
            whileHover={{ 
              scale: 1.01,
              boxShadow: "0 20px 40px -12px rgba(6, 182, 212, 0.15)",
              borderColor: "rgba(6, 182, 212, 0.4)"
            }}
            onClick={() => window.open(cert.link, '_blank')}
            style={{ willChange: 'transform' }}
          >
            {/* Gradient overlay on hover */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-r ${getCategoryColor(cert.category)} 
                         opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
            />
            
            {/* Reduced floating particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
              {[...Array(2)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-1 h-1 bg-gradient-to-r ${getCategoryColor(cert.category)} rounded-full opacity-15`}
                  style={{
                    top: `${30 + i * 40}%`,
                    right: `${15 + i * 25}%`,
                  }}
                  animate={{
                    y: [-5, 5, -5],
                    opacity: [0.15, 0.4, 0.15],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>

            {/* Header Section */}
            <div className="flex items-start justify-between mb-4 relative z-10">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Award className={`w-6 h-6 bg-gradient-to-r ${getCategoryColor(cert.category)} bg-clip-text text-transparent`} />
                  </motion.div>
                  <h3 className={`text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${getCategoryColor(cert.category)} leading-tight`}>
                    {cert.name}
                  </h3>
                  <motion.div 
                    className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckCircle className="w-3 h-3" />
                    Certified
                  </motion.div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <motion.div 
                    className="flex items-center gap-2 text-slate-300"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Building className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm font-medium">{cert.issuer}</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2 text-slate-300"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Calendar className="w-4 h-4 text-purple-400" />
                    <span className="text-sm">{cert.year}</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2 text-slate-300"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm">{cert.category}</span>
                  </motion.div>
                </div>
              </div>
              
              <motion.div
                className="ml-4 p-2 rounded-full bg-slate-800/50 border border-slate-700/50 group-hover:border-cyan-500/50 transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 45 }}
                transition={{ duration: 0.3 }}
              >
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" />
              </motion.div>
            </div>

            {/* Description */}
            <motion.div 
              className="mb-4 relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-sm text-slate-300 leading-relaxed">
                {cert.description}
              </p>
            </motion.div>

            {/* Skills Section */}
            <div className="relative z-10">
              <motion.h4 
                className="text-sm font-semibold text-white mb-3 flex items-center gap-2"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <motion.span 
                  className={`w-2 h-2 bg-gradient-to-r ${getCategoryColor(cert.category)} rounded-full`}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                Key Skills Acquired
              </motion.h4>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className={`px-3 py-1 text-xs font-medium rounded-full 
                               bg-slate-800/60 backdrop-blur-sm border ${getCategoryBorder(cert.category)}
                               text-slate-300 hover:text-white transition-colors duration-200`}
                    variants={skillVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.05 }}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgba(6, 182, 212, 0.1)"
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Hover glow effect */}
            <motion.div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${getCategoryColor(cert.category)} 
                         opacity-0 group-hover:opacity-8 blur-xl transition-opacity duration-300`}
            />
          </motion.div>
        ))}
      </div>

      {/* Stats Section */}
      <motion.div
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {[
          { label: "Certificates", count: certificates.length, icon: "🏆" },
          { label: "Skills Covered", count: Array.from(new Set(certificates.flatMap(c => c.skills))).length, icon: "⚡" },
          { label: "Year Earned", count: "2024", icon: "📅" }
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            className="text-center p-4 bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl"
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 10px 30px rgba(6, 182, 212, 0.1)"
            }}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <motion.div 
              className="text-2xl mb-2"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.4 }}
            >
              {stat.icon}
            </motion.div>
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              {stat.count}
            </div>
            <div className="text-sm text-slate-400">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
