'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const experiences = [
  {
    company: 'Tech Company',
    position: 'Senior Frontend Developer',
    period: '2022 - Present',
    description: 'Led development of customer-facing web applications using React, Next.js, and TypeScript. Improved performance by 40% and user engagement by 25%.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind']
  },
  {
    company: 'Startup Inc',
    position: 'Full Stack Developer',
    period: '2020 - 2022',
    description: 'Developed and maintained web applications from concept to deployment. Collaborated with cross-functional teams to deliver high-quality products.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express']
  },
  {
    company: 'Digital Agency',
    position: 'Frontend Developer',
    period: '2019 - 2020',
    description: 'Created responsive websites and web applications for various clients. Focused on user experience and modern web standards.',
    technologies: ['JavaScript', 'Vue.js', 'CSS3', 'HTML5']
  }
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const techVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4
      }
    })
  }

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center bg-white py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Work Experience
          </motion.h2>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-12 relative"
          >
            {/* Vertical line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 origin-top"
            />
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="relative flex items-start group"
              >
                {/* Animated dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ 
                    delay: 0.8 + index * 0.3,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ scale: 1.2 }}
                  className="absolute left-0.5 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 z-10"
                />
                
                {/* Pulse animation */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ 
                    delay: 1 + index * 0.3,
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="absolute left-0.5 w-4 h-4 bg-blue-200 rounded-full transform -translate-x-1/2"
                />
                
                <div className="ml-16 bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group-hover:border-blue-200 flex-1">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 1 + index * 0.3 }}
                    className="flex flex-col md:flex-row md:items-center md:justify-between mb-4"
                  >
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {exp.position}
                    </h3>
                    <motion.span 
                      className="text-blue-600 font-semibold text-sm mt-1 md:mt-0 bg-blue-50 px-3 py-1 rounded-full"
                      whileHover={{ scale: 1.05 }}
                    >
                      {exp.period}
                    </motion.span>
                  </motion.div>
                  
                  <motion.h4 
                    className="text-lg text-gray-700 mb-3 font-medium"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 1.1 + index * 0.3 }}
                  >
                    {exp.company}
                  </motion.h4>
                  
                  <motion.p 
                    className="text-gray-600 mb-4 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 1.2 + index * 0.3 }}
                  >
                    {exp.description}
                  </motion.p>
                  
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 1.3 + index * 0.3 }}
                  >
                    {exp.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        custom={techIndex}
                        variants={techVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: "#3b82f6",
                          color: "white"
                        }}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium cursor-default transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}