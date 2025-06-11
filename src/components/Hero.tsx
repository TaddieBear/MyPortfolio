"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Code, Laptop, Terminal, Braces, Database, Globe, Server, Layers } from "lucide-react"

const heading = "Hi, I'm Tradh!"

const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      type: "spring",
      stiffness: 100,
    },
  }),
}

const floatingAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 6,
    repeat: Number.POSITIVE_INFINITY,
    ease: "easeInOut",
  },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-black dark:via-gray-900 dark:to-gray-800 text-center px-3 sm:px-4 md:px-6 lg:px-8 overflow-hidden">
      {/* Logo and Brand at Top Left */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute top-6 left-6 sm:top-8 sm:left-8 flex items-center gap-2 z-20"
      >
        <div className="relative w-10 h-10 sm:w-12 sm:h-12">
          <motion.div
            className="absolute inset-0 rounded-lg bg-gradient-to-br from-gray-700 to-black dark:from-gray-300 dark:to-white opacity-20 blur-sm"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <div className="relative w-full h-full flex items-center justify-center rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-md border border-gray-200/30 dark:border-gray-700/30 shadow-lg">
            <Code className="w-6 h-6 sm:w-7 sm:h-7 text-gray-800 dark:text-gray-200" />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="font-bold text-lg sm:text-xl bg-gradient-to-r from-gray-800 to-black dark:from-gray-200 dark:to-white bg-clip-text text-transparent"
        >
          TCorderz
        </motion.div>
      </motion.div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Floating Geometric Shapes - Hidden on very small screens */}
      <motion.div
        animate={floatingAnimation}
        className="absolute top-16 left-4 sm:top-20 sm:left-20 w-16 h-16 sm:w-24 md:w-32 sm:h-24 md:h-32 bg-gradient-to-br from-gray-300/20 to-gray-500/20 dark:from-gray-600/20 dark:to-gray-400/20 rounded-2xl sm:rounded-3xl rotate-45 blur-sm hidden xs:block"
      />
      <motion.div
        animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 2 } }}
        className="absolute top-32 right-4 sm:top-40 sm:right-32 w-12 h-12 sm:w-20 md:w-24 sm:h-20 md:h-24 bg-gradient-to-br from-gray-400/20 to-gray-600/20 dark:from-gray-500/20 dark:to-gray-300/20 rounded-full blur-sm hidden xs:block"
      />
      <motion.div
        animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 4 } }}
        className="absolute bottom-24 left-4 sm:bottom-32 sm:left-32 w-10 h-10 sm:w-16 md:w-20 sm:h-16 md:h-20 bg-gradient-to-br from-gray-500/20 to-gray-700/20 dark:from-gray-400/20 dark:to-gray-200/20 rounded-xl sm:rounded-2xl rotate-12 blur-sm hidden xs:block"
      />
      <motion.div
        animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
        className="absolute bottom-16 right-4 sm:bottom-20 sm:right-20 w-14 h-14 sm:w-24 md:w-28 sm:h-24 md:h-28 bg-gradient-to-br from-gray-300/20 to-gray-500/20 dark:from-gray-600/20 dark:to-gray-400/20 rounded-full blur-sm hidden xs:block"
      />

      {/* Floating Code Elements - Positioned around the card with proper spacing */}
      {/* Top Left Area */}
      <motion.div
        animate={{
          y: [-20, 20, -20],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute top-[15%] left-[8%] text-2xl sm:text-3xl font-mono font-bold text-gray-600 dark:text-gray-400 pointer-events-none"
      >
        1
      </motion.div>

      <motion.div
        animate={{
          x: [-10, 10, -10],
          opacity: [0.4, 0.9, 0.4],
        }}
        transition={{
          duration: 3.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2.1,
        }}
        className="absolute top-[25%] left-[12%] text-lg sm:text-xl font-mono text-gray-700 dark:text-gray-300 pointer-events-none"
      >
        {"</>"}
      </motion.div>

      <motion.div
        animate={{
          rotate: [0, 360],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          delay: 1.3,
        }}
        className="absolute top-[35%] left-[6%] text-lg sm:text-xl font-mono text-gray-600 dark:text-gray-400 pointer-events-none"
      >
        {"<div>"}
      </motion.div>

      <motion.div
        animate={{
          y: [-15, 15, -15],
          opacity: [0.2, 0.6, 0.2],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1.5,
        }}
        className="absolute top-[45%] left-[10%] text-gray-600 dark:text-gray-400 pointer-events-none"
      >
        <Terminal size={20} />
      </motion.div>

      <motion.div
        animate={{
          y: [20, -20, 20],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 3.1,
        }}
        className="absolute top-[55%] left-[8%] text-gray-600 dark:text-gray-400 pointer-events-none"
      >
        <Database size={16} />
      </motion.div>

      {/* Top Right Area */}
      <motion.div
        animate={{
          y: [15, -15, 15],
          opacity: [0.2, 0.7, 0.2],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1.2,
        }}
        className="absolute top-[15%] right-[8%] text-xl sm:text-2xl font-mono font-bold text-gray-500 dark:text-gray-500 pointer-events-none"
      >
        0
      </motion.div>

      <motion.div
        animate={{
          rotate: [0, 360],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          delay: 0.3,
        }}
        className="absolute top-[25%] right-[12%] text-xl sm:text-2xl font-mono font-bold text-gray-600 dark:text-gray-400 pointer-events-none"
      >
        0
      </motion.div>

      <motion.div
        animate={{
          x: [-30, 30, -30],
          opacity: [0.4, 0.8, 0.4],
          rotate: [0, -180, 0],
        }}
        transition={{
          duration: 6.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 0.7,
        }}
        className="absolute top-[35%] right-[6%] text-base sm:text-lg font-mono text-gray-600 dark:text-gray-400 pointer-events-none"
      >
        []
      </motion.div>

      <motion.div
        animate={{
          rotate: [0, 360],
          opacity: [0.2, 0.9, 0.2],
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1.1,
        }}
        className="absolute top-[45%] right-[10%] text-lg sm:text-xl font-mono text-gray-500 dark:text-gray-500 pointer-events-none"
      >
        ()
      </motion.div>

      <motion.div
        animate={{
          scale: [0.6, 1.1, 0.6],
          opacity: [0.2, 0.6, 0.2],
          rotate: [0, 30, 0],
        }}
        transition={{
          duration: 4.9,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 0.4,
        }}
        className="absolute top-[55%] right-[8%] text-gray-700 dark:text-gray-300 pointer-events-none"
      >
        <Layers size={20} />
      </motion.div>

      {/* Bottom Left Area */}
      <motion.div
        animate={{
          y: [-15, 15, -15],
          opacity: [0.3, 0.9, 0.3],
          x: [5, -5, 5],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2.5,
        }}
        className="absolute bottom-[25%] left-[8%] text-lg sm:text-xl font-mono text-gray-700 dark:text-gray-300 pointer-events-none"
      >
        {"{}"}
      </motion.div>

      <motion.div
        animate={{
          y: [-18, 18, -18],
          opacity: [0.2, 0.6, 0.2],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 5.8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2.7,
        }}
        className="absolute bottom-[35%] left-[12%] text-base sm:text-lg font-mono text-gray-500 dark:text-gray-500 pointer-events-none"
      >
        {"</div>"}
      </motion.div>

      <motion.div
        animate={{
          x: [12, -12, 12],
          opacity: [0.3, 0.8, 0.3],
          y: [-8, 8, -8],
        }}
        transition={{
          duration: 5.3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 0.9,
        }}
        className="absolute bottom-[45%] left-[6%] text-base sm:text-lg font-mono text-gray-600 dark:text-gray-400 pointer-events-none"
      >
        {"return()"}
      </motion.div>

      <motion.div
        animate={{
          x: [-12, 12, -12],
          opacity: [0.3, 0.8, 0.3],
          y: [-5, 5, -5],
        }}
        transition={{
          duration: 5.7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2.6,
        }}
        className="absolute bottom-[55%] left-[10%] text-gray-600 dark:text-gray-400 pointer-events-none"
      >
        <Server size={18} />
      </motion.div>

      <motion.div
        animate={{
          rotate: [0, 360],
          opacity: [0.2, 0.6, 0.2],
          scale: [0.8, 1.1, 0.8],
        }}
        transition={{
          duration: 7.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2.2,
        }}
        className="absolute bottom-[15%] left-[8%] text-sm sm:text-base font-mono text-gray-700 dark:text-gray-300 pointer-events-none"
      >
        {"async/await"}
      </motion.div>

      {/* Bottom Right Area */}
      <motion.div
        animate={{
          y: [-25, 25, -25],
          opacity: [0.3, 0.6, 0.3],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 0.8,
        }}
        className="absolute bottom-[25%] right-[8%] text-3xl sm:text-4xl font-mono font-bold text-gray-600 dark:text-gray-400 pointer-events-none"
      >
        1
      </motion.div>

      <motion.div
        animate={{
          scale: [0.5, 1.5, 0.5],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1.5,
        }}
        className="absolute bottom-[35%] right-[12%] text-2xl sm:text-3xl font-mono font-bold text-gray-500 dark:text-gray-500 pointer-events-none"
      >
        1
      </motion.div>

      <motion.div
        animate={{
          y: [25, -25, 25],
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 0.7, 1],
        }}
        transition={{
          duration: 5.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 3.2,
        }}
        className="absolute bottom-[45%] right-[6%] text-xl sm:text-2xl font-mono font-bold text-gray-700 dark:text-gray-300 pointer-events-none"
      >
        0
      </motion.div>

      <motion.div
        animate={{
          x: [10, -10, 10],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4.2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2.3,
        }}
        className="absolute bottom-[55%] right-[10%] text-gray-500 dark:text-gray-500 pointer-events-none"
      >
        <Laptop size={24} />
      </motion.div>

      <motion.div
        animate={{
          rotate: [0, -360],
          opacity: [0.2, 0.7, 0.2],
          scale: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 7.2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          delay: 1.8,
        }}
        className="absolute bottom-[15%] right-[8%] text-gray-500 dark:text-gray-500 pointer-events-none"
      >
        <Globe size={22} />
      </motion.div>

      {/* Additional scattered elements with proper spacing */}
      <motion.div
        animate={{
          x: [20, -20, 20],
          y: [10, -10, 10],
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          duration: 4.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1.8,
        }}
        className="absolute top-[65%] left-[15%] text-base sm:text-lg font-mono text-gray-500 dark:text-gray-500 pointer-events-none"
      >
        ;
      </motion.div>

      <motion.div
        animate={{
          rotate: [0, -360],
          opacity: [0.4, 0.9, 0.4],
          scale: [1.2, 0.6, 1.2],
        }}
        transition={{
          duration: 6.8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2.3,
        }}
        className="absolute top-[75%] left-[20%] text-lg sm:text-xl font-mono text-gray-600 dark:text-gray-400 pointer-events-none"
      >
        #
      </motion.div>

      <motion.div
        animate={{
          x: [-15, 15, -15],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 4.7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 0.6,
        }}
        className="absolute top-[65%] right-[15%] text-base sm:text-lg font-mono text-gray-700 dark:text-gray-300 pointer-events-none"
      >
        {"function()"}
      </motion.div>

      <motion.div
        animate={{
          scale: [0.7, 1.2, 0.7],
          opacity: [0.2, 0.5, 0.2],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 3.3,
        }}
        className="absolute top-[75%] right-[20%] text-sm sm:text-base font-mono text-gray-600 dark:text-gray-400 pointer-events-none"
      >
        {"import { }"}
      </motion.div>

      <motion.div
        animate={{
          y: [10, -10, 10],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4.3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1.4,
        }}
        className="absolute bottom-[65%] right-[18%] text-base sm:text-lg font-mono text-gray-500 dark:text-gray-500 pointer-events-none"
      >
        {"const"}
      </motion.div>

      <motion.div
        animate={{
          scale: [0.9, 1.3, 0.9],
          opacity: [0.2, 0.7, 0.2],
        }}
        transition={{
          duration: 4.8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 3.7,
        }}
        className="absolute bottom-[65%] left-[18%] text-sm sm:text-base font-mono text-gray-500 dark:text-gray-500 pointer-events-none"
      >
        {"useState()"}
      </motion.div>

      <motion.div
        animate={{
          scale: [0.8, 1.2, 0.8],
          opacity: [0.2, 0.5, 0.2],
          rotate: [0, 360, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 0.7,
        }}
        className="absolute top-[85%] left-[25%] text-gray-700 dark:text-gray-300 pointer-events-none"
      >
        <Braces size={18} />
      </motion.div>

      <motion.div
        animate={{
          scale: [0.8, 1.3, 0.8],
          opacity: [0.3, 0.8, 0.3],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 3.8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 0.9,
        }}
        className="absolute top-[85%] right-[25%] text-base sm:text-lg font-mono text-gray-700 dark:text-gray-300 pointer-events-none"
      >
        =&gt;
      </motion.div>

      {/* Glassmorphism Card Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 backdrop-blur-xl bg-white/20 dark:bg-black/20 border border-gray-200/30 dark:border-gray-700/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl max-w-4xl mx-auto w-full"
      >
        {/* Profile Picture with Enhanced Effects */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: -180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          whileHover={{ scale: 1.05, rotateY: 5 }}
          className="relative mb-6 sm:mb-8 mx-auto w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 dark:from-gray-300 dark:via-gray-400 dark:to-gray-500 rounded-full animate-pulse opacity-75 blur-md" />
          <div className="relative w-full h-full rounded-full border-2 sm:border-4 border-white/50 dark:border-gray-300/30 shadow-2xl overflow-hidden backdrop-blur-sm">
            <Image
              src="/images/2x2.jpg"
              alt="Tradh"
              width={160}
              height={160}
              className="rounded-full object-cover w-full h-full"
              priority
            />
          </div>
          {/* Floating particles around image */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute -top-1 sm:-top-2 left-1/2 w-1 h-1 sm:w-2 sm:h-2 bg-gray-600 dark:bg-gray-300 rounded-full opacity-60" />
            <div className="absolute top-1/2 -right-1 sm:-right-2 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gray-500 dark:bg-gray-400 rounded-full opacity-60" />
            <div className="absolute -bottom-1 sm:-bottom-2 left-1/3 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-gray-700 dark:bg-gray-200 rounded-full opacity-60" />
          </motion.div>
        </motion.div>

        {/* Enhanced Animated Heading */}
        <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 flex flex-wrap justify-center leading-tight">
          {heading.split("").map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={headingVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                scale: 1.1,
                color: "#374151",
                transition: { duration: 0.2 },
              }}
              className={`${char === " " ? "w-2 sm:w-3" : ""} bg-gradient-to-br from-black via-gray-800 to-gray-600 dark:from-white dark:via-gray-100 dark:to-gray-300 bg-clip-text text-transparent cursor-default`}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Enhanced Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-3xl mb-6 sm:mb-8 md:mb-10 text-gray-700 dark:text-gray-300 font-light leading-relaxed px-2 sm:px-0"
        >
          A passionate{" "}
          <span className="font-semibold bg-gradient-to-r from-gray-800 to-black dark:from-gray-200 dark:to-white bg-clip-text text-transparent">
            web developer
          </span>{" "}
          crafting modern digital experiences with{" "}
          <span className="font-semibold bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent">
            React, Next.js, and Laravel
          </span>
        </motion.p>

        {/* Enhanced CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="relative group"
        >
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#projects"
            className="relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base md:text-lg text-white bg-gradient-to-r from-gray-800 via-gray-700 to-black dark:from-gray-200 dark:via-gray-300 dark:to-white dark:text-black shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-gray-500/25 focus:outline-none focus:ring-4 focus:ring-gray-300/50 overflow-hidden group"
          >
            <span className="relative z-10">View My Work</span>
            <motion.svg
              className="relative z-10 w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </motion.svg>

            {/* Animated background overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 dark:from-gray-300 dark:via-gray-400 dark:to-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />

            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-black/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
              animate={{ x: [-100, 300] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
            />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Subtle animated background elements - Hidden on small screens */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 md:w-96 sm:h-80 md:h-96 border border-gray-200/20 dark:border-gray-700/20 rounded-full hidden sm:block"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 70, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute bottom-1/4 right-1/4 w-56 h-56 sm:w-72 md:w-80 sm:h-72 md:h-80 border border-gray-300/20 dark:border-gray-600/20 rounded-full hidden sm:block"
      />
    </section>
  )
}
