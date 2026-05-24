"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl font-bold">
          Lilvutra 
        </h1>

        <p className="text-zinc-400 mt-4 text-xl">
        I love to learn about almost many things, but mostly intrigued with AI and models
        </p>
      </motion.div>
    </section>
  )
}