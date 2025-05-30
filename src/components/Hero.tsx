"use client"

import { motion } from "framer-motion"
import Image from "next/image"

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
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-50 via-gray-50 to-stone-100 dark:from-gray-950 dark:via-slate-900 dark:to-gray-900 text-center px-4 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating Geometric Shapes */}
      <motion.div
        animate={floatingAnimation}
        className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-3xl rotate-45 blur-sm"
      />
      <motion.div
        animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 2 } }}
        className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-violet-400/20 to-purple-500/20 rounded-full blur-sm"
      />
      <motion.div
        animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 4 } }}
        className="absolute bottom-32 left-32 w-20 h-20 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-2xl rotate-12 blur-sm"
      />
      <motion.div
        animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
        className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-cyan-400/20 to-teal-500/20 rounded-full blur-sm"
      />

      {/* Glassmorphism Card Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-3xl p-12 shadow-2xl"
      >
        {/* Profile Picture with Enhanced Effects */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: -180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          whileHover={{ scale: 1.1, rotateY: 5 }}
          className="relative mb-8 mx-auto w-40 h-40"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 rounded-full animate-pulse opacity-75 blur-md" />
          <div className="relative w-full h-full rounded-full border-4 border-white/50 dark:border-white/30 shadow-2xl overflow-hidden backdrop-blur-sm">
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
            <div className="absolute -top-2 left-1/2 w-2 h-2 bg-emerald-400 rounded-full opacity-60" />
            <div className="absolute top-1/2 -right-2 w-1.5 h-1.5 bg-teal-400 rounded-full opacity-60" />
            <div className="absolute -bottom-2 left-1/3 w-1 h-1 bg-cyan-400 rounded-full opacity-60" />
          </motion.div>
        </motion.div>

        {/* Enhanced Animated Heading */}
        <motion.h1 className="text-5xl sm:text-7xl font-black mb-6 flex flex-wrap justify-center leading-tight">
          {heading.split("").map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={headingVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                scale: 1.2,
                color: "#10b981",
                transition: { duration: 0.2 },
              }}
              className={`${char === " " ? "w-3" : ""} bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 dark:from-white dark:via-gray-100 dark:to-gray-300 bg-clip-text text-transparent cursor-default`}
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
          className="text-xl sm:text-2xl max-w-3xl mb-10 text-gray-700 dark:text-gray-300 font-light leading-relaxed"
        >
          A passionate{" "}
          <span className="font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            web developer
          </span>{" "}
          crafting modern digital experiences with{" "}
          <span className="font-semibold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="relative inline-flex items-center gap-3 px-10 py-4 rounded-2xl font-bold text-lg text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/25 focus:outline-none focus:ring-4 focus:ring-emerald-300/50 overflow-hidden group"
          >
            <span className="relative z-10">View My Work</span>
            <motion.svg
              className="relative z-10 w-5 h-5"
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
              className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />

            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
              animate={{ x: [-100, 300] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
            />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Subtle animated background elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 border border-emerald-200/20 dark:border-emerald-800/20 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 70, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 border border-teal-200/20 dark:border-teal-800/20 rounded-full"
      />
    </section>
  )
}
