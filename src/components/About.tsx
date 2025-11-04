'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { label: 'Projects', value: '20+' },
    { label: 'Experience', value: '2+ Years' },
    { label: 'Clients', value: '15+' },
    { label: 'Technologies', value: '10+' },
  ]

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-white py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
                <div className="bg-gray-300 h-80 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Your Photo</span>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg"
              >
                🚀 Passionate
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-4 -left-4 bg-purple-500 text-white px-4 py-2 rounded-lg shadow-lg"
              >
                💻 Developer
              </motion.div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with expertise in modern web technologies. 
                  I love creating applications that are not only functional but also provide 
                  exceptional user experiences.
                </p>
                
                <p>
                  With a strong foundation in both frontend and backend development, 
                  I bring ideas to life through clean code and thoughtful design. 
                  I'm constantly learning and adapting to new technologies to stay 
                  at the forefront of web development.
                </p>

                <p>
                  When I'm not coding, you can find me exploring new frameworks, 
                  contributing to open-source projects, or sharing knowledge with 
                  the developer community.
                </p>
              </div>

              {/* Stats */}
              <motion.div 
                className="grid grid-cols-2 gap-6 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}