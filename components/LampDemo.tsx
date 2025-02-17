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

  useEffect(() => {
    let timeout;
    const currentTitle = titles[currentTitleIndex];
    
    if (isTyping) {
      if (displayText.length < currentTitle.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentTitleIndex]);

  const letterAnimation = {
    initial: { y: 100, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: i * 0.1,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <div className="relative min-h-screen w-full">
      <div className="absolute inset-0">
        <Bubbles />
      </div>
      
      <div className="relative z-10">
        <LampContainer>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="flex flex-col items-center justify-center space-y-8"
          >
            <div className="flex items-center justify-center overflow-hidden">
              {nameLetters.map((letter, i) => (
                <motion.span
                  key={i}
                  variants={letterAnimation}
                  initial="initial"
                  animate="animate"
                  custom={i}
                  className={`text-6xl md:text-8xl font-bold inline-block
                             ${letter === " " ? "mx-2" : ""}
                             bg-gradient-to-r from-blue-800 to-green-500 
                             hover:from-blue-600 hover:to-green-400
                             bg-clip-text text-transparent
                             transition-colors duration-300
                             hover:scale-110 transform cursor-default
                             `}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </LampContainer>

        <div className="max-w-4xl mx-auto px-4 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col items-center justify-center space-y-8"
          >
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg"
            >
              <img
                src="/achuth's personal.jpg"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* "This is me" text */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="text-lg text-slate-300 font-light"
            >
              This is me
            </motion.p>

            <div className="text-center space-y-4">
              <div className="h-20 flex items-center justify-center">
                <p className="text-xl md:text-2xl text-slate-300 font-light">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </p>
              </div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="text-base md:text-lg text-slate-400 mt-6 font-light italic"
              >
                Transforming ideas into reality through code.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

