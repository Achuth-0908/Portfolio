"use client"

import { motion } from "framer-motion"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"
import { Code2, Server, Database, Cloud, Palette, Brain, BarChart3, GitBranch, Github, Terminal, Globe, Layers, FileText, Link, TrendingUp, MessageSquare, Sparkles, Bot, Zap, Rocket, BookOpen, Network, Cpu } from "lucide-react"

const skills = [
  // Tech Stack
  { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", fallbackIcon: Code2, category: "Frontend" },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", fallbackIcon: Server, category: "Backend" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", fallbackIcon: Terminal, category: "Backend" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", fallbackIcon: Palette, category: "Frontend" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", fallbackIcon: Globe, category: "Frontend" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", fallbackIcon: Palette, category: "Frontend" },
  { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", fallbackIcon: Server, category: "Backend" },

  // AI/ML Frameworks
  { name: "Scikit-learn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg", fallbackIcon: BarChart3, category: "AI/ML" },
  { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", fallbackIcon: Brain, category: "AI/ML" },
  { name: "Keras", icon: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg", fallbackIcon: Cpu, category: "AI/ML" },
  { name: "NLTK", icon: "https://www.nltk.org/images/logo.gif", fallbackIcon: BookOpen, category: "AI/ML" },
  { name: "SpaCy", icon: "https://upload.wikimedia.org/wikipedia/commons/8/88/SpaCy_logo.svg", fallbackIcon: Network, category: "AI/ML" },
  { name: "Hugging Face", icon: "https://huggingface.co/front/assets/huggingface_logo.svg", fallbackIcon: Bot, category: "AI/ML" },
  { name: "T5", icon: "https://avatars.githubusercontent.com/u/123218969?s=200&v=4", fallbackIcon: FileText, category: "AI/ML" },
  { name: "BERT", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Google_BERT_logo.svg/640px-Google_BERT_logo.svg.png", fallbackIcon: Brain, category: "AI/ML" },
  { name: "SmolAgents", icon: "https://smol-ai.nyc3.cdn.digitaloceanspaces.com/logo-small.png", fallbackIcon: Bot, category: "AI/ML" },
  { name: "LangChain", icon: "https://raw.githubusercontent.com/langchain-ai/langchain/master/docs/static/favicon.ico", fallbackIcon: Link, category: "AI/ML" },
  { name: "LangGraph", icon: "https://www.langgraph.dev/logo.svg", fallbackIcon: TrendingUp, category: "AI/ML" },
  { name: "LlamaIndex", icon: "https://avatars.githubusercontent.com/u/111250006?s=200&v=4", fallbackIcon: Database, category: "AI/ML" },

  // Databases
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", fallbackIcon: Database, category: "Database" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", fallbackIcon: Database, category: "Database" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", fallbackIcon: Database, category: "Database" },

  // Tools & Cloud
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", fallbackIcon: GitBranch, category: "Tools" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", fallbackIcon: Github, category: "Tools" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", fallbackIcon: Cloud, category: "Cloud" },
  { name: "Streamlit", icon: "https://streamlit.io/images/brand/streamlit-logo-secondary-colormark-darktext.png", fallbackIcon: BarChart3, category: "Tools" },
  { name: "Vercel", icon: "https://assets.vercel.com/image/upload/front/favicon/vercel/favicon.ico", fallbackIcon: Cloud, category: "Cloud" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", fallbackIcon: Layers, category: "Tools" },
  { name: "GCP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", fallbackIcon: Cloud, category: "Cloud" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", fallbackIcon: Palette, category: "Design" },
  { name: "Canva", icon: "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg", fallbackIcon: Palette, category: "Design" },

  // DS/AI Concepts
  { name: "Machine Learning", icon: "https://cdn-icons-png.flaticon.com/512/4149/4149643.png", fallbackIcon: Bot, category: "Concepts" },
  { name: "Deep Learning", icon: "https://cdn-icons-png.flaticon.com/512/6610/6610153.png", fallbackIcon: Brain, category: "Concepts" },
  { name: "EDA", icon: "https://cdn-icons-png.flaticon.com/512/1828/1828911.png", fallbackIcon: BarChart3, category: "Concepts" },
  { name: "NLP", icon: "https://cdn-icons-png.flaticon.com/512/4081/4081723.png", fallbackIcon: MessageSquare, category: "Concepts" },
  { name: "LLMs", icon: "https://cdn-icons-png.flaticon.com/512/10736/10736390.png", fallbackIcon: Brain, category: "Concepts" },
  { name: "Generative AI", icon: "https://cdn-icons-png.flaticon.com/512/10025/10025734.png", fallbackIcon: Sparkles, category: "Concepts" },
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

// Component to handle image loading with fallback
const SkillIcon = ({ skill, className = "" }) => {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const FallbackIcon = skill.fallbackIcon

  return (
    <div className={`relative ${className}`}>
      {!imageError && (
        <img
          src={skill.icon}
          alt={skill.name}
          className={`w-8 h-8 object-contain transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          style={{ display: imageError ? 'none' : 'block' }}
        />
      )}
      
      {(imageError || !imageLoaded) && (
        <motion.div
          className={`w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-r ${getCategoryColor(skill.category)} bg-opacity-20`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <FallbackIcon 
            className={`w-5 h-5 text-white`}
            style={{
              filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.3))'
            }}
          />
        </motion.div>
      )}
    </div>
  )
}

export function Skills() {
  const skillItems = skills.map((skill, index) => ({
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

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 bg-gradient-to-r ${getCategoryColor(skill.category)} rounded-full opacity-20`}
              style={{
                top: `${20 + i * 40}%`,
                right: `${10 + i * 30}%`,
              }}
              animate={{
                y: [-5, 5, -5],
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2 + i,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <motion.div 
            className="mb-3"
            whileHover={{ 
              scale: 1.1,
              transition: { duration: 0.2 }
            }}
          >
            <SkillIcon skill={skill} />
          </motion.div>
          
          <h3 className={`text-lg font-semibold text-center leading-tight
                         bg-clip-text text-transparent bg-gradient-to-r ${getCategoryColor(skill.category)}`}>
            {skill.name}
          </h3>
          
          <span className="text-xs text-slate-400 mt-1 px-2 py-1 rounded-full bg-slate-800/50">
            {skill.category}
          </span>
        </div>

        {/* Hover glow effect */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${getCategoryColor(skill.category)} 
                       opacity-0 group-hover:opacity-8 blur-xl transition-opacity duration-300`} />
      </motion.div>
    ),
  }))

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
        <motion.p 
          className="text-lg text-slate-400 mb-6 max-w-2xl mx-auto"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            backgroundSize: "200% 100%",
            background: "linear-gradient(90deg, #94a3b8, #60a5fa, #94a3b8)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent"
          }}
        >
          A comprehensive toolkit spanning full-stack development, AI/ML, cloud technologies, and modern design tools
        </motion.p>
        
        {/* Category Legend */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {Array.from(new Set(skills.map(skill => skill.category))).map((category, index) => (
            <motion.span
              key={category}
              className={`px-3 py-1 text-xs font-medium rounded-full 
                         bg-slate-900/60 backdrop-blur-xl border ${getCategoryBorder(category)}
                         bg-gradient-to-r ${getCategoryColor(category)} bg-clip-text text-transparent`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
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
