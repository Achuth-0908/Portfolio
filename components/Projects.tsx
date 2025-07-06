"use client"

import { motion } from "framer-motion"
import { Github, Calendar, Code, Star, Layers } from "lucide-react"

const projects = [
  {
    title: "EchoLearn – AI-Powered Speech-Aware Learning Assistant",
    github: "https://github.com/yourusername/echolearn",
    category: "AI/ML",
    year: "2024",
    status: "completed",
    tech: ["Python", "Streamlit", "Whisper", "Gemini API", "Hugging Face", "Flask"],
    description: "An intelligent learning assistant that uses advanced NLP to evaluate spoken answers and generate personalized questions for enhanced learning experiences.",
    features: [
      "Implemented a real-time NLP pipeline using Whisper for speech-to-text and Gemini API for spoken answer evaluation",
      "Integrated T5 and Hugging Face Transformers for question generation and keyword extraction",
      "Built responsive UI with Streamlit and integrated Google Translate API for multilingual support"
    ],
  },
  {
    title: "MicroFi – NFT-collateralized P2P Microloan Platform",
    github: "https://github.com/yourusername/microfi",
    category: "Blockchain",
    year: "2024",
    status: "completed",
    tech: ["React.js", "Solidity", "Express.js", "Node.js", "Tailwind CSS", "GunJS"],
    description: "A decentralized finance platform enabling peer-to-peer microloans using NFTs as collateral with automated smart contract execution.",
    features: [
      "Built a full-stack dApp using Solidity smart contracts and GunJS for decentralized real-time storage",
      "Enabled NFT-backed loan collateralization with automated liquidation and third-party escrow via Web3",
      "Implemented secure wallet integration and real-time transaction monitoring"
    ],
  },
  {
    title: "FarmVest – Online Marketplace for Farmers and Consumers",
    github: "https://github.com/yourusername/farmvest",
    category: "Mobile App",
    year: "2024",
    status: "completed",
    tech: ["Flutter", "Firebase", "Firebase Auth", "Firestore", "Machine Learning"],
    description: "A comprehensive mobile marketplace connecting farmers directly with consumers, featuring real-time price negotiation and ML-powered price predictions.",
    features: [
      "Developed a role-based Flutter app with Firebase Auth for secure multi-user login",
      "Integrated Firestore for real-time product listing, price negotiation, and live updates",
      "Implemented machine learning algorithms for intelligent price prediction and market analysis"
    ],
  },
  {
    title: "HemoGuard – Anemia Predictor Web Application",
    github: "https://github.com/yourusername/hemoguard",
    category: "Healthcare",
    year: "2024",
    status: "completed",
    tech: ["HTML", "CSS", "JavaScript", "Flask", "MongoDB", "Scikit-learn"],
    description: "A medical diagnostic tool using machine learning to predict anemia from hematological parameters with high accuracy.",
    features: [
      "Trained a Gradient Boosting Classifier on hematological features for anemia classification",
      "Deployed the ML model via Flask and integrated real-time prediction in a responsive UI",
      "Achieved 94% accuracy with comprehensive data preprocessing and feature engineering"
    ],
  },
  {
    title: "Smart Umbrella with Rain Prediction System",
    github: "https://github.com/yourusername/smart-umbrella",
    category: "IoT",
    year: "2024",
    status: "completed",
    tech: ["Arduino", "C++", "Random Forest", "ESP32", "ESP8266", "Bluetooth"],
    description: "An innovative IoT device that predicts rainfall using environmental sensors and machine learning algorithms.",
    features: [
      "Designed a weather-aware umbrella using ESP32 + ESP8266 with a Random Forest classifier for rain prediction",
      "Implemented sensor integration (DHT11), Bluetooth data transmission, and real-time inference logic",
      "Achieved 87% prediction accuracy with optimized power consumption for portable use"
    ],
  },
  {
    title: "Supply Chain Management Database System",
    github: "https://github.com/yourusername/supply-chain-db",
    category: "Database",
    year: "2024",
    status: "completed",
    tech: ["Oracle SQL", "Python", "cx_Oracle", "Data Visualization"],
    description: "A comprehensive database system for managing complex supply chain operations with advanced analytics and reporting.",
    features: [
      "Engineered a relational schema in Oracle SQL to manage inventory, supplier, and order workflows",
      "Integrated backend in Python with role-based queries and data visualization dashboards",
      "Optimized query performance and implemented automated reporting systems"
    ],
  },
]

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 30
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
}

