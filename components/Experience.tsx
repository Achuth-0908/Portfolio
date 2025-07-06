"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  Building,
  MapPin,
  Clock,
  Star,
  TrendingUp,
} from "lucide-react";

const experiences = [
  {
    title: "CNS Training Intern",
    company: "Airports Authority of India",
    date: "June 2024 – July 2024",
    type: "Internship",
    status: "completed",
    category: "Government",
    location: "India",
    description:
      "Gained hands-on experience in Communication, Navigation, and Surveillance systems at one of India's premier aviation authorities.",
    highlights: [
      "Worked with advanced CNS technologies and systems",
      "Learned about airport operations and air traffic management",
      "Collaborated with experienced aviation professionals",
    ],
  },
  {
    title: "Project Training Intern",
    company: "Samsung PRISM",
    date: "June 2024 – Present",
    type: "Research Internship",
    status: "ongoing",
    category: "Technology",
    location: "Remote",
    description:
      "Contributing to cutting-edge research and development projects under Samsung's prestigious PRISM program for university collaboration.",
    highlights: [
      "Working on innovative technology solutions",
      "Collaborating with Samsung's R&D teams",
      "Developing industry-relevant technical skills",
    ],
  },
  {
    title: "UI / UX Design Lead",
    company: "Newton School of Coding Club VIT-C",
    date: "July 2024 – May 2025",
    type: "Leadership Role",
    status: "completed",
    category: "Education",
    location: "VIT Chennai",
    description:
      "Leading design initiatives and creating user-centered experiences for the coding club's digital platforms and events.",
    highlights: [
      "Leading a team of designers and developers",
      "Creating engaging user interfaces for club platforms",
      "Organizing design workshops and mentoring sessions",
    ],
  },
  {
    title: "Marketing and Sponsorship Lead",
    company: "CodeChef VIT-C Student Chapter",
    date: "April 2024 – May 2025",
    type: "Leadership Role",
    status: "completed",
    category: "Community",
    location: "VIT Chennai",
    description:
      "Driving marketing strategies and securing sponsorships for competitive programming events and technical workshops.",
    highlights: [
      "Secured partnerships with leading tech companies",
      "Developed comprehensive marketing campaigns",
      "Increased event participation by 150%",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const highlightVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const getCategoryColor = (category: string) => {
  const colors = {
    Government: "from-blue-400 to-cyan-500",
    Technology: "from-purple-400 to-pink-500",
    Education: "from-green-400 to-emerald-500",
    Community: "from-orange-400 to-amber-500",
  };
  return colors[category] || "from-slate-400 to-slate-600";
};

const getCategoryBorder = (category: string) => {
  const borders = {
    Government: "border-blue-500/30",
    Technology: "border-purple-500/30",
    Education: "border-green-500/30",
    Community: "border-orange-500/30",
  };
  return borders[category] || "border-slate-500/30";
};

const getTypeIcon = (type: string) => {
  const icons = {
    Internship: "🎓",
    "Research Internship": "🔬",
    "Leadership Role": "👑",
  };
  return icons[type] || "💼";
};

export function Experience() {
  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Section Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.p
          className="text-lg text-slate-400 mb-6 max-w-3xl mx-auto"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Professional journey spanning internships, leadership roles, and
          collaborative projects across diverse industries
        </motion.p>
      </motion.div>

      {/* Experience Timeline */}
      <div className="relative z-10 px-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`mb-8 p-6 bg-slate-900/60 backdrop-blur-xl border ${getCategoryBorder(
              exp.category
            )} rounded-2xl shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 relative overflow-hidden group`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            custom={index}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(6, 182, 212, 0.15)",
              borderColor: "rgba(6, 182, 212, 0.4)",
            }}
          >
            {/* Gradient hover overlay */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-r ${getCategoryColor(
                exp.category
              )} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
            />

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-1 h-1 bg-gradient-to-r ${getCategoryColor(
                    exp.category
                  )} rounded-full opacity-20`}
                  style={{
                    top: `${20 + i * 25}%`,
                    right: `${10 + i * 20}%`,
                  }}
                  animate={{
                    y: [-8, 8, -8],
                    opacity: [0.2, 0.6, 0.2],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 2.5 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            {/* Experience Header */}
            <div className="flex items-start justify-between mb-4 relative z-10">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Briefcase
                      className={`w-6 h-6 bg-gradient-to-r ${getCategoryColor(
                        exp.category
                      )} bg-clip-text text-transparent`}
                    />
                  </motion.div>
                  <h3
                    className={`text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${getCategoryColor(
                      exp.category
                    )} leading-tight`}
                  >
                    {exp.title}
                  </h3>
                  <motion.div
                    className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                      exp.status === "completed"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {exp.status === "completed" ? (
                      <>
                        <Star className="w-3 h-3" />
                        Completed
                      </>
                    ) : (
                      <>
                        <TrendingUp className="w-3 h-3" />
                        Ongoing
                      </>
                    )}
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4">
                  <motion.div
                    className="flex items-center gap-2 text-slate-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Building className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm font-medium">{exp.company}</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-2 text-slate-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Calendar className="w-4 h-4 text-purple-400" />
                    <span className="text-sm">{exp.date}</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-2 text-slate-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Clock className="w-4 h-4 text-pink-400" />
                    <span className="text-sm">{exp.type}</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-2 text-slate-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MapPin className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm">{exp.location}</span>
                  </motion.div>
                </div>
              </div>

              <motion.div
                className="ml-4 text-3xl"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {getTypeIcon(exp.type)}
              </motion.div>
            </div>

            {/* Description */}
            <motion.div
              className="mb-4 relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-sm text-slate-300 leading-relaxed">
                {exp.description}
              </p>
            </motion.div>

            {/* Highlights */}
            <div className="relative z-10">
              <motion.h4
                className="text-sm font-semibold text-white mb-3 flex items-center gap-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.span
                  className={`w-2 h-2 bg-gradient-to-r ${getCategoryColor(
                    exp.category
                  )} rounded-full`}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                Key Highlights
              </motion.h4>
              <div className="space-y-2">
                {exp.highlights.map((highlight, highlightIndex) => (
                  <motion.div
                    key={highlightIndex}
                    className="flex items-start gap-3 text-slate-300 group/highlight"
                    variants={highlightVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: highlightIndex * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className={`w-1.5 h-1.5 bg-gradient-to-r ${getCategoryColor(
                        exp.category
                      )} rounded-full mt-2 flex-shrink-0`}
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    />
                    <span className="text-xs leading-relaxed group-hover/highlight:text-white transition-colors duration-200">
                      {highlight}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Progress Bar for ongoing roles */}
            {exp.status === "ongoing" && (
              <motion.div
                className="mt-4 pt-4 border-t border-slate-700/50 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-300">Role Progress</span>
                  <span className="text-sm text-cyan-400 font-medium">
                    Active
                  </span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className={`bg-gradient-to-r ${getCategoryColor(
                      exp.category
                    )} h-2 rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "60%" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.5,
                      ease: "easeOut",
                      delay: 0.5,
                    }}
                  />
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Stats Section */}
      <motion.div
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {[
          {
            label: "Total Roles",
            count: experiences.length,
            icon: "💼",
          },
          {
            label: "Active Positions",
            count: experiences.filter((e) => e.status === "ongoing").length,
            icon: "🚀",
          },
          {
            label: "Organizations",
            count: new Set(experiences.map((e) => e.company)).size,
            icon: "🏢",
          },
          {
            label: "Experience",
            count: "2+ Years",
            icon: "⭐",
          },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            className="text-center p-4 bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(6, 182, 212, 0.1)",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <motion.div
              className="text-2xl mb-2"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              {stat.icon}
            </motion.div>
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              {stat.count}
            </div>
            <div className="text-sm text-slate-400">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
