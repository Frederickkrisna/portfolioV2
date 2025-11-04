'use client'

import { motion } from 'framer-motion'

interface Dot {
  id: number
  left: string
  delay: number
  duration: number
}

interface FallingDotsBackgroundProps {
  dotColor?: string
  dotSize?: string
  dotCount?: number
  className?: string
}

const FallingDotsBackground = ({ 
  dotColor = "bg-gradient-to-br from-blue-400/30 to-purple-400/30",
  dotSize = "w-1 h-1",
  dotCount = 10,
  className = ""
}: FallingDotsBackgroundProps) => {
  // Generate dots dynamically based on dotCount
  const generateDots = (count: number): Dot[] => {
    const positions = ['10%', '15%', '25%', '35%', '40%', '55%', '65%', '70%', '85%', '90%', '5%', '20%', '30%', '45%', '60%', '75%', '80%', '95%']
    
    return Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      left: positions[i % positions.length],
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 3
    }))
  }

  const dots = generateDots(dotCount)

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className={`absolute ${dotSize} ${dotColor} rounded-full`}
          style={{
            left: dot.left,
            top: '-10px'
          }}
          animate={{
            y: ['0vh', '100vh'],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0]
          }}
          whileHover={{
            scale: 3,
            y: -10,
            transition: { duration: 0.2 }
          }}
          transition={{
            duration: dot.duration,
            delay: dot.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

export default FallingDotsBackground