"use client"

import { motion } from "framer-motion"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"
import { Code2, Server, Database, Cloud, Palette, Brain, BarChart3, GitBranch, Github, Rows as Aws, Figma, Pocket as Docker, Zap, BookOpen, Bot, Rocket, Globe, Layers, Terminal, Cpu, Network, FileText, Link, TrendingUp, MessageSquare, Sparkles } from "lucide-react"

const skills = [
  // Tech Stack
  { name: "React.js", icon: Code2, category: "Frontend" },
  { name: "Express.js", icon: Server, category: "Backend" },
  { name: "Node.js", icon: Terminal, category: "Backend" },
  { name: "Tailwind", icon: Palette, category: "Frontend" },
  { name: "HTML5", icon: Globe, category: "Frontend" },
  { name: "CSS3", icon: Palette, category: "Frontend" },
  { name: "Flask", icon: Server, category: "Backend" },

  // AI/ML Frameworks
  { name: "Scikit-learn", icon: BarChart3, category: "AI/ML" },
  { name: "TensorFlow", icon: Brain, category: "AI/ML" },
  { name: "Keras", icon: Cpu, category: "AI/ML" },
  { name: "NLTK", icon: BookOpen, category: "AI/ML" },
  { name: "SpaCy", icon: Network, category: "AI/ML" },
  { name: "Hugging Face", icon: Bot, category: "AI/ML" },
  { name: "T5", icon: FileText, category: "AI/ML" },
  { name: "BERT", icon: Brain, category: "AI/ML" },
  { name: "SmolAgents", icon: Bot, category: "AI/ML" },
  { name: "LangChain", icon: Link, category: "AI/ML" },
  { name: "LangGraph", icon: TrendingUp, category: "AI/ML" },
  { name: "LlamaIndex", icon: Database, category: "AI/ML" },

  // Databases
  { name: "MongoDB", icon: Database, category: "Database" },
  { name: "MySQL", icon: Database, category: "Database" },
  { name: "Firebase", icon: Database, category: "Database" },

  // Tools & Cloud
  { name: "Git", icon: GitBranch, category: "Tools" },
  { name: "GitHub", icon: Github, category: "Tools" },
  { name: "AWS", icon: Cloud, category: "Cloud" },
  { name: "Streamlit", icon: BarChart3, category: "Tools" },
  { name: "Vercel", icon: Cloud, category: "Cloud" },
  { name: "Docker", icon: Docker, category: "Tools" },
  { name: "GCP", icon: Cloud, category: "Cloud" },
  { name: "Figma", icon: Figma, category: "Design" },
  { name: "Canva", icon: Palette, category: "Design" },

  // DS/AI Concepts
  { name: "Machine Learning", icon: Bot, category: "Concepts" },
  { name: "Deep Learning", icon: Brain, category: "Concepts" },
  { name: "EDA", icon: BarChart3, category: "Concepts" },
  { name: "NLP", icon: MessageSquare, category: "Concepts" },
  { name: "LLMs", icon: Brain, category: "Concepts" },
  { name: "Generative AI", icon: Sparkles, category: "Concepts" },
]

const getCategoryColor = (category: string) => {
  const colors = {
    "Frontend": "from-cyan-400 to-blue-500",
    "Backend": "from-purple-400 to-purple-600",
    "AI/ML": "from-pink-400 to-rose-500",
    "Database": "from-green-400 to-emerald-500",
    "Tools": "from-orange-400 to-amber-500",
    "Cloud": "from-indigo-400 to-blue-600",
    "Design": "from-violet-400 to-purple-500",
    "Concepts": "from-teal-400 to-cyan-500",
  }
  return colors[category] || "from-slate-400 to-slate-600"
}

const getCategoryBorder = (category: string) => {
  const borders = {
    "Frontend": "border-cyan-500/30",
    "Backend": "border-purple-500/30",
    "AI/ML": "border-pink-500/30",
    "Database": "border-green-500/30",
    "Tools": "border-orange-500/30",
    "Cloud": "border-indigo-500/30",
    "Design": "border-violet-500/30",
    "Concepts": "border-teal-500/30",
  }
  return borders[category] || "border-slate-500/30"
}

export function Skills() {
  const skillItems = skills.map((skill, index) => {
    const IconComponent = skill.icon
    
    return {
      content: (
        <motion.div
          className={`w-full h-full flex flex-col items-center justify-center 
                     bg-slate-900/70 backdrop-blur-sm border ${getCategoryBorder(skill.category)} 
                     rounded-2xl p-6 shadow-xl hover:shadow-cyan-500/10 
                     transition-all duration-300 relative overflow-hidden group
                     min-w-[180px] min-h-[140px]`}
          whileHover={{ 
            scale: 1.03,
            y: -2,
            transition: { duration: 0.2, ease: "easeOut" }
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.02, duration: 0.3 }}
          style={{ willChange: 'transform' }}
        >
          {/* Simple hover overlay */}
          <div className={`absolute inset-0 bg-gradient-to-r ${getCategoryColor(skill.category)} 
                          opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <motion.div 
              className={`mb-3 p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(skill.category)} bg-opacity-10`}
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
            >
              <IconComponent 
                className={`w-8 h-8 bg-gradient-to-r ${getCategoryColor(skill.category)} bg-clip-text text-transparent`}
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.3))'
                }}
              />
            </motion.div>
            
            <h3 className={`text-lg font-semibold text-center leading-tight
                           bg-clip-text text-transparent bg-gradient-to-r ${getCategoryColor(skill.category)}`}>
              {skill.name}
            </h3>
            
            <span className="text-xs text-slate-400 mt-1 px-2 py-1 rounded-full bg-slate-800/50">
              {skill.category}
            </span>
          </div>
        </motion.div>
      ),
    }
  })

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      {/* Section Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-lg text-slate-400 mb-6 max-w-2xl mx-auto">
          A comprehensive toolkit spanning full-stack development, AI/ML, cloud technologies, and modern design tools
        </p>
        
        {/* Category Legend */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {Array.from(new Set(skills.map(skill => skill.category))).map((category, index) => (
            <motion.span
              key={category}
              className={`px-3 py-1 text-xs font-medium rounded-full 
                         bg-slate-900/60 backdrop-blur-xl border border-slate-700/50
                         bg-gradient-to-r ${getCategoryColor(category)} bg-clip-text text-transparent`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              {category}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Skills Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <InfiniteMovingCards 
          items={skillItems} 
          direction="right" 
          speed="slow"
          pauseOnHover={true}
          className="py-4"
        />
      </motion.div>

      {/* Stats Section */}
      <motion.div
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {[
          { label: "Technologies", count: skills.length, icon: Zap },
          { label: "Categories", count: Array.from(new Set(skills.map(s => s.category))).length, icon: Layers },
          { label: "AI/ML Tools", count: skills.filter(s => s.category === "AI/ML").length, icon: Bot },
          { label: "Years Experience", count: "3+", icon: Rocket }
        ].map((stat, index) => {
          const StatIcon = stat.icon
          return (
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
              <div className="text-2xl mb-2 flex justify-center">
                <StatIcon className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                {stat.count}
              </div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
