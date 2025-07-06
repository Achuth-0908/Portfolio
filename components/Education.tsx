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
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
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
          className="mb-8 p-6 bg-slate-900/70 backdrop-blur-sm border border-slate-700/30 rounded-2xl shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 relative overflow-hidden group"
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
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
          
          {/* Header Section */}
          <div className="flex items-start justify-between mb-4 relative z-10">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="text-cyan-400 w-5 h-5" />
                <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                  {edu.degree}
                </h3>
                <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                  edu.status === 'completed' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                }`}>
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
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center gap-2 text-slate-300">
                  <GraduationCap className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">{edu.school}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Calendar className="w-4 h-4 text-purple-400" />
                  <span className="text-sm">{edu.date}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Points Section */}
          <div className="mt-4 relative z-10">
            <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
              Key Highlights
            </h4>
            <div className="space-y-2">
              {edu.points.map((point, pointIndex) => (
                <div
                  key={pointIndex}
                  className="flex items-start gap-3 text-slate-300"
                >
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Bar for Ongoing Education */}
          {edu.status === 'ongoing' && (
            <div className="mt-4 pt-4 border-t border-slate-700/50 relative z-10">
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
            </div>
          )}
        </motion.div>
      ))}
    </div>
  )
}
