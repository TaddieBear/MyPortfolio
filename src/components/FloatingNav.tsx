"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home, User, Code, Mail } from "lucide-react"
import Link from "next/link"

const navItems = [
  { icon: Home, href: "#home", label: "Home" },
  { icon: User, href: "#about", label: "About" },
  { icon: Code, href: "#projects", label: "Projects" },
  { icon: Mail, href: "#contact", label: "Contact" },
]

export default function FloatingDock() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const checkMobile = () => setIsMobile(window.innerWidth < 640)
    checkMobile()
    window.addEventListener("resize", checkMobile)

    const sectionIds = navItems.map((item) => item.href.replace("#", ""))

    const handleScroll = () => {
      const offset = window.innerHeight / 3
      const currentIndex = sectionIds.reduce((acc, id, idx) => {
        const section = document.getElementById(id)
        if (!section) return acc
        const { top } = section.getBoundingClientRect()
        return top - offset < 0 ? idx : acc
      }, 0)
      setActiveIndex(currentIndex)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener("resize", checkMobile)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  if (!mounted) return null

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed z-50 ${
        isMobile ? "bottom-8 left-1/2 -translate-x-1/2 flex-row" : "right-8 top-1/2 -translate-y-1/2 flex-col"
      } flex items-center`}
    >
      {/* Enhanced Dock Container */}
      <motion.div
        className={`relative ${
          isMobile ? "flex-row px-4 py-3" : "flex-col py-4 px-3"
        } flex items-center gap-3 backdrop-blur-2xl bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 rounded-2xl shadow-2xl shadow-black/10`}
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
        }}
      >
        {/* Animated Background Indicator */}
        <motion.div
          layoutId="dock-indicator"
          className="absolute w-12 h-12 bg-gradient-to-br from-emerald-400/30 to-teal-500/30 rounded-xl blur-sm"
          initial={false}
          animate={isMobile ? { x: activeIndex * 56 + 8 } : { y: activeIndex * 56 + 8 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />

        {/* Navigation Items */}
        {navItems.map((item, index) => {
          const Icon = item.icon
          const isActive = index === activeIndex
          const isHovered = hoveredIndex === index

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className="relative"
            >
              <Link
                href={item.href}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative group block"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  animate={isActive ? { scale: 1.05 } : { scale: 1 }}
                  className={`relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/25"
                      : isHovered
                        ? "bg-white/20 dark:bg-white/10 shadow-md"
                        : "bg-white/10 dark:bg-white/5"
                  } border ${
                    isActive ? "border-emerald-400/50" : "border-white/10 dark:border-white/5"
                  } backdrop-blur-sm`}
                >
                  <Icon
                    className={`transition-all duration-300 ${
                      isActive
                        ? "text-white"
                        : isHovered
                          ? "text-gray-800 dark:text-white"
                          : "text-gray-600 dark:text-gray-400"
                    }`}
                    size={20}
                  />

                  {/* Active State Glow */}
                  {isActive && (
                    <motion.div
                      layoutId="active-glow"
                      className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 opacity-20 blur-md"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />
                  )}

                  {/* Hover Ripple Effect */}
                  {isHovered && !isActive && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0.5 }}
                      animate={{ scale: 1.5, opacity: 0 }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 rounded-xl bg-white/20 dark:bg-white/10"
                    />
                  )}
                </motion.div>

                {/* Enhanced Tooltip */}
                <AnimatePresence>
                  {!isMobile && isHovered && (
                    <motion.div
                      initial={{ opacity: 0, x: 10, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: 10, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-1/2 -translate-y-1/2 right-full mr-4 px-3 py-2 text-sm font-medium rounded-lg backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white border border-white/20 dark:border-white/10 shadow-xl whitespace-nowrap"
                    >
                      {item.label}

                      {/* Tooltip Arrow */}
                      <div className="absolute top-1/2 -translate-y-1/2 left-full w-0 h-0 border-l-4 border-l-white/90 dark:border-l-gray-900/90 border-y-4 border-y-transparent" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Link>
            </motion.div>
          )
        })}

        {/* Decorative Elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full opacity-60"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full opacity-40"
        />
      </motion.div>

      {/* Mobile Active Indicator */}
      {isMobile && (
        <motion.div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {navItems.map((_, index) => (
            <motion.div
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-emerald-500 scale-125" : "bg-white/30 dark:bg-white/20"
              }`}
              animate={index === activeIndex ? { scale: [1, 1.3, 1] } : {}}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            />
          ))}
        </motion.div>
      )}
    </motion.div>
  )
}
