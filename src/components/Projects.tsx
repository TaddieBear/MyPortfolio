"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github, ArrowRight } from "lucide-react"

const projects = [
  {
    title: "PerfectSmile Dental System",
    description:
      "A comprehensive dental record management system featuring role-based dashboards, appointment scheduling, and interactive dental charts for modern dental practices.",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["Laravel", "MySQL", "Bootstrap", "PHP"],
    category: "Full-Stack",
    status: "Completed",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "SnapTad Photography",
    description:
      "A stunning portfolio website for photographers with interactive galleries, client booking system, and seamless user experience powered by modern web technologies.",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    category: "Frontend",
    status: "Live",
    liveUrl: "#",
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
      className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-gray-50 to-stone-100 dark:from-gray-950 dark:via-slate-900 dark:to-gray-900 text-gray-800 dark:text-white overflow-hidden"
    >
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

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{
          y: [-30, 30, -30],
          rotate: [0, 360],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-20 w-20 h-20 lg:w-32 lg:h-32 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-3xl blur-sm"
      />
      <motion.div
        animate={{
          y: [30, -30, 30],
          rotate: [360, 0],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-20 w-24 h-24 lg:w-40 lg:h-40 bg-gradient-to-br from-teal-400/20 to-cyan-500/20 rounded-full blur-sm"
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-20"
        >
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 dark:from-white dark:via-gray-100 dark:to-gray-300 bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Featured Projects
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
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
              <div className="relative backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:bg-white/20 dark:hover:bg-white/10">
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
                          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-400/30"
                          : project.status === "Completed"
                            ? "bg-teal-500/20 text-teal-300 border border-teal-400/30"
                            : "bg-orange-500/20 text-orange-300 border border-orange-400/30"
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
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-emerald-600/90 hover:bg-emerald-500 text-white text-sm font-medium transition-colors duration-200"
                    >
                      <ExternalLink size={14} />
                      <span>Live Demo</span>
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center px-3 py-2 rounded-xl bg-gray-800/90 hover:bg-gray-700 text-white transition-colors duration-200"
                    >
                      <Github size={16} />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6 lg:p-8">
                  <h3 className="text-xl lg:text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
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
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-100/80 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border border-emerald-200/50 dark:border-emerald-700/50 hover:bg-emerald-200/80 dark:hover:bg-emerald-800/40 transition-all duration-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Learn More Button */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold text-sm hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors duration-200 group/btn"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={16} className="transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </motion.button>
                </div>

                {/* Card Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
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
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12 lg:mt-20"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 group"
          >
            <span>View All Projects</span>
            <motion.svg
              className="w-5 h-5"
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
      </div>
    </section>
  )
}
