"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
  ExternalLink,
  Github,
  ArrowRight,
  Laptop,
  Terminal,
  Braces,
  Database,
  Globe,
  Server,
  Layers,
} from "lucide-react"

const projects = [
  {
    title: "PerfectSmile Dental System",
    description:
      "A comprehensive dental record management system featuring role-based dashboards, appointment scheduling, and interactive dental charts for modern dental practices.",
    image: "/images/perfectsmile.png",
    tech: ["Laravel", "MySQL", "Bootstrap", "PHP"],
    category: "Full-Stack",
    status: "Completed",
    liveUrl: "https://powderblue-reindeer-694205.hostingersite.com/",
    githubUrl: "#",
  },
  {
    title: "Hizons Car Rental",
    description:
      "A modern car rental management system offering seamless booking, real-time availability tracking, and user-friendly dashboards for admins and customers.",
    image: "/images/hizons.png",
    tech: ["Laravel", "Bootstrap", "MySQL", "JavaScript"],
    category: "Full Stack",
    status: "Live",
    liveUrl: "https://red-rat-111253.hostingersite.com/",
    githubUrl: "#",
  },
  {
    title: "RFID Key Cabinet",
    description:
      "An innovative embedded system solution using Raspberry Pi for secure lab key management with RFID authentication and PIN verification for enhanced security.",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["Python", "Laravel API", "Raspberry Pi", "IoT"],
    category: "IoT",
    status: "Prototype",
    liveUrl: "#",
    githubUrl: "#",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
}

export default function Projects() {
  return (
    <section
      id="projects"
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

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-20"
        >
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-br from-black via-gray-800 to-gray-600 dark:from-white dark:via-gray-100 dark:to-gray-300 bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Featured Projects
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-gray-600 to-black dark:from-gray-400 dark:to-white rounded-full mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            A showcase of my recent work, featuring modern web applications and innovative solutions
          </motion.p>
        </motion.div>

        {/* Enhanced Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="group relative"
            >
              {/* Project Card */}
              <div className="relative backdrop-blur-xl bg-white/20 dark:bg-black/20 border border-gray-200/30 dark:border-gray-700/30 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:bg-white/30 dark:hover:bg-black/30">
                {/* Project Image */}
                <div className="relative h-48 lg:h-56 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${
                        project.status === "Live"
                          ? "bg-gray-800/20 text-gray-200 border border-gray-600/30"
                          : project.status === "Completed"
                            ? "bg-gray-700/20 text-gray-300 border border-gray-500/30"
                            : "bg-gray-600/20 text-gray-300 border border-gray-400/30"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md bg-white/20 text-white border border-white/30">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-gray-800/90 hover:bg-gray-700 text-white text-sm font-medium transition-colors duration-200"
                    >
                      <ExternalLink size={14} />
                      <span>Live Demo</span>
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center px-3 py-2 rounded-xl bg-gray-600/90 hover:bg-gray-500 text-white transition-colors duration-200"
                    >
                      <Github size={16} />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6 lg:p-8">
                  <h3 className="text-xl lg:text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100/80 dark:bg-gray-800/30 text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50 hover:bg-gray-200/80 dark:hover:bg-gray-700/40 transition-all duration-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Learn More Button */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-semibold text-sm hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200 group/btn"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={16} className="transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </motion.button>
                </div>

                {/* Card Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gray-500/10 to-gray-700/10 dark:from-gray-300/10 dark:to-gray-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  initial={false}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12 lg:mt-20"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-gray-800 via-gray-700 to-black dark:from-gray-200 dark:via-gray-300 dark:to-white dark:text-black shadow-xl hover:shadow-2xl hover:shadow-gray-500/25 transition-all duration-300 group"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
