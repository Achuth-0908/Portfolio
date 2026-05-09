"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink, Calendar, Code, Star, Layers } from "lucide-react"

const projects = [
  {
    title: "Shopify Multi-Tenant Analytics Platform",
    github: "https://github.com/Achuth-0908/shopify-analytics-backend",
    live: "https://shopify-multi-tenant-analytics.vercel.app",
    category: "Full Stack",
    year: "2025",
    status: "completed",
    tech: ["Next.js", "Express.js", "PostgreSQL", "Sequelize", "Tailwind CSS", "Recharts", "Vercel", "Railway"],
    description: "A production-grade multi-tenant Shopify analytics platform enabling enterprise retailers to onboard multiple stores, sync data automatically, and gain real-time business intelligence with complete tenant isolation.",
    features: [
      "Architected multi-tenant system with complete data isolation, syncing 185 orders, 69 customers, and 60 products across 2 Shopify stores",
      "Built analytics dashboard with KPIs, revenue trends, top customers, and product performance using Recharts",
      "Achieved sub-200ms API response times with optimized PostgreSQL indexing, rate limiting, and Helmet.js security"
    ],
  },
  {
    title: "Healthcare Symptom Checker - AI Medical Assistant",
    github: "https://github.com/Achuth-0908/Healthcare-Symptom-Checker",
    category: "Healthcare",
    year: "2025",
    status: "completed",
    tech: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "ChromaDB", "Gemini", "Groq", "Jina AI", "Docker"],
    description: "A full-stack AI-powered medical symptom analysis system with emergency detection, multi-turn conversations, RAG-based medical knowledge retrieval, and a 775+ condition database.",
    features: [
      "Implemented dual-LLM pipeline (Gemini + Groq) with RAG using ChromaDB and Jina AI embeddings for 775+ medical conditions",
      "Built real-time emergency triage detecting life-threatening symptoms with severity scoring and 911 integration",
      "Designed multi-turn conversation manager with session persistence, audit logging, and comprehensive API documentation"
    ],
  },
  {
    title: "EchoLearn - AI-Powered Speech-Aware Learning Assistant",
    github: "https://github.com/Achuth-0908/echolearn-ai-tutor",
    category: "AI/ML",
    year: "2025",
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
    title: "MicroFi - NFT-collateralized P2P Microloan Platform",
    github: "https://github.com/Achuth-0908/MicroFi",
    category: "Blockchain",
    year: "2025",
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
    title: "FarmVest - Online Marketplace for Farmers and Consumers",
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
    title: "HemoGuard - Anemia Predictor Web Application",
    github: "https://github.com/Achuth-0908/HemoGuard-Anemia-Predictor",
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
    github: "https://github.com/Achuth-0908/smart_umbrella",
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
    github: "https://github.com/Achuth-0908/supply-chain-data-analytics",
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
    "Full Stack": "from-cyan-400 to-blue-500",
    "AI/ML": "from-pink-400 to-rose-500",
    "Blockchain": "from-purple-400 to-indigo-500",
    "Mobile App": "from-green-400 to-emerald-500",
    "Healthcare": "from-blue-400 to-cyan-500",
    "IoT": "from-orange-400 to-amber-500",
    "Database": "from-teal-400 to-cyan-500",
  }
  return colors[category] || "from-slate-400 to-slate-600"
}

const getCategoryBorder = (category: string) => {
  const borders: Record<string, string> = {
    "Full Stack": "border-cyan-500/30",
    "AI/ML": "border-pink-500/30",
    "Blockchain": "border-purple-500/30",
    "Mobile App": "border-green-500/30",
    "Healthcare": "border-blue-500/30",
    "IoT": "border-orange-500/30",
    "Database": "border-teal-500/30",
  }
  return borders[category] || "border-slate-500/30"
}

const getCategoryIcon = (category: string) => {
  const icons: Record<string, string> = {
    "Full Stack": "\uD83D\uDE80",
    "AI/ML": "\uD83E\uDD16",
    "Blockchain": "\u26D3\uFE0F",
    "Mobile App": "\uD83D\uDCF1",
    "Healthcare": "\uD83C\uDFE5",
    "IoT": "\uD83C\uDF10",
    "Database": "\uD83D\uDDC4\uFE0F",
  }
  return icons[category] || "\uD83D\uDCBB"
}

export function Projects() {
  return (
    <div className="relative max-w-6xl mx-auto">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-lg text-slate-400 mb-6 max-w-3xl mx-auto">
          A showcase of innovative projects spanning AI/ML, blockchain, mobile development, and IoT solutions
        </p>
      </motion.div>

      <div className="relative z-10 px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`p-6 bg-slate-900/60 border ${getCategoryBorder(project.category)} 
                       rounded-2xl shadow-xl hover:shadow-cyan-500/10 
                       transition-all duration-300 relative overflow-hidden group h-full flex flex-col`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
          >
            {/* Gradient overlay on hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${getCategoryColor(project.category)} 
                         opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
            />

            {/* Header */}
            <div className="flex items-start justify-between mb-4 relative z-10">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{getCategoryIcon(project.category)}</span>
                  <h3 className={`text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${getCategoryColor(project.category)} leading-tight`}>
                    {project.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-3 mb-4">
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
              
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 p-2 rounded-full bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50 transition-colors duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-4 h-4 text-slate-400 hover:text-cyan-400 transition-colors duration-200" />
              </a>
            </div>

            {/* Description */}
            <div className="mb-4 relative z-10 flex-grow">
              <p className="text-sm text-slate-300 leading-relaxed mb-4">{project.description}</p>
            </div>

            {/* Features */}
            <div className="relative z-10 mb-4">
              <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                <span className={`w-2 h-2 bg-gradient-to-r ${getCategoryColor(project.category)} rounded-full`} />
                Key Features
              </h4>
              <div className="space-y-2">
                {project.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3 text-slate-300">
                    <div className={`w-1.5 h-1.5 bg-gradient-to-r ${getCategoryColor(project.category)} rounded-full mt-2 flex-shrink-0`} />
                    <span className="text-xs leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="relative z-10 mt-auto">
              <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                <Code className="w-3 h-3 text-cyan-400" />
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className={`px-2 py-1 text-xs font-medium rounded-full 
                               bg-slate-800/60 border ${getCategoryBorder(project.category)}
                               text-slate-300 hover:text-white transition-colors duration-200`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Live link for projects that have one */}
            {project.live && (
              <div className="relative z-10 mt-4 pt-4 border-t border-slate-700/50">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live Demo
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Stats */}
      <motion.div
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {[
          { label: "Projects", count: projects.length, icon: "\uD83D\uDE80" },
          { label: "Categories", count: Array.from(new Set(projects.map(p => p.category))).length, icon: "\uD83D\uDCC2" },
          { label: "Technologies", count: Array.from(new Set(projects.flatMap(p => p.tech))).length, icon: "\u26A1" },
          { label: "Completed", count: projects.filter(p => p.status === 'completed').length, icon: "\u2705" }
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
