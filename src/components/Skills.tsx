'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa'
import {SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiMongodb, SiPostgresql, SiGit, SiDocker, SiAmazonaws} from 'react-icons/si'


const techStack = [
  { name: 'React', icon: FaReact, color: 'text-blue-400' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-black' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
  { name: 'Python', icon: FaPython, color: 'text-blue-500' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-700' },
  { name: 'Git', icon: SiGit, color: 'text-orange-500' },
  { name: 'Docker', icon: SiDocker, color: 'text-blue-500' },
  { name: 'AWS', icon: SiAmazonaws, color: 'text-orange-400' },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Tech Stack</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center group"
              >
                <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                  <tech.icon className={`text-3xl ${tech.color}`} />
                </div>
                <span className="mt-3 text-sm font-medium text-gray-600 text-center">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}