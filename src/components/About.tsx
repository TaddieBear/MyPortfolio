"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { Laptop, Terminal, Braces, Database, Globe, Server, Layers } from "lucide-react"

// Skills categorized by type
const skillsByCategory = {
  Frontend: [
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      level: 95,
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      level: 90,
    },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 95 },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      level: 88,
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      level: 88,
    },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: 98 },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", level: 95 },
  ],
  Backend: [
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      level: 80,
    },
    { name: "Laravel", icon: "/icons/laravel.svg", level: 82 },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", level: 78 },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      level: 85,
    },
    {
      name: "MySQL Workbench",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      level: 80,
    },
    {
      name: "CodeIgniter",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg",
      level: 75,
    },
  ],
  "Tools & Libraries": [
    { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg", level: 92 },
    { name: "Framer Motion", icon: "/icons/framer.svg", level: 85 },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      level: 75,
    },
    {
      name: "Photoshop",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
      level: 70,
    },
  ],
}

type Skill = {
  name: string
  icon: string
  level: number
}

type SkillCategory = keyof typeof skillsByCategory

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const skillVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
}

export default function About() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("Frontend")
  const categories = Object.keys(skillsByCategory) as SkillCategory[]

  return (
    <section
      id="about"
      className="relative min-h-screen pt-8 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-black dark:via-gray-900 dark:to-gray-800 text-gray-800 dark:text-white overflow-hidden"
    >
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

      {/* Static Background Code Symbols with Different Sizes and Lower Opacity */}
      {/* Top Left Area */}
      <div className="absolute top-[15%] left-[8%] text-xl sm:text-2xl font-mono font-bold text-gray-600 dark:text-gray-400 pointer-events-none opacity-20">
        1
      </div>
      <div className="absolute top-[25%] left-[12%] text-sm sm:text-base font-mono text-gray-700 dark:text-gray-300 pointer-events-none opacity-15">
        {"</>"}
      </div>
      <div className="absolute top-[35%] left-[6%] text-base sm:text-lg font-mono text-gray-600 dark:text-gray-400 pointer-events-none opacity-25">
        {"<div>"}
      </div>
      <div className="absolute top-[45%] left-[10%] text-gray-600 dark:text-gray-400 pointer-events-none opacity-20">
        <Terminal size={16} />
      </div>
      <div className="absolute top-[55%] left-[8%] text-gray-600 dark:text-gray-400 pointer-events-none opacity-15">
        <Database size={14} />
      </div>

      {/* Top Right Area */}
      <div className="absolute top-[15%] right-[8%] text-lg sm:text-xl font-mono font-bold text-gray-500 dark:text-gray-500 pointer-events-none opacity-20">
        0
      </div>
      <div className="absolute top-[25%] right-[12%] text-xl sm:text-2xl font-mono font-bold text-gray-600 dark:text-gray-400 pointer-events-none opacity-25">
        0
      </div>
      <div className="absolute top-[35%] right-[6%] text-sm sm:text-base font-mono text-gray-600 dark:text-gray-400 pointer-events-none opacity-15">
        []
      </div>
      <div className="absolute top-[45%] right-[10%] text-base sm:text-lg font-mono text-gray-500 dark:text-gray-500 pointer-events-none opacity-20">
        ()
      </div>
      <div className="absolute top-[55%] right-[8%] text-gray-700 dark:text-gray-300 pointer-events-none opacity-15">
        <Layers size={18} />
      </div>

      {/* Bottom Left Area */}
      <div className="absolute bottom-[25%] left-[8%] text-base sm:text-lg font-mono text-gray-700 dark:text-gray-300 pointer-events-none opacity-20">
        {"{}"}
      </div>
      <div className="absolute bottom-[35%] left-[12%] text-sm sm:text-base font-mono text-gray-500 dark:text-gray-500 pointer-events-none opacity-15">
        {"</div>"}
      </div>
      <div className="absolute bottom-[45%] left-[6%] text-base sm:text-lg font-mono text-gray-600 dark:text-gray-400 pointer-events-none opacity-25">
        {"return()"}
      </div>
      <div className="absolute bottom-[55%] left-[10%] text-gray-600 dark:text-gray-400 pointer-events-none opacity-20">
        <Server size={16} />
      </div>
      <div className="absolute bottom-[15%] left-[8%] text-xs sm:text-sm font-mono text-gray-700 dark:text-gray-300 pointer-events-none opacity-15">
        {"async/await"}
      </div>

      {/* Bottom Right Area */}
      <div className="absolute bottom-[25%] right-[8%] text-2xl sm:text-3xl font-mono font-bold text-gray-600 dark:text-gray-400 pointer-events-none opacity-25">
        1
      </div>
      <div className="absolute bottom-[35%] right-[12%] text-xl sm:text-2xl font-mono font-bold text-gray-500 dark:text-gray-500 pointer-events-none opacity-20">
        1
      </div>
      <div className="absolute bottom-[45%] right-[6%] text-lg sm:text-xl font-mono font-bold text-gray-700 dark:text-gray-300 pointer-events-none opacity-15">
        0
      </div>
      <div className="absolute bottom-[55%] right-[10%] text-gray-500 dark:text-gray-500 pointer-events-none opacity-20">
        <Laptop size={20} />
      </div>
      <div className="absolute bottom-[15%] right-[8%] text-gray-500 dark:text-gray-500 pointer-events-none opacity-15">
        <Globe size={18} />
      </div>

      {/* Additional scattered elements with proper spacing */}
      <div className="absolute top-[65%] left-[15%] text-sm sm:text-base font-mono text-gray-500 dark:text-gray-500 pointer-events-none opacity-15">
        ;
      </div>
      <div className="absolute top-[75%] left-[20%] text-base sm:text-lg font-mono text-gray-600 dark:text-gray-400 pointer-events-none opacity-20">
        #
      </div>
      <div className="absolute top-[65%] right-[15%] text-sm sm:text-base font-mono text-gray-700 dark:text-gray-300 pointer-events-none opacity-15">
        {"function()"}
      </div>
      <div className="absolute top-[75%] right-[20%] text-xs sm:text-sm font-mono text-gray-600 dark:text-gray-400 pointer-events-none opacity-20">
        {"import { }"}
      </div>
      <div className="absolute bottom-[65%] right-[18%] text-sm sm:text-base font-mono text-gray-500 dark:text-gray-500 pointer-events-none opacity-15">
        {"const"}
      </div>
      <div className="absolute bottom-[65%] left-[18%] text-xs sm:text-sm font-mono text-gray-500 dark:text-gray-500 pointer-events-none opacity-20">
        {"useState()"}
      </div>
      <div className="absolute top-[85%] left-[25%] text-gray-700 dark:text-gray-300 pointer-events-none opacity-15">
        <Braces size={14} />
      </div>
      <div className="absolute top-[85%] right-[25%] text-sm sm:text-base font-mono text-gray-700 dark:text-gray-300 pointer-events-none opacity-20">
        =&gt;
      </div>

      {/* Floating Geometric Shapes - Static */}
      <div className="absolute top-16 left-4 sm:top-20 sm:left-20 w-16 h-16 sm:w-24 md:w-32 sm:h-24 md:h-32 bg-gradient-to-br from-gray-300/10 to-gray-500/10 dark:from-gray-600/10 dark:to-gray-400/10 rounded-2xl sm:rounded-3xl rotate-45 blur-sm hidden xs:block" />
      <div className="absolute top-32 right-4 sm:top-40 sm:right-32 w-12 h-12 sm:w-20 md:w-24 sm:h-20 md:h-24 bg-gradient-to-br from-gray-400/10 to-gray-600/10 dark:from-gray-500/10 dark:to-gray-300/10 rounded-full blur-sm hidden xs:block" />
      <div className="absolute bottom-24 left-4 sm:bottom-32 sm:left-32 w-10 h-10 sm:w-16 md:w-20 sm:h-16 md:h-20 bg-gradient-to-br from-gray-500/10 to-gray-700/10 dark:from-gray-400/10 dark:to-gray-200/10 rounded-xl sm:rounded-2xl rotate-12 blur-sm hidden xs:block" />
      <div className="absolute bottom-16 right-4 sm:bottom-20 sm:right-20 w-14 h-14 sm:w-24 md:w-28 sm:h-24 md:h-28 bg-gradient-to-br from-gray-300/10 to-gray-500/10 dark:from-gray-600/10 dark:to-gray-400/10 rounded-full blur-sm hidden xs:block" />

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Title Section - Centered at Top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-br from-black via-gray-800 to-gray-600 dark:from-white dark:via-gray-100 dark:to-gray-300 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-black dark:from-gray-400 dark:to-white rounded-full mx-auto" />
        </motion.div>

        {/* First Row: Image and About Me Text */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-20">
          {/* Profile Image Section - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Decorative Background */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -inset-4 bg-gradient-to-r from-gray-400/10 via-gray-500/10 to-gray-600/10 dark:from-gray-300/10 dark:via-gray-400/10 dark:to-gray-500/10 rounded-3xl blur-xl"
              />

              {/* White Glow Effect */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute -inset-2 bg-white/30 dark:bg-white/20 rounded-3xl blur-lg"
              />

              {/* Image Container - Landscape */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden backdrop-blur-xl bg-white/20 dark:bg-black/20 border border-gray-200/30 dark:border-gray-700/30 shadow-2xl">
                <Image
                  src="/images/WebDev.png"
                  alt="Profile Image"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                {/* Floating Elements on Image */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute top-6 right-6 w-3 h-3 bg-gray-600 dark:bg-gray-400 rounded-full opacity-60"
                />
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute bottom-6 left-6 w-2 h-2 bg-gray-500 dark:bg-gray-500 rounded-full opacity-60"
                />
              </div>
            </div>
          </motion.div>

          {/* About Me Text Section - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
            className="order-1 lg:order-2 space-y-6"
          >
            <div className="space-y-5">
              <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                I&apos;m a passionate{" "}
                <span className="font-semibold bg-gradient-to-r from-gray-800 to-black dark:from-gray-200 dark:to-white bg-clip-text text-transparent">
                  web developer
                </span>{" "}
                who loves crafting intuitive, responsive web experiences. With a strong focus on front-end development,
                I use modern tools and frameworks to build elegant solutions.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-400">
                My journey in web development is driven by curiosity and a desire to create meaningful digital
                experiences that make a difference. I believe in writing clean, maintainable code and staying up-to-date
                with the latest industry trends.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-400">
                When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source
                projects, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="pt-4"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-gray-800 via-gray-700 to-black dark:from-gray-200 dark:via-gray-300 dark:to-white dark:text-black shadow-lg hover:shadow-xl hover:shadow-gray-500/25 transition-all duration-300 group"
              >
                <span>Let&apos;s Work Together</span>
                <motion.svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Second Row: Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-full"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">Skills & Technologies</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-gray-800 text-white dark:bg-white dark:text-gray-900 shadow-lg"
                    : "bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto"
          >
            {skillsByCategory[activeCategory].map((skill: Skill, index) => (
              <motion.div
                key={skill.name}
                variants={skillVariants}
                whileHover={{
                  scale: 1.03,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                className="group relative"
              >
                <div className="relative backdrop-blur-xl bg-white/20 dark:bg-white/10 border border-gray-200/30 dark:border-gray-700/30 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/30 dark:hover:bg-black/30">
                  {/* Skill Icon and Name */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-white/20 dark:bg-white/10 p-1.5">
                      <img
                        src={skill.icon || "/placeholder.svg"}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="font-semibold text-base text-gray-800 dark:text-white">{skill.name}</span>
                  </div>

                  {/* Skill Level Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600 dark:text-gray-400">Proficiency</span>
                      <span className="text-sm font-bold text-gray-800 dark:text-gray-200">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-gradient-to-r from-gray-600 to-black dark:from-gray-400 dark:to-white rounded-full"
                      />
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-500/10 to-gray-700/10 dark:from-gray-300/10 dark:to-gray-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
