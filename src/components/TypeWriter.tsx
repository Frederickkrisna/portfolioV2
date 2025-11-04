'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const titles = ['Data Analyst', 'Data Scientist', 'Data Engineer', 'Machine Learning Enthusiast', "Full Stack Developer", "Frontend Developer", "App Developer"]

export default function TypeWriter() {
  const [currentTitle, setCurrentTitle] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = titles[currentTitle]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < current.length) {
          setDisplayText(current.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(current.slice(0, displayText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentTitle((prev) => (prev + 1) % titles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentTitle])

  return (
    <div className="text-xl md:text-2xl text-gray-600 mb-8 h-12">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="ml-1"
      >
        |
      </motion.span>
    </div>
  )
}