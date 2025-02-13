"use client"

import { motion } from "framer-motion"

const projects = [
  {
    title: "Online Marketplace for Farmers and Consumers using Flutter",
    description: [
      "Developed a multi-login system with role-based access for farmers to list products and consumers to browse, view, and negotiate directly.",
      "Integrated Firebase Firestore for real-time product listings and negotiations, and Firebase Authentication for secure logins.",
      "Built a user-friendly interface for product management, price negotiations, and seamless transactions.",
    ],
  },
  {
    title: "Anemia Predictor Web Application",
    description: [
      "Developed a ML model that follows the Gradient Boosting Classifier algorithm with blood report data.",
      "Built a responsive web-application using HTML, CSS and Flask.",
      "Integrated the ML model to provide real-time Anemia detection.",
    ],
  },
  {
    title: "Smart Umbrella with Rain Prediction System",
    description: [
      "Developed an Arduino-based smart umbrella system using ESP32, ESP8266, and DHT11 sensors for real-time weather monitoring and rain prediction using a Random Forest Classifier.",
      "Implemented Bluetooth communication between the external data collection unit and the umbrella module for seamless data transfer.",
    ],
  },
  {
    title: "Supply Chain Management Database System",
    description: [
      "Developed a comprehensive Oracle SQL-based database system to manage and optimize supply chain operations, ensuring efficient tracking of inventory, orders, and supplier information.",
      "Implemented secure backend connectivity using Python and integrated data visualization dashboards for actionable insights and enhanced decision-making.",
    ],
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
}

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      ease: "easeOut",
    },
  }),
}

export function Projects() {
  return (
    <div className="relative">
      {/* Content with glass effect cards */}
      <div className="relative z-10 max-w-3xl mx-auto px-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="mb-6 p-6 rounded-lg shadow-xl transition-all duration-300
                       backdrop-blur-md bg-blue-800/30 hover:bg-blue-800/40
                       border border-blue-700/50
                       hover:shadow-blue-500/20 hover:-translate-y-1"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
          >
            <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {project.title}
            </h3>
            <ul className="space-y-2">
              {project.description.map((item, i) => (
                <motion.li
                  key={i}
                  className="text-gray-300"
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

