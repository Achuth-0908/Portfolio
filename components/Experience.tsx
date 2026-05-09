"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, Building, MapPin, Clock, Star, TrendingUp } from "lucide-react"

const experiences = [
  {
    title: "Data Science Intern",
    company: "AB InBev GCC India",
    date: "January 2026 - Present",
    type: "Internship",
    status: "ongoing",
    category: "Technology",
    location: "Bengaluru, India",
    description: "Working on data science initiatives at AB InBev's Global Capability Center, applying machine learning, optimization algorithms, and analytics to drive business insights for one of the world's largest consumer goods companies.",
    highlights: [
      "Developing data-driven solutions and ML models to optimize business operations",
      "Collaborating with cross-functional teams on analytics and reporting pipelines",
      "Leveraging large-scale datasets to generate actionable insights for decision-making"
    ]
  },
  {
    title: "CNS Training Intern",
    company: "Airports Authority of India",
    date: "June 2024 - July 2024",
    type: "Internship",
    status: "completed",
    category: "Government",
    location: "India",
    description: "Gained hands-on experience in Communication, Navigation, and Surveillance systems at one of India's premier aviation authorities.",
    highlights: [
      "Worked with advanced CNS technologies and systems",
      "Learned about airport operations and air traffic management",
      "Collaborated with experienced aviation professionals"
    ]
  },
  {
    title: "Project Training Intern",
    company: "Samsung PRISM",
    date: "June 2024 - July 2025",
    type: "Research Internship",
    status: "completed",
    category: "Technology",
    location: "VIT Chennai",
    description: "Contributing to cutting-edge research and development projects under Samsung's prestigious PRISM program for university collaboration.",
    highlights: [
      "Working on innovative technology solutions",
      "Collaborating with Samsung's R&D teams",
      "Developing industry-relevant technical skills"
    ]
  },
  {
    title: "UI / UX Design Lead",
    company: "Newton School of Coding Club VIT-C",
    date: "July 2024 - May 2025",
    type: "Leadership Role",
    status: "completed",
    category: "Education",
    location: "VIT Chennai",
    description: "Leading design initiatives and creating user-centered experiences for the coding club's digital platforms and events.",
    highlights: [
      "Leading a team of designers and developers",
      "Creating engaging user interfaces for club platforms",
      "Organizing design workshops and mentoring sessions"
    ]
  },
  {
    title: "Marketing and Sponsorship Lead",
    company: "CodeChef VIT-C Student Chapter",
    date: "April 2024 - May 2025",
    type: "Leadership Role",
    status: "completed",
    category: "Community",
    location: "VIT Chennai",
    description: "Driving marketing strategies and securing sponsorships for competitive programming events and technical workshops.",
    highlights: [
      "Secured partnerships with leading tech companies",
      "Developed comprehensive marketing campaigns",
      "Increased event participation by 150%"
    ]
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
    "Government": "from-blue-400 to-cyan-500",
    "Technology": "from-purple-400 to-pink-500",
    "Education": "from-green-400 to-emerald-500",
    "Community": "from-orange-400 to-amber-500",
  }
  return colors[category] || "from-slate-400 to-slate-600"
}

const getCategoryBorder = (category: string) => {
  const borders: Record<string, string> = {
    "Government": "border-blue-500/30",
    "Technology": "border-purple-500/30",
    "Education": "border-green-500/30",
    "Community": "border-orange-500/30",
  }
  return borders[category] || "border-slate-500/30"
}

const getTypeIcon = (type: string) => {
  const icons: Record<string, string> = {
    "Internship": "\uD83C\uDF93",
    "Research Internship": "\uD83D\uDD2C",
    "Leadership Role": "\uD83D\uDC51",
  }
  return icons[type] || "\uD83D\uDCBC"
}

export function Experience() {
  return (
    <div className="relative max-w-5xl mx-auto">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-lg text-slate-400 mb-6 max-w-3xl mx-auto">
          Professional journey spanning internships, leadership roles, and collaborative projects across diverse industries
        </p>
      </motion.div>

      <div className="relative z-10 px-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`mb-8 p-6 bg-slate-900/60 border ${getCategoryBorder(exp.category)} 
                       rounded-2xl shadow-xl hover:shadow-cyan-500/10 
                       transition-all duration-300 relative overflow-hidden group`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
          >
            {/* Gradient overlay on hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${getCategoryColor(exp.category)} 
                         opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
            />

            {/* Header */}
            <div className="flex items-start justify-between mb-4 relative z-10">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <Briefcase className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <h3 className={`text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${getCategoryColor(exp.category)} leading-tight`}>
                    {exp.title}
                  </h3>
                  <span
                    className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                      exp.status === 'completed' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                    }`}
                  >
                    {exp.status === 'completed' ? (
                      <><Star className="w-3 h-3" /> Completed</>
                    ) : (
                      <><TrendingUp className="w-3 h-3" /> Ongoing</>
                    )}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Building className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className="text-sm font-medium">{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Calendar className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <span className="text-sm">{exp.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Clock className="w-4 h-4 text-pink-400 flex-shrink-0" />
                    <span className="text-sm">{exp.type}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <MapPin className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <span className="ml-4 text-3xl">{getTypeIcon(exp.type)}</span>
            </div>

            {/* Description */}
            <div className="mb-4 relative z-10">
              <p className="text-sm text-slate-300 leading-relaxed">{exp.description}</p>
            </div>

            {/* Key Highlights */}
            <div className="relative z-10">
              <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                <span className={`w-2 h-2 bg-gradient-to-r ${getCategoryColor(exp.category)} rounded-full`} />
                Key Highlights
              </h4>
              <div className="space-y-2">
                {exp.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-3 text-slate-300">
                    <div className={`w-1.5 h-1.5 bg-gradient-to-r ${getCategoryColor(exp.category)} rounded-full mt-2 flex-shrink-0`} />
                    <span className="text-xs leading-relaxed">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress indicator for ongoing roles */}
            {exp.status === 'ongoing' && (
              <div className="mt-4 pt-4 border-t border-slate-700/50 relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-300">Role Progress</span>
                  <span className="text-sm text-cyan-400 font-medium">Active</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                  <motion.div 
                    className={`bg-gradient-to-r ${getCategoryColor(exp.category)} h-2 rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: '60%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  />
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
