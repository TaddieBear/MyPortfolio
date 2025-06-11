"use client"

import emailjs from "emailjs-com"
import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Facebook,
  Github,
  Linkedin,
  MessageCircle,
  CheckCircle,
  XCircle,
  X,
  Laptop,
  Terminal,
  Braces,
  Database,
  Globe,
  Server,
  Layers,
} from "lucide-react"
import { useState, useEffect } from "react"

const socialLinks = [
  {
    name: "Gmail",
    icon: Mail,
    href: "mailto:tradhcordez@gmail.com",
    color: "from-gray-700 to-gray-900",
    hoverColor: "hover:shadow-gray-500/25",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/tradh.cordez",
    color: "from-gray-600 to-gray-800",
    hoverColor: "hover:shadow-gray-500/25",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/TaddieBear",
    color: "from-gray-800 to-black",
    hoverColor: "hover:shadow-gray-500/25",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/tradh-cordez-07a511157",
    color: "from-gray-700 to-gray-900",
    hoverColor: "hover:shadow-gray-500/25",
  },
]

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "tradhcordez@gmail.com",
    href: "mailto:tradhcordez@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Baao, Camarines Sur, Philippines",
    href: "#",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
}

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.2,
    },
  },
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
}

interface NotificationProps {
  type: "success" | "error"
  message: string
  isVisible: boolean
  onClose: () => void
}

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (formData: FormData) => Promise<void>
  isSubmitting: boolean
}

