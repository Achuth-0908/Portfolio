"use client"

import { motion } from "framer-motion"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"

const skills = [
// Tech Stack
{ name: "React.js", icon: "⚛️", category: "Frontend" },
{ name: "Express.js", icon: "🚂", category: "Backend" },
{ name: "Node.js", icon: "🟩", category: "Backend" },
{ name: "Tailwind", icon: "💨", category: "Frontend" },
{ name: "HTML5", icon: "🌐", category: "Frontend" },
{ name: "CSS3", icon: "🎨", category: "Frontend" },
{ name: "Flask", icon: "🧪", category: "Backend" },

// AI/ML Frameworks
{ name: "Scikit-learn", icon: "📊", category: "AI/ML" },
{ name: "TensorFlow", icon: "🧠", category: "AI/ML" },
{ name: "Keras", icon: "🔬", category: "AI/ML" },
{ name: "NLTK", icon: "📚", category: "AI/ML" },
{ name: "SpaCy", icon: "🧬", category: "AI/ML" },
{ name: "Hugging Face", icon: "🤗", category: "AI/ML" },
{ name: "T5", icon: "📝", category: "AI/ML" },
{ name: "BERT", icon: "🧠", category: "AI/ML" },
{ name: "SmolAgents", icon: "🎛️", category: "AI/ML" },
{ name: "LangChain", icon: "🔗", category: "AI/ML" },
{ name: "LangGraph", icon: "📈", category: "AI/ML" },
{ name: "LlamaIndex", icon: "🦙", category: "AI/ML" },

// Databases
{ name: "MongoDB", icon: "🍃", category: "Database" },
{ name: "MySQL", icon: "🐬", category: "Database" },
{ name: "Firebase", icon: "🔥", category: "Database" },

// Tools & Cloud
{ name: "Git", icon: "🔀", category: "Tools" },
{ name: "GitHub", icon: "🐙", category: "Tools" },
{ name: "AWS", icon: "☁️", category: "Cloud" },
{ name: "Streamlit", icon: "📈", category: "Tools" },
{ name: "Vercel", icon: "▲", category: "Cloud" },
{ name: "Docker", icon: "🐳", category: "Tools" },
{ name: "GCP", icon: "🌥️", category: "Cloud" },
{ name: "Figma", icon: "🖌️", category: "Design" },
{ name: "Canva", icon: "🎨", category: "Design" },

// DS/AI Concepts
{ name: "Machine Learning", icon: "🤖", category: "Concepts" },
{ name: "Deep Learning", icon: "🧠", category: "Concepts" },
{ name: "EDA", icon: "📊", category: "Concepts" },
{ name: "NLP", icon: "🗣️", category: "Concepts" },
{ name: "LLMs", icon: "🧠", category: "Concepts" },
{ name: "Generative AI", icon: "✨", category: "Concepts" },
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
const skillItems = skills.map((skill, index) => ({
content: (
<motion.div
className={w-full h-full flex flex-col items-center justify-center                     bg-slate-900/60 backdrop-blur-xl border ${getCategoryBorder(skill.category)}                     rounded-2xl p-6 shadow-2xl hover:shadow-cyan-500/10                     transition-all duration-500 relative overflow-hidden group                    min-w-[180px] min-h-[140px]}
whileHover={{
scale: 1.05,
boxShadow: "0 25px 50px -12px rgba(6, 182, 212, 0.15)",
borderColor: "rgba(6, 182, 212, 0.4)"
}}
whileTap={{ scale: 0.98 }}
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{
duration: 0.5,
delay: index * 0.05,
ease: [0.16, 1, 0.3, 1]
}}
>
{/* Gradient overlay on hover */}
<motion.div
className={absolute inset-0 bg-gradient-to-r ${getCategoryColor(skill.category)}                       opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl}
/>


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
            opacity: [0.2, 0.6, 0.2],
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
        className="text-4xl mb-3 filter drop-shadow-lg"
        whileHover={{ 
          scale: 1.2, 
          rotate: [0, -10, 10, 0],
          transition: { duration: 0.5 }
        }}
      >
        {skill.icon}
      </motion.div>
      
      <motion.h3 
        className={`text-lg font-semibold text-center leading-tight
                   bg-clip-text text-transparent bg-gradient-to-r ${getCategoryColor(skill.category)}`}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        {skill.name}
      </motion.h3>
      
      <motion.span 
        className="text-xs text-slate-400 mt-1 px-2 py-1 rounded-full bg-slate-800/50 border border-slate-700/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {skill.category}
      </motion.span>
    </div>

    {/* Hover glow effect */}
    <motion.div
      className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${getCategoryColor(skill.category)} 
                 opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`}
    />
  </motion.div>
),
}))

return (
<div className="w-full max-w-7xl mx-auto px-4">
{/* Section Header */}
<motion.div
className="text-center mb-12"
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
>
A comprehensive toolkit spanning full-stack development, AI/ML, cloud technologies, and modern design tools
</motion.p>


    {/* Category Legend */}
    <motion.div 
      className="flex flex-wrap justify-center gap-3 mb-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
    >
      {Array.from(new Set(skills.map(skill => skill.category))).map((category, index) => (
        <motion.span
          key={category}
          className={`px-3 py-1 text-xs font-medium rounded-full 
                     bg-slate-900/60 backdrop-blur-xl border ${getCategoryBorder(category)}
                     bg-gradient-to-r ${getCategoryColor(category)} bg-clip-text text-transparent`}
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          {category}
        </motion.span>
      ))}
    </motion.div>
  </motion.div>

  {/* Skills Cards */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    {[
      { label: "Technologies", count: skills.length, icon: "⚡" },
      { label: "Categories", count: Array.from(new Set(skills.map(s => s.category))).length, icon: "📚" },
      { label: "AI/ML Tools", count: skills.filter(s => s.category === "AI/ML").length, icon: "🤖" },
      { label: "Years Experience", count: "3+", icon: "🚀" }
    ].map((stat, index) => (
      <motion.div
        key={stat.label}
        className="text-center p-4 bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl"
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 10px 30px rgba(6, 182, 212, 0.1)"
        }}
        initial={{ opacity: 0, y: 20 }}
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
