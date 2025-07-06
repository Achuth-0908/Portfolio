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
        }, 60);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 30);
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
          y: [-3, 3, -3],
          transition: { duration: 2.5, ease: "easeInOut" }
        });
      }
    };
    floatAnimation();
  }, [profileControls]);

  const letterAnimation = {
    initial: {
      y: 60,
      opacity: 0,
      rotateX: -45,
      scale: 0.8
    },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: i * 0.1,
        ease: [0.16, 1, 0.3, 1],
        type: "spring",
        stiffness: 80,
        damping: 12
      },
    }),
    hover: {
      scale: 1.1,
      rotateY: 360,
      color: "#14b8a6",
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
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
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const profileImageVariants = {
    initial: {
      opacity: 0,
      scale: 0,
      rotate: -90
    },
    animate: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        delay: 1,
        ease: [0.16, 1, 0.3, 1],
        type: "spring",
        stiffness: 80
      }
    },
    hover: {
      scale: 1.05,
      rotate: 3,
      boxShadow: "0 15px 30px rgba(20, 184, 166, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const typewriterVariants = {
    initial: { opacity: 0, y: 15 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 1.5
      }
    }
  };

  const glowEffect = {
    initial: { opacity: 0 },
    animate: {
      opacity: [0, 0.8, 0],
      transition: {
        duration: 1.5,
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
              className="absolute inset-0 bg-gradient-to-r from-teal-500/15 to-violet-500/15 blur-3xl"
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
                  className={`text-6xl md:text-8xl font-bold inline-block relative
                             ${letter === " " ? "mx-4" : ""}
                             bg-gradient-to-r from-teal-500 via-violet-500 to-purple-500 
                             hover:from-teal-300 hover:via-violet-400 hover:to-purple-400
                             bg-clip-text text-transparent
                             transition-all duration-400
                             cursor-pointer
                             drop-shadow-2xl
                             `}
                  style={{
                    textShadow: "0 0 20px rgba(20, 184, 166, 0.4)",
                    willChange: 'transform'
                  }}
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
                className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-teal-500 shadow-2xl relative"
                style={{
                  boxShadow: "0 0 40px rgba(20, 184, 166, 0.3)",
                  willChange: 'transform'
                }}
              >
                <img
                  src="/achuth's personal.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                
                {/* Rotating border effect */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-teal-500 via-violet-500 to-purple-500 opacity-0"
                  whileHover={{ 
                    opacity: 1,
                    rotate: 360,
                    transition: { duration: 1.5, repeat: Infinity, ease: "linear" }
                  }}
                  style={{ padding: "2px" }}
                />
              </motion.div>
              
              {/* Floating particles around profile */}
              <motion.div
                className="absolute -inset-4 pointer-events-none"
                animate={{
                  rotate: 360,
                  transition: { duration: 15, repeat: Infinity, ease: "linear" }
                }}
              >
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-teal-400 rounded-full"
                    style={{
                      top: `${20 + Math.sin(i * Math.PI / 2) * 50}%`,
                      left: `${20 + Math.cos(i * Math.PI / 2) * 50}%`,
                    }}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.4, 0.8, 0.4],
                      transition: {
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2
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
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="bg-gradient-to-r from-slate-300 via-teal-400 to-slate-300 bg-clip-text text-transparent"
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
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.span
                    className="bg-gradient-to-r from-teal-400 via-violet-400 to-purple-400 bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    style={{ backgroundSize: "200% 100%" }}
                  >
                    {displayText}
                  </motion.span>
                  <motion.span
                    className="text-teal-400 ml-1"
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
                      "0 0 8px rgba(20, 184, 166, 0.2)",
                      "0 0 15px rgba(20, 184, 166, 0.4)",
                      "0 0 8px rgba(20, 184, 166, 0.2)"
                    ]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Transforming ideas into reality through code.
                </motion.p>
                
                {/* Background particles */}
                <motion.div className="absolute inset-0 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-teal-400 rounded-full opacity-20"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [-8, 8, -8],
                        x: [-3, 3, -3],
                        opacity: [0.2, 0.6, 0.2],
                        scale: [1, 1.3, 1],
                      }}
                      transition={{
                        duration: 2.5 + Math.random() * 1.5,
                        repeat: Infinity,
                        delay: i * 0.15,
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
  )
}
