"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
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
  const profileControls = useAnimation();

  useEffect(() => {
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
  }, [displayText, isTyping, currentTitleIndex]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  // Profile image floating animation
  useEffect(() => {
    const floatAnimation = async () => {
      while (true) {
        await profileControls.start({
          y: [-5, 5, -5],
          transition: { duration: 3, ease: "easeInOut" }
        });
      }
    };
    floatAnimation();
  }, [profileControls]);

  const letterAnimation = {
    initial: { 
      y: 100, 
      opacity: 0,
      rotateX: -90,
      scale: 0.5
    },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        delay: i * 0.15,
        ease: [0.16, 1, 0.3, 1],
        type: "spring",
        stiffness: 100,
        damping: 10
      },
    }),
    hover: {
      scale: 1.2,
      rotateY: 360,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const profileImageVariants = {
    initial: { 
      opacity: 0, 
      scale: 0,
      rotate: -180
    },
    animate: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.5,
        delay: 1.5,
        ease: [0.16, 1, 0.3, 1],
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const typewriterVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: 2
      }
    }
  };

  const glowEffect = {
    initial: { opacity: 0 },
    animate: {
      opacity: [0, 1, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

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
            {/* Glowing background effect for name */}
            <motion.div
              variants={glowEffect}
              initial="initial"
              animate="animate"
              className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl"
            />
            
            <div className="flex items-center justify-center overflow-hidden relative">
              {nameLetters.map((letter, i) => (
                <motion.span
                  key={i}
                  variants={letterAnimation}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  custom={i}
                  className={`text-6xl md:text-8xl font-bold inline-block relative cursor-pointer
                             ${letter === " " ? "mx-4" : ""}
                             `}
                  style={{
                    background: "linear-gradient(45deg, #06b6d4, #8b5cf6, #ec4899)",
                    backgroundSize: "200% 100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textShadow: "0 0 30px rgba(6, 182, 212, 0.5)",
                    filter: "drop-shadow(0 0 20px rgba(6, 182, 212, 0.3))"
                  }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    backgroundPosition: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  {letter}
                  {/* Individual letter glow effect */}
                  <motion.span
                    className="absolute inset-0 opacity-0"
                    style={{
                      background: "linear-gradient(45deg, #06b6d4, #8b5cf6, #ec4899)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                    whileHover={{ opacity: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    {letter}
                  </motion.span>
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
            {/* Profile Image with enhanced animations */}
            <motion.div
              variants={profileImageVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              className="relative"
            >
              <motion.div
                animate={profileControls}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-cyan-500 shadow-2xl relative"
                style={{
                  boxShadow: "0 0 50px rgba(6, 182, 212, 0.4)"
                }}
              >
                <img
                  src="/achuth's personal.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                
                {/* Rotating border effect */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0"
                  whileHover={{ 
                    opacity: 1,
                    rotate: 360,
                    transition: { duration: 2, repeat: Infinity, ease: "linear" }
                  }}
                  style={{ padding: "2px" }}
                />
              </motion.div>
              
              {/* Floating particles around profile */}
              <motion.div
                className="absolute -inset-4 pointer-events-none"
                animate={{
                  rotate: 360,
                  transition: { duration: 20, repeat: Infinity, ease: "linear" }
                }}
              >
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                    style={{
                      top: `${20 + Math.sin(i * Math.PI / 3) * 60}%`,
                      left: `${20 + Math.cos(i * Math.PI / 3) * 60}%`,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3
                      }
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>

            {/* "This is me" text with wave effect */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-300 font-light relative overflow-hidden"
            >
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="bg-gradient-to-r from-slate-300 via-cyan-400 to-slate-300 bg-clip-text text-transparent"
                style={{ backgroundSize: "200% 100%" }}
              >
                This is me
              </motion.span>
            </motion.p>

            {/* Enhanced typewriter effect */}
            <motion.div 
              variants={typewriterVariants}
              initial="initial"
              animate="animate"
              className="text-center space-y-4"
            >
              <div className="h-20 flex items-center justify-center">
                <motion.p 
                  className="text-xl md:text-2xl text-slate-300 font-light relative"
                  key={currentTitleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.span
                    className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    style={{ backgroundSize: "200% 100%" }}
                  >
                    {displayText}
                  </motion.span>
                  <motion.span
                    className="text-cyan-400 ml-1"
                    animate={{ opacity: showCursor ? 1 : 0 }}
                    transition={{ duration: 0.1 }}
                  >
                    |
                  </motion.span>
                </motion.p>
              </div>
              
              {/* Tagline with particle effect */}
              <motion.div
                variants={itemVariants}
                className="relative"
              >
                <motion.p 
                  className="text-base md:text-lg text-slate-400 mt-6 font-light italic relative z-10"
                  animate={{
                    textShadow: [
                      "0 0 10px rgba(6, 182, 212, 0.3)",
                      "0 0 20px rgba(6, 182, 212, 0.5)",
                      "0 0 10px rgba(6, 182, 212, 0.3)"
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Transforming ideas into reality through code.
                </motion.p>
                
                {/* Background particles */}
                <motion.div className="absolute inset-0 pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-30"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [-10, 10, -10],
                        x: [-5, 5, -5],
                        opacity: [0.3, 0.8, 0.3],
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
