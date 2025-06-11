"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home, User, Code, Mail, Menu, X } from "lucide-react"
import Link from "next/link"

const navItems = [
  { icon: Home, href: "#home", label: "Home" },
  { icon: User, href: "#about", label: "About" },
  { icon: Code, href: "#projects", label: "Projects" },
  { icon: Mail, href: "#contact", label: "Contact" },
]

export default function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

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
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  if (!mounted) return null

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Navigation Items */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 flex flex-col-reverse gap-3"
          >
            {navItems.map((item, index) => {
              const Icon = item.icon
              const isActive = index === activeIndex
              const delay = (navItems.length - index - 1) * 0.05

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.8 }}
                  transition={{
                    duration: 0.3,
                    delay: delay,
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                  }}
                  className="relative group"
                >
                  <Link
                    href={item.href}
                    onClick={() => {
                      setActiveIndex(index)
                      setIsOpen(false)
                    }}
                    className="block"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-xl border shadow-lg ${
                        isActive
                          ? "bg-black/80 dark:bg-white/80 border-gray-800/50 dark:border-gray-200/50 shadow-black/20 dark:shadow-white/20"
                          : "bg-white/20 dark:bg-black/20 border-gray-200/30 dark:border-gray-700/30 hover:bg-white/30 dark:hover:bg-black/30 shadow-gray-500/20"
                      }`}
                    >
                      <Icon
                        className={`transition-all duration-300 ${
                          isActive ? "text-white dark:text-black" : "text-gray-700 dark:text-gray-300"
                        }`}
                        size={18}
                      />

                      {/* Active State Glow */}
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-full bg-black/20 dark:bg-white/20 blur-md"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                        />
                      )}
                    </motion.div>

                    {/* Tooltip */}
                    <motion.div
                      initial={{ opacity: 0, x: 10, scale: 0.9 }}
                      whileHover={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-1/2 -translate-y-1/2 right-full mr-3 px-3 py-2 text-sm font-medium rounded-lg backdrop-blur-xl bg-white/90 dark:bg-black/90 text-gray-900 dark:text-white border border-gray-200/30 dark:border-gray-700/30 shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none"
                    >
                      {item.label}

                      {/* Tooltip Arrow */}
                      <div className="absolute top-1/2 -translate-y-1/2 left-full w-0 h-0 border-l-4 border-l-white/90 dark:border-l-black/90 border-y-4 border-y-transparent" />
                    </motion.div>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={toggleMenu}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full backdrop-blur-xl bg-white/20 dark:bg-black/20 border border-gray-200/30 dark:border-gray-700/30 shadow-2xl shadow-gray-500/20 flex items-center justify-center group overflow-hidden"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-gray-100/10 dark:from-black/10 dark:to-gray-900/10 rounded-full" />

        {/* Icon Container */}
        <div className="relative z-10">
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="text-gray-700 dark:text-gray-300" size={20} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="text-gray-700 dark:text-gray-300" size={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Hover Ripple Effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-white/10 dark:bg-black/10 opacity-0 group-hover:opacity-100"
          animate={isOpen ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        />

        {/* Active State Ring */}
        {isOpen && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 0.3 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="absolute inset-0 rounded-full border-2 border-gray-600 dark:border-gray-400"
          />
        )}

        {/* Floating Particles */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute -top-1 -right-1 w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full opacity-60"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-gray-500 dark:bg-gray-500 rounded-full opacity-40"
        />
      </motion.button>

      {/* Background Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/5 dark:bg-white/5 backdrop-blur-sm -z-10"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