const ModernNotification: React.FC<NotificationProps> = ({ type, message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose()
      }, 5000) // Auto-dismiss after 5 seconds

      return () => clearTimeout(timer)
    }
  }, [isVisible, onClose])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -100, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-6 right-6 z-50 max-w-md"
        >
          <div
            className={`relative backdrop-blur-xl border rounded-2xl p-6 shadow-2xl ${
              type === "success"
                ? "bg-gray-50/90 dark:bg-gray-900/90 border-gray-200/50 dark:border-gray-700/50"
                : "bg-gray-100/90 dark:bg-gray-800/90 border-gray-300/50 dark:border-gray-600/50"
            }`}
          >
            <div className="relative flex items-start gap-4">
              {/* Icon with Animation */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                  type === "success" ? "bg-gray-800 text-white" : "bg-gray-600 text-white"
                }`}
              >
                {type === "success" ? <CheckCircle size={24} /> : <XCircle size={24} />}
              </motion.div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <motion.h4
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className={`font-bold text-lg ${
                    type === "success" ? "text-gray-800 dark:text-gray-200" : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {type === "success" ? "Message Sent!" : "Error Occurred"}
                </motion.h4>
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className={`text-sm mt-1 ${
                    type === "success" ? "text-gray-700 dark:text-gray-300" : "text-gray-600 dark:text-gray-400"
                  }`}
                >
                  {message}
                </motion.p>

                {/* Progress Bar */}
                <motion.div
                  className={`mt-3 h-1 rounded-full overflow-hidden ${
                    type === "success" ? "bg-gray-200 dark:bg-gray-800" : "bg-gray-300 dark:bg-gray-700"
                  }`}
                >
                  <motion.div
                    initial={{ width: "100%" }}
                    animate={{ width: "0%" }}
                    transition={{ duration: 5, ease: "linear" }}
                    className={`h-full ${type === "success" ? "bg-gray-800" : "bg-gray-600"}`}
                  />
                </motion.div>
              </div>

              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
                  type === "success"
                    ? "text-gray-600 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800"
                    : "text-gray-500 hover:bg-gray-300 dark:text-gray-500 dark:hover:bg-gray-700"
                }`}
              >
                <X size={16} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, onSubmit, isSubmitting }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await onSubmit(formData)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto backdrop-blur-xl bg-white/20 dark:bg-black/20 border border-gray-200/30 dark:border-gray-700/30 rounded-3xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-200/50 dark:bg-gray-800/50 hover:bg-gray-300/50 dark:hover:bg-gray-700/50 flex items-center justify-center transition-colors duration-200 z-10"
              >
                <X size={20} className="text-gray-600 dark:text-gray-400" />
              </button>

              {/* Modal Content */}
              <div className="p-6 lg:p-8">
                <div className="mb-8">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-2 text-gray-900 dark:text-white">
                    Send me a message
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Fill out the form below and I&apos;ll get back to you as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl backdrop-blur-md bg-white/20 dark:bg-white/10 border border-gray-200/30 dark:border-gray-700/30 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
                        placeholder="Your full name"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl backdrop-blur-md bg-white/20 dark:bg-white/10 border border-gray-200/30 dark:border-gray-700/30 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl backdrop-blur-md bg-white/20 dark:bg-white/10 border border-gray-200/30 dark:border-gray-700/30 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl backdrop-blur-md bg-white/20 dark:bg-white/10 border border-gray-200/30 dark:border-gray-700/30 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-gray-800 via-gray-700 to-black dark:from-gray-200 dark:via-gray-300 dark:to-white dark:text-black shadow-xl hover:shadow-2xl hover:shadow-gray-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [notification, setNotification] = useState<{
    type: "success" | "error"
    message: string
    isVisible: boolean
  }>({
    type: "success",
    message: "",
    isVisible: false,
  })

  const showNotification = (type: "success" | "error", message: string) => {
    setNotification({
      type,
      message,
      isVisible: true,
    })
  }

  const hideNotification = () => {
    setNotification((prev) => ({ ...prev, isVisible: false }))
  }

  const handleFormSubmit = async (formData: FormData) => {
    setIsSubmitting(true)

    try {
      await emailjs.send(
        "service_eobcspj", // Replace with your actual EmailJS service ID
        "template_93sejop", // Replace with your actual EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "JG2NOWLMRui5WKmaU", // Replace with your EmailJS public key
      )

      showNotification("success", "Thank you for reaching out! I'll get back to you within 24 hours.")
      setIsModalOpen(false)
    } catch (error) {
      console.error("EmailJS Error:", error)
      showNotification("error", "Oops! Something went wrong. Please try again or contact me directly via email.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="relative min-h-screen pt-8 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-black dark:via-gray-900 dark:to-gray-800 text-gray-800 dark:text-white overflow-hidden"
    >
      {/* Modern Notification */}
      <ModernNotification
        type={notification.type}
        message={notification.message}
        isVisible={notification.isVisible}
        onClose={hideNotification}
      />

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleFormSubmit}
        isSubmitting={isSubmitting}
      />

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
            Get In Touch
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
            Let&apos;s collaborate and bring your ideas to life. I&apos;m always excited to work on new projects and
            challenges.
          </motion.p>
        </motion.div>

        {/* Contact Information and Social Links in One Row */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto mb-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="backdrop-blur-xl bg-white/20 dark:bg-black/20 border border-gray-200/30 dark:border-gray-700/30 rounded-3xl p-6 lg:p-8 shadow-2xl h-full">
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <motion.a
                      key={index}
                      href={info.href}
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-200 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center shadow-lg">
                        <Icon size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{info.label}</p>
                        <p className="font-semibold text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-200">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  )
                })}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-8 p-4 rounded-xl bg-gray-50/50 dark:bg-gray-900/20 border border-gray-200/50 dark:border-gray-700/50"
              >
                <div className="flex items-center gap-3 mb-2">
                  <MessageCircle size={20} className="text-gray-600 dark:text-gray-400" />
                  <span className="font-semibold text-gray-800 dark:text-gray-300">Quick Response</span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  I typically respond to messages within 24 hours. For urgent matters, feel free to reach out via phone.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="backdrop-blur-xl bg-white/20 dark:bg-black/20 border border-gray-200/30 dark:border-gray-700/30 rounded-3xl p-6 lg:p-8 shadow-2xl h-full">
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-900 dark:text-white">Connect With Me</h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4 mb-8"
              >
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex flex-col items-center gap-3 p-6 rounded-2xl bg-gradient-to-br ${social.color} text-white shadow-xl hover:shadow-2xl ${social.hoverColor} transition-all duration-300 group`}
                    >
                      <Icon size={24} className="group-hover:scale-110 transition-transform duration-200" />
                      <span className="font-semibold text-sm">{social.name}</span>
                    </motion.a>
                  )
                })}
              </motion.div>

              {/* Send Message Button */}
              <motion.button
                onClick={() => setIsModalOpen(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-gray-800 via-gray-700 to-black dark:from-gray-200 dark:via-gray-300 dark:to-white dark:text-black shadow-xl hover:shadow-2xl hover:shadow-gray-500/25 transition-all duration-300"
              >
                <Send size={20} />
                <span>Send me a message</span>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mt-20 border-t border-gray-200/30 dark:border-gray-700/30"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Brand/Logo */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center md:text-left"
              >
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <div className="relative w-10 h-10">
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
                      <Terminal className="w-6 h-6 text-gray-800 dark:text-gray-200" />
                    </div>
                  </div>
                  <span className="font-bold text-xl bg-gradient-to-r from-gray-800 to-black dark:from-gray-200 dark:to-white bg-clip-text text-transparent">
                    TCorderz
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs mx-auto md:mx-0">
                  Crafting modern web experiences with passion and precision.
                </p>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Follow Me</h4>
                <div className="flex justify-center gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 dark:from-gray-300 dark:to-gray-100 flex items-center justify-center text-white dark:text-gray-900 shadow-lg hover:shadow-xl hover:shadow-gray-500/25 transition-all duration-300"
                      >
                        <Icon size={18} />
                      </motion.a>
                    )
                  })}
                </div>
              </motion.div>

              {/* Back to Top & Copyright */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center md:text-right"
              >
                <motion.button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-gray-100 text-white dark:text-gray-900 font-medium text-sm shadow-lg hover:shadow-xl hover:shadow-gray-500/25 transition-all duration-300 mb-4"
                >
                  <motion.div
                    animate={{ y: [-2, 2, -2] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    ↑
                  </motion.div>
                  Back to Top
                </motion.button>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  © {new Date().getFullYear()} TCorderz. All rights reserved.
                </p>
              </motion.div>
            </div>

            {/* Bottom Border */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-8 pt-8 border-t border-gray-200/20 dark:border-gray-700/20 text-center"
            >
              <p className="text-xs text-gray-500 dark:text-gray-500">
                Built with Next.js, TypeScript, and Tailwind CSS
              </p>
            </motion.div>
          </div>
        </motion.footer>
      </div>
    </section>
  )
}
