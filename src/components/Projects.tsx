'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: "Alzheimer's Disease Prediction",
    description: "AI-powered web application for early detection of Alzheimer's disease using machine learning algorithms.",
    tech: ["Python", "TensorFlow", "Streamlit", "Scikit-learn"],
    githubLink: '#',
    liveLink: '#',
    year: "2024"
  },
  {
    title: "Salon Reservation System", 
    description: "Modern web application for managing salon appointments with real-time booking and admin dashboard.",
    tech: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    githubLink: '#',
    liveLink: '#',
    year: "2024"
  },
  {
    title: "Mood Bridge",
    description: "Mental health platform for emotional analysis and tracking with AI-driven insights and support.",
    tech: ["React", "Python", "NLP", "FastAPI"],
    githubLink: '#',
    liveLink: '#',
    year: "2024"
  },
  {
    title: "E-Commerce Platform",
    description: "Complete e-commerce solution with product management, shopping cart, and secure payments.",
    tech: ["Next.js", "MongoDB", "Stripe", "TypeScript"],
    githubLink: '#',
    liveLink: '#',
    year: "2023"
  },
  {
    title: "Task Management App",
    description: "Collaborative task management with real-time updates, team features, and progress tracking.",
    tech: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    githubLink: '#',
    liveLink: '#',
    year: "2023"
  }
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Featured Projects
            </motion.h2>
          </div>

          {/* Projects List */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-sm text-gray-500 font-medium">{project.year}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((technology, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        <motion.a
                          href={project.githubLink}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          <FaGithub className="text-lg" />
                          <span className="font-medium">Code</span>
                        </motion.a>
                        <motion.a
                          href={project.liveLink}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          <FaExternalLinkAlt className="text-lg" />
                          <span className="font-medium">Live Demo</span>
                        </motion.a>
                      </div>
                    </div>

                    {/* Visual Indicator */}
                    <div className="lg:w-32 flex-shrink-0">
                      <div className="w-full h-32 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
                        <div className="text-blue-600 text-center">
                          <div className="text-2xl font-bold">{index + 1}</div>
                          <div className="text-xs font-medium mt-1">PROJECT</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          
        </motion.div>
      </div>
    </section>
  )
}