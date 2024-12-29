'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
// import Image from 'next/image'

export default function Component() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const backgroundAnimation = useAnimation()

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    backgroundAnimation.start({
      backgroundPosition: `${mousePosition.x / 50}px ${mousePosition.y / 50}px`,
    })
  }, [mousePosition, backgroundAnimation])

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={backgroundAnimation}
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />
      <nav className="flex justify-between items-center p-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
        >
          JB
        </motion.div>
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className="flex space-x-6"
        >
          {['Resume', 'Skills', 'Projects', 'Blog'].map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <a href="#" className="hover:text-purple-400 transition-colors">
                {item}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </nav>
      <main className="flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-80px)] p-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 space-y-4"
        >
          <h2 className="text-2xl font-light">Hi, I am</h2>
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
            Bhavana Jami.
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300">I love to create, develop.</p>
          <div className="flex space-x-4 pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
            >
              Resume
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 border border-purple-600 text-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-colors"
            >
              Contact →
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <Image
              src="/placeholder.svg"
              alt="Profile picture"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </motion.div>
      </main>
    </div>
  )
}
