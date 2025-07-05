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
      "Expected graduation: July 2026"
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
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const pointVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
}

export function Education() {
  return (
    <div className="max-w-4xl mx-auto">
      {education.map((edu, index) => (
        <motion.div
          key={index}
          className="mb-8 p-6 bg-gradient-to-r from-purple-800 to-purple-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-600"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={index}
        >
          {/* Header Section */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="text-pink-400 w-6 h-6" />
                <h3 className="text-xl font-bold text-pink-400">{edu.degree}</h3>
                <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                  edu.status === 'completed' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
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
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="flex items-center gap-2 text-gray-300">
                  <GraduationCap className="w-4 h-4 text-purple-400" />
                  <span className="text-sm">{edu.school}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Calendar className="w-4 h-4 text-purple-400" />
                  <span className="text-sm">{edu.date}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Award className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-medium">{edu.grade}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Points Section */}
          <div className="mt-4">
            <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
              Key Highlights
            </h4>
            <div className="space-y-2">
              {edu.points.map((point, pointIndex) => (
                <motion.div
                  key={pointIndex}
                  className="flex items-start gap-3 text-gray-300"
                  variants={pointVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: pointIndex * 0.1 }}
                >
                  <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm leading-relaxed">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Progress Bar for Ongoing Education */}
          {edu.status === 'ongoing' && (
            <div className="mt-4 pt-4 border-t border-purple-600">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-300">Academic Progress</span>
                <span className="text-sm text-pink-400 font-medium">Year 4 of 4</span>
              </div>
              <div className="w-full bg-purple-900 rounded-full h-2">
                <div className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  )
}