const getCategoryColor = (category: string) => {
  const colors = {
    "AI/ML": "from-pink-400 to-rose-500",
    "Blockchain": "from-purple-400 to-indigo-500",
    "Mobile App": "from-green-400 to-emerald-500",
    "Healthcare": "from-blue-400 to-cyan-500",
    "IoT": "from-orange-400 to-amber-500",
    "Database": "from-teal-400 to-cyan-500",
  }
  return colors[category] || "from-slate-400 to-slate-600"
}

const getCategoryIcon = (category: string) => {
  const icons = {
    "AI/ML": "🤖",
    "Blockchain": "⛓️",
    "Mobile App": "📱",
    "Healthcare": "🏥",
    "IoT": "🌐",
    "Database": "🗄️",
  }
  return icons[category] || "💻"
}

export function Projects() {
  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Section Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-lg text-slate-400 mb-6 max-w-3xl mx-auto">
          A showcase of innovative projects spanning AI/ML, blockchain, mobile development, and IoT solutions
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="relative z-10 px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-6 bg-slate-900/70 backdrop-blur-sm border border-slate-700/30 
                       rounded-2xl shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 
                       relative overflow-hidden group cursor-pointer h-full flex flex-col"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
            whileHover={{ 
              scale: 1.01,
              y: -2,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
          >
            {/* Simple hover overlay */}
            <div className={`absolute inset-0 bg-gradient-to-r ${getCategoryColor(project.category)} 
                           opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />

            {/* Header Section */}
            <div className="flex items-start justify-between mb-4 relative z-10">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-2xl">
                    {getCategoryIcon(project.category)}
                  </div>
                  <h3 className={`text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${getCategoryColor(project.category)} leading-tight`}>
                    {project.title}
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Layers className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm font-medium">{project.category}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Calendar className="w-4 h-4 text-purple-400" />
                    <span className="text-sm">{project.year}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm capitalize">{project.status}</span>
                  </div>
                </div>
              </div>
              
              <div className="ml-4 p-2 rounded-full bg-slate-800/50 border border-slate-700/50 group-hover:border-cyan-500/50 transition-colors duration-300">
                <Github className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" />
              </div>
            </div>

            {/* Description */}
            <div className="mb-4 relative z-10 flex-grow">
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                {project.description}
              </p>
            </div>

            {/* Features Section */}
            <div className="relative z-10 mb-4">
              <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                <span className={`w-2 h-2 bg-gradient-to-r ${getCategoryColor(project.category)} rounded-full`} />
                Key Features
              </h4>
              <div className="space-y-2">
                {project.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-start gap-3 text-slate-300"
                  >
                    <div className={`w-1.5 h-1.5 bg-gradient-to-r ${getCategoryColor(project.category)} rounded-full mt-2 flex-shrink-0`} />
                    <span className="text-xs leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Section */}
            <div className="relative z-10 mt-auto">
              <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                <Code className="w-3 h-3 text-cyan-400" />
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 text-xs font-medium rounded-full 
                               bg-slate-800/60 backdrop-blur-sm border border-slate-700/50
                               text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats Section */}
      <motion.div
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {[
          { label: "Projects", count: projects.length, icon: "🚀" },
          { label: "Categories", count: Array.from(new Set(projects.map(p => p.category))).length, icon: "📂" },
          { label: "Technologies", count: Array.from(new Set(projects.flatMap(p => p.tech))).length, icon: "⚡" },
          { label: "Completed", count: projects.filter(p => p.status === 'completed').length, icon: "✅" }
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            className="text-center p-4 bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="text-2xl mb-2">{stat.icon}</div>
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
