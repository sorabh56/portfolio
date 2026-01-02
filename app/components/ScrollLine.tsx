"use client"
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollLine() {
  const containerRef = useRef(null);
  
  // Track scroll progress of the whole page
  const { scrollYProgress } = useScroll();

  // Color changing effect based on scroll (Purple -> Blue -> Cyan -> Green)
  const pathColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    ["#a855f7", "#3b82f6", "#06b6d4", "#22c55e"]
  );

  return (
    <div className="fixed top-0 left-4 md:left-10 h-full w-20 z-0 pointer-events-none hidden md:block">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 800"
        fill="none"
        preserveAspectRatio="none" // Stretches line to full height
      >
        {/* 1. Base Grey Line (Raasta dikhane ke liye) */}
        <path
          d="M 50 0 C 80 200 20 400 50 600 S 50 800 50 800"
          stroke="#333"
          strokeWidth="2"
          fill="none"
          className="opacity-20"
        />

        {/* 2. Animated Colorful Line (Jo scroll ke sath bharegi) */}
        <motion.path
          d="M 50 0 C 80 200 20 400 50 600 S 50 800 50 800"
          stroke={pathColor} // Dynamic Color
          strokeWidth="4"
          fill="none"
          style={{
            pathLength: scrollYProgress, // Magic: Connects length to scroll
          }}
          strokeLinecap="round"
        />
        
        {/* 3. Glowing Ball at the tip (Head of the snake) */}
        <motion.circle 
            cx="50" 
            cy="0" 
            r="6" 
            fill={pathColor}
            style={{
                offsetPath: `path("M 50 0 C 80 200 20 400 50 600 S 50 800 50 800")`,
                offsetDistance: useTransform(scrollYProgress, value => `${value * 100}%`)
            }}
            className="filter blur-[2px]"
        />
      </svg>
      
      {/* Glow Effect behind the line */}
      <motion.div 
        className="absolute top-0 left-[45%] w-2 h-full bg-gradient-to-b from-purple-500/20 to-cyan-500/20 blur-xl"
        style={{ opacity: scrollYProgress }}
      />
    </div>
  );
}