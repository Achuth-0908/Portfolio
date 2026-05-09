"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";

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
    let timeout: ReturnType<typeof setTimeout>;
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

  return (
    <div className="relative w-full">
      <LampContainer>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center justify-center space-y-4"
        >
          <div className="flex items-center justify-center relative">
            {nameLetters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
                className={`text-5xl sm:text-6xl md:text-8xl font-bold inline-block
                           ${letter === " " ? "mx-2 md:mx-4" : ""}
                           bg-gradient-to-r from-teal-500 via-violet-500 to-purple-500
                           bg-clip-text text-transparent drop-shadow-2xl`}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </LampContainer>

      <motion.div
        className="max-w-4xl mx-auto px-4 -mt-16 md:-mt-24 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <div className="flex flex-col items-center justify-center space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-teal-500/60 shadow-[0_0_30px_rgba(20,184,166,0.2)]">
              <img
                src="/achuth's personal.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="text-lg text-slate-400 font-light"
          >
            This is me
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            className="text-center space-y-4"
          >
            <div className="h-16 sm:h-20 flex items-center justify-center">
              <p className="text-lg sm:text-xl md:text-2xl font-light">
                <span className="bg-gradient-to-r from-teal-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                  {displayText}
                </span>
                <span className="text-teal-400 ml-0.5 animate-blink">|</span>
              </p>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-slate-500 font-light italic">
              Transforming ideas into reality through code.
            </p>
          </motion.div>

          <motion.div
            className="pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            <div className="w-6 h-10 rounded-full border-2 border-slate-700 flex justify-center p-1">
              <motion.div
                className="w-1.5 h-1.5 bg-teal-400 rounded-full"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" as const }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
