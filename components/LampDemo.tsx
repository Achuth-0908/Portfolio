"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { Bubbles } from "./ui/bubbles";

const titles = [
  "Passionate Software Developer",
  "Full Stack Developer",
  "AI / ML Enthusiast",
  "Flutter Developer",
  "UI/UX Enthusiast",
  "Competitive Programmer",
];

const nameLetters = "G. ACHUTH".split("");

export function LampDemo() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  // Loading delay to prevent flash
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    
    let timeout;
    const currentTitle = titles[currentTitleIndex];
    
    if (isTyping) {
      if (displayText.length < currentTitle.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2500);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 40);
      } else {
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentTitleIndex, isLoaded]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const letterAnimation = {
    initial: { 
      y: 50, 
      opacity: 0,
      scale: 0.8
    },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: i * 0.1,
        ease: "easeOut"
      },
    }),
    hover: {
      scale: 1.1,
      color: "#60a5fa",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const profileImageVariants = {
    initial: { 
      opacity: 0, 
      scale: 0.8
    },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 1,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Bubbles />
      </div>
      
      <div className="relative z-10">
        <LampContainer>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center justify-center space-y-8"
          >
            <div className="flex items-center justify-center overflow-hidden relative">
              {nameLetters.map((letter, i) => (
                <motion.span
                  key={i}
                  variants={letterAnimation}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  custom={i}
                  className={`text-6xl md:text-8xl font-bold inline-block relative
                             ${letter === " " ? "mx-4" : ""}
                             bg-gradient-to-r from-blue-800 via-purple-600 to-green-500 
                             hover:from-blue-400 hover:via-purple-400 hover:to-green-400
                             bg-clip-text text-transparent
                             transition-all duration-300
                             cursor-pointer`}
                  style={{ willChange: 'transform' }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </LampContainer>

        <motion.div 
          className="max-w-4xl mx-auto px-4 mt-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col items-center justify-center space-y-8">
            {/* Profile Image */}
            <motion.div
              variants={profileImageVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              className="relative"
            >
              <motion.div
                className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl relative"
                animate={{
                  y: [0, -5, 0],
                  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <img
                  src="/achuth's personal.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </motion.div>
            </motion.div>

            {/* "This is me" text */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-300 font-light"
            >
              This is me
            </motion.p>

            {/* Typewriter effect */}
            <motion.div 
              variants={itemVariants}
              className="text-center space-y-4"
            >
              <div className="h-20 flex items-center justify-center">
                <p className="text-xl md:text-2xl text-slate-300 font-light">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                    {displayText}
                  </span>
                  <motion.span
                    className="text-blue-400 ml-1"
                    animate={{ opacity: showCursor ? 1 : 0 }}
                    transition={{ duration: 0.1 }}
                  >
                    |
                  </motion.span>
                </p>
              </div>
              
              {/* Tagline */}
              <motion.p 
                className="text-base md:text-lg text-slate-400 mt-6 font-light italic"
                variants={itemVariants}
              >
                Transforming ideas into reality through code.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
