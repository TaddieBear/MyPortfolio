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
} from "lucide-react"
import { useState, useEffect } from "react"

const socialLinks = [
  {
    name: "Gmail",
    icon: Mail,
    href: "mailto:tradhcordez@gmail.com",
    color: "from-red-500 to-red-600",
    hoverColor: "hover:shadow-red-500/25",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/tradh.cordez",
    color: "from-blue-500 to-blue-600",
    hoverColor: "hover:shadow-blue-500/25",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/TaddieBear",
    color: "from-gray-700 to-gray-900",
    hoverColor: "hover:shadow-gray-500/25",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/tradh-cordez-07a511157",
    color: "from-blue-600 to-blue-700",
    hoverColor: "hover:shadow-blue-500/25",
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

interface NotificationProps {
  type: "success" | "error"
  message: string
  isVisible: boolean
  onClose: () => void
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
                ? "bg-emerald-50/90 dark:bg-emerald-900/90 border-emerald-200/50 dark:border-emerald-700/50"
                : "bg-red-50/90 dark:bg-red-900/90 border-red-200/50 dark:border-red-700/50"
            }`}
          >
            {/* Background Glow Effect */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className={`absolute inset-0 rounded-2xl blur-xl ${
                type === "success" ? "bg-emerald-400/20" : "bg-red-400/20"
              }`}
            />

            <div className="relative flex items-start gap-4">
              {/* Icon with Animation */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                  type === "success" ? "bg-emerald-500 text-white" : "bg-red-500 text-white"
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
                    type === "success" ? "text-emerald-800 dark:text-emerald-200" : "text-red-800 dark:text-red-200"
                  }`}
                >
                  {type === "success" ? "Message Sent!" : "Error Occurred"}
                </motion.h4>
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className={`text-sm mt-1 ${
                    type === "success" ? "text-emerald-700 dark:text-emerald-300" : "text-red-700 dark:text-red-300"
                  }`}
                >
                  {message}
                </motion.p>

                {/* Progress Bar */}
                <motion.div
                  className={`mt-3 h-1 rounded-full overflow-hidden ${
                    type === "success" ? "bg-emerald-200 dark:bg-emerald-800" : "bg-red-200 dark:bg-red-800"
                  }`}
                >
                  <motion.div
                    initial={{ width: "100%" }}
                    animate={{ width: "0%" }}
                    transition={{ duration: 5, ease: "linear" }}
                    className={`h-full ${type === "success" ? "bg-emerald-500" : "bg-red-500"}`}
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
                    ? "text-emerald-600 hover:bg-emerald-200 dark:text-emerald-400 dark:hover:bg-emerald-800"
                    : "text-red-600 hover:bg-red-200 dark:text-red-400 dark:hover:bg-red-800"
                }`}
              >
                <X size={16} />
              </motion.button>
            </div>

            {/* Floating Particles */}
            {type === "success" && (
              <>
                <motion.div
                  animate={{
                    y: [-20, -40, -60],
                    x: [0, 10, -5],
                    opacity: [1, 0.5, 0],
                    scale: [0.5, 1, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 0.5,
                  }}
                  className="absolute top-4 right-16 w-2 h-2 bg-emerald-400 rounded-full"
                />
                <motion.div
                  animate={{
                    y: [-15, -35, -55],
                    x: [0, -8, 12],
                    opacity: [1, 0.7, 0],
                    scale: [0.3, 0.8, 0.2],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 1,
                  }}
                  className="absolute top-6 right-20 w-1.5 h-1.5 bg-teal-400 rounded-full"
                />
                <motion.div
                  animate={{
                    y: [-10, -30, -50],
                    x: [0, 15, -10],
                    opacity: [1, 0.6, 0],
                    scale: [0.4, 1.2, 0.1],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 1.5,
                  }}
                  className="absolute top-8 right-12 w-1 h-1 bg-cyan-400 rounded-full"
                />
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
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
      setFormData({ name: "", email: "", subject: "", message: "" })
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
      className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-gray-50 to-stone-100 dark:from-gray-950 dark:via-slate-900 dark:to-gray-900 text-gray-800 dark:text-white overflow-hidden"
    >
      {/* Modern Notification */}
      <ModernNotification
        type={notification.type}
        message={notification.message}
        isVisible={notification.isVisible}
        onClose={hideNotification}
      />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 0)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{
          y: [-25, 25, -25],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-20 w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-3xl blur-sm"
      />
      <motion.div
        animate={{
          y: [25, -25, 25],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 left-20 w-28 h-28 lg:w-36 lg:h-36 bg-gradient-to-br from-teal-400/20 to-cyan-500/20 rounded-full blur-sm"
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
            Get In Touch
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
            Let&apos;s collaborate and bring your ideas to life. I&apos;m always excited to work on new projects and
            challenges.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-3xl p-6 lg:p-8 shadow-2xl">
              <div className="mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold mb-2 text-gray-900 dark:text-white">Send me a message</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Fill out the form below and I&apos;ll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants} className="space-y-2">
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
                      className="w-full px-4 py-3 rounded-xl backdrop-blur-md bg-white/20 dark:bg-white/10 border border-white/30 dark:border-white/20 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-2">
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
                      className="w-full px-4 py-3 rounded-xl backdrop-blur-md bg-white/20 dark:bg-white/10 border border-white/30 dark:border-white/20 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                </div>

                <motion.div variants={itemVariants} className="space-y-2">
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
                    className="w-full px-4 py-3 rounded-xl backdrop-blur-md bg-white/20 dark:bg-white/10 border border-white/30 dark:border-white/20 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                    placeholder="What's this about?"
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-2">
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
                    className="w-full px-4 py-3 rounded-xl backdrop-blur-md bg-white/20 dark:bg-white/10 border border-white/30 dark:border-white/20 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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

          {/* Contact Information & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 space-y-8"
          >
            {/* Contact Information */}
            <div className="backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-3xl p-6 lg:p-8 shadow-2xl">
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h3>

              <motion.div variants={containerVariants} initial="hidden" whileInView="visible" className="space-y-6">
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
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
                        <Icon size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{info.label}</p>
                        <p className="font-semibold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  )
                })}
              </motion.div>
            </div>

            {/* Social Media Links */}
            <div className="backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-3xl p-6 lg:p-8 shadow-2xl">
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-900 dark:text-white">Connect With Me</h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                className="grid grid-cols-2 gap-4"
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

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-900/20 border border-emerald-200/50 dark:border-emerald-700/50"
              >
                <div className="flex items-center gap-3 mb-2">
                  <MessageCircle size={20} className="text-emerald-600 dark:text-emerald-400" />
                  <span className="font-semibold text-emerald-800 dark:text-emerald-300">Quick Response</span>
                </div>
                <p className="text-sm text-emerald-700 dark:text-emerald-400">
                  I typically respond to messages within 24 hours. For urgent matters, feel free to reach out via phone.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
