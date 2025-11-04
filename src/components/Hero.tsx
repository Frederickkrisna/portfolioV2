'use client'

import { motion, AnimatePresence } from 'framer-motion'
import TypeWriter from './TypeWriter'
import FallingDotsBackground from './FallingDotsBackground'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [showIntro, setShowIntro] = useState(false)
  const name = "Frederick Krisna S".split("")

  useEffect(() => {
    const introShown = sessionStorage.getItem('introShown')
    
    if (!introShown) {
      setShowIntro(true)
      
      const timer = setTimeout(() => {
        setShowIntro(false)
        sessionStorage.setItem('introShown', 'true')
      }, 2000)
      
      return () => clearTimeout(timer)
    }
  }, [])

  const firstName = "FREDERICK".split("")
  const lastName = "KRISNA".split("")

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="intro"
            className="fixed inset-0 z-50 flex items-center justify-center bg-white"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              transition: { 
                duration: 0.6, 
                ease: [0.4, 0, 0.2, 1] 
              }
            }}
          >
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ 
                opacity: 0,
                transition: { 
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1]
                }
              }}
              transition={{ 
                duration: 0.6
              }}
            >
              <div className="flex justify-center items-center flex-wrap">
                <div className="flex">
                  {firstName.map((letter, index) => (
                    <motion.span
                      key={`first-${index}`}
                      className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900"
                      initial={{ y: 80, opacity: 0, scale: 0.8 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.08,
                        ease: [0.34, 1.56, 0.64, 1]
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </div>

                <motion.span
                  className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 w-4 md:w-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: firstName.length * 0.08 + 0.1,
                    ease: "easeOut"
                  }}
                />

                <div className="flex">
                  {lastName.map((letter, index) => (
                    <motion.span
                      key={`last-${index}`}
                      className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                      initial={{ y: 80, opacity: 0, scale: 0.8 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: (firstName.length * 0.08) + 0.2 + (index * 0.08),
                        ease: [0.34, 1.56, 0.64, 1]
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
        <FallingDotsBackground 
          dotCount={15}
          className="z-0"
        />
        
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Hi, I&apos;m{' '}
              <span className="inline-block">
                {name.map((letter, index) => (
                  <motion.span
                    key={index}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.3 + index * 0.05,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.4,
                      y: -8,
                      rotate: [0, -5, 5, 0],
                      transition: { 
                        duration: 0.3
                      }
                    }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </span>
            </motion.h1>
            
            <motion.div>
              <TypeWriter />
            </motion.div>
            
            <motion.p
              className="text-lg text-gray-500 max-w-2xl mx-auto mb-12 cursor-pointer inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Building the web, one component at a time. 
              Passionate about creating digital solutions that make a difference.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  )
}