'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa'

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/frederickkrisna',
    icon: FaGithub,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/frederick-suryopranoto',
    icon: FaLinkedin,
  },
  {
    name: 'Email',
    url: 'mailto:frederickkrisna@gmail.com',
    icon: FaEnvelope,
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/frederickkrisna',
    icon: FaInstagram,
  },
]

export default function SocialIcons() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed left-8 top-60 transform -translate-y-1/2 z-50 hidden lg:flex flex-col space-y-6"
    >
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, x: 10 }}
          whileTap={{ scale: 0.9 }}
          className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
          aria-label={link.name}
        >
          <link.icon size={24} />
        </motion.a>
      ))}
      <div className="w-px h-24 bg-gray-300 mx-auto mt-4"></div>
    </motion.div>
  )
}