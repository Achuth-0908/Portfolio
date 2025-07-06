"use client"

import { motion } from "framer-motion"
import { CheckCircle, GraduationCap, Calendar, Award } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Technology (Computer Science and Engineering)",
    school: "Vellore Institute of Technology, Chennai",
    date: "September 2022 – June 2026",
    status: "ongoing",
    points: [
      "Specialized in Computer Science and Engineering",
      "Maintaining excellent academic performance",
      "Active participation in technical projects",
      "Expected graduation: June 2026"
    ]
  },
  {
    degree: "Class 12th – CBSE",
    school: "Sri Chaitanya Techno Senior Secondary School",
    date: "April 2021 – June 2022",
    status: "completed",
    points: [
      "Successfully completed Higher Secondary Education",
      "Strong foundation in Science and Mathematics",
      "Qualified for engineering entrance examinations"
    ]
  },
  {
    degree: "Class 10th – CBSE",
    school: "Chhathrapathy Shivaji DAV Secondary School",
    date: "April 2019 – March 2020",
    status: "completed",
    points: [
      "Completed Secondary School Education with distinction",
      "Consistent academic performance across all subjects",
      "Built strong fundamentals for higher studies"
    ]
  },
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

const pointVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
}

export function Education() {
  return (
    <div className="max-w-4xl mx-auto">
      {education.map((edu, index) => (
        <motion.div
          key={index}
          className="mb-8 p-6 bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 relative overflow-hidden group"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={index}
          whileHover={{
            scale: 1.01,
            boxShadow: "0 20px 40px -12px rgba(6, 182, 212, 0.15)",
            borderColor: "rgba(6, 182, 212, 0.3)"
          }}
          style={{ willChange: 'transform' }}
        >
          {/* Gradient overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
          />

          {/* Header Section */}
          <div className="flex items-start justify-between mb-4 relative z-10">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  <GraduationCap className="text-cyan-400 w-6 h-6" />
                </motion.div>
                <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                  {edu.degree}
                </h3>
                <motion.div 
                  className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                    edu.status === 'completed' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {edu.status === 'completed' ? (
                    <>
                      <CheckCircle className="w-3 h-3" />
                      Completed
                    </>
                  ) : (
                    <>
                      <Calendar className="w-3 h-3" />
                      Ongoing
                    </>
                  )}
                </motion.div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <motion.div 
                  className="flex items-center gap-2 text-slate-300"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <GraduationCap className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">{edu.school}</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2 text-slate-300"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <Calendar className="w-4 h-4 text-purple-400" />
                  <span className="text-sm">{edu.date}</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2 text-slate-300"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <Award className="w-4 h-4 text-pink-400" />
                  <span className="text-sm font-medium">{edu.grade}</span>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Key Points Section */}
          <div className="mt-4 relative z-10">
            <motion.h4 
              className="text-lg font-semibold text-white mb-3 flex items-center gap-2"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              <motion.span 
                className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
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
              Key Highlights
            </motion.h4>
            <div className="space-y-2">
              {edu.points.map((point, pointIndex) => (
                <motion.div
                  key={pointIndex}
                  className="flex items-start gap-3 text-slate-300 group/point"
                  variants={pointVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: pointIndex * 0.05 }}
                  whileHover={{ x: 3 }}
                >
                  <motion.div 
                    className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-2 flex-shrink-0"
                    whileHover={{ scale: 1.3 }}
                    transition={{ duration: 0.2 }}
                  />
                  <span className="text-sm leading-relaxed group-hover/point:text-white transition-colors duration-200">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Progress Bar for Ongoing Education */}
          {edu.status === 'ongoing' && (
            <motion.div 
              className="mt-4 pt-4 border-t border-slate-700/50 relative z-10"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-300">Academic Progress</span>
                <span className="text-sm text-cyan-400 font-medium">Year 4 of 4</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                <motion.div 
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: '75%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                />
              </div>
            </motion.div>
          )}

          {/* Floating particles for completed education */}
          {edu.status === 'completed' && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
              {[...Array(2)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-green-400 rounded-full opacity-20"
                  style={{
                    top: `${30 + i * 30}%`,
                    right: `${15 + i * 20}%`,
                  }}
                  animate={{
                    y: [-5, 5, -5],
                    opacity: [0.2, 0.5, 0.2],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  )
}
