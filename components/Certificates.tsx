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
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
}

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    "Machine Learning": "from-cyan-400 to-blue-500",
    "Advanced ML": "from-purple-400 to-pink-500",
    "Deep Learning": "from-green-400 to-emerald-500",
  }
  return colors[category] || "from-slate-400 to-slate-600"
}

const getCategoryBorder = (category: string) => {
  const borders: Record<string, string> = {
    "Machine Learning": "border-cyan-500/30",
    "Advanced ML": "border-purple-500/30",
    "Deep Learning": "border-green-500/30",
  }
  return borders[category] || "border-slate-500/30"
}

export function Certificates() {
  return (
    <div className="relative max-w-5xl mx-auto">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-lg text-slate-400 mb-6 max-w-2xl mx-auto">
          Professional certifications showcasing expertise in machine learning, AI, and modern development practices
        </p>
      </motion.div>

      <div className="relative z-10 px-4">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className={`mb-8 p-6 bg-slate-900/60 border ${getCategoryBorder(cert.category)} 
                       rounded-2xl shadow-xl hover:shadow-cyan-500/10 
                       transition-all duration-300 relative overflow-hidden group cursor-pointer`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
            onClick={() => window.open(cert.link, '_blank')}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-r ${getCategoryColor(cert.category)} 
                         opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
            />

            <div className="flex items-start justify-between mb-4 relative z-10">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <Award className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <h3 className={`text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${getCategoryColor(cert.category)} leading-tight`}>
                    {cert.name}
                  </h3>
                  <span className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                    <CheckCircle className="w-3 h-3" />
                    Certified
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Building className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm font-medium">{cert.issuer}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Calendar className="w-4 h-4 text-purple-400" />
                    <span className="text-sm">{cert.year}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm">{cert.category}</span>
                  </div>
                </div>
              </div>
              
              <div className="ml-4 p-2 rounded-full bg-slate-800/50 border border-slate-700/50 group-hover:border-cyan-500/50 transition-colors duration-300">
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors duration-200" />
              </div>
            </div>

            <div className="mb-4 relative z-10">
              <p className="text-sm text-slate-300 leading-relaxed">{cert.description}</p>
            </div>

            <div className="relative z-10">
              <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                <span className={`w-2 h-2 bg-gradient-to-r ${getCategoryColor(cert.category)} rounded-full`} />
                Key Skills Acquired
              </h4>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className={`px-3 py-1 text-xs font-medium rounded-full 
                               bg-slate-800/60 border ${getCategoryBorder(cert.category)}
                               text-slate-300 hover:text-white transition-colors duration-200`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {[
          { label: "Certificates", count: certificates.length, icon: "\uD83C\uDFC6" },
          { label: "Skills Covered", count: Array.from(new Set(certificates.flatMap(c => c.skills))).length, icon: "\u26A1" },
          { label: "Year Earned", count: "2024", icon: "\uD83D\uDCC5" }
        ].map((stat) => (
          <div
            key={stat.label}
            className="text-center p-4 bg-slate-900/60 border border-slate-700/50 rounded-2xl hover:border-cyan-500/30 transition-colors duration-300"
          >
            <div className="text-2xl mb-2">{stat.icon}</div>
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              {stat.count}
            </div>
            <div className="text-sm text-slate-400">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
