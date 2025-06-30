"use client"

import { motion } from "framer-motion"

const projects = [
  {
    title: "EchoLearn – AI-Powered Speech-Aware Learning Assistant",
    description: [
      "Implemented a real-time NLP pipeline using Whisper for speech-to-text and Gemini API for spoken answer evaluation.",
      "Integrated T5 and Hugging Face Transformers for question generation and keyword extraction.",
      "Stack: Python, Streamlit, Whisper, Gemini API, Hugging Face, Flask, Google Translate API.",
    ],
  },
  {
    title: "MicroFi – NFT-collateralized P2P Microloan Platform",
    description: [
      "Built a full-stack dApp using Solidity smart contracts and GunJS for decentralized real-time storage.",
      "Enabled NFT-backed loan collateralization with automated liquidation and third-party escrow via Web3.",
      "Stack: React.js, Solidity, Express.js, Node.js, Tailwind CSS, GunJS.",
    ],
  },
  {
    title: "FarmVest – Online Marketplace for Farmers and Consumers",
    description: [
      "Developed a role-based Flutter app with Firebase Auth for secure multi-user login.",
      "Integrated Firestore for real-time product listing, price negotiation, and live updates.",
      "Stack: Flutter, Firebase, Firebase Auth, Firestore, Machine Learning (price prediction).",
    ],
  },
  {
    title: "HemoGuard – Anemia Predictor Web Application",
    description: [
      "Trained a Gradient Boosting Classifier on hematological features for anemia classification.",
      "Deployed the ML model via Flask and integrated real-time prediction in a responsive UI.",
      "Stack: HTML, CSS, JavaScript, Flask, MongoDB. Deployed on Render.",
    ],
  },
  {
    title: "Smart Umbrella with Rain Prediction System",
    description: [
      "Designed a weather-aware umbrella using ESP32 + ESP8266 with a Random Forest classifier for rain prediction.",
      "Implemented sensor integration (DHT11), Bluetooth data transmission, and real-time inference logic.",
      "Stack: Arduino, C++, Random Forest, ESP32, ESP8266, Bluetooth, DHT11.",
    ],
  },
  {
    title: "Supply Chain Management Database System",
    description: [
      "Engineered a relational schema in Oracle SQL to manage inventory, supplier, and order workflows.",
      "Integrated backend in Python with role-based queries and data visualization dashboards.",
      "Stack: Oracle SQL, Python, cx_Oracle.",
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

