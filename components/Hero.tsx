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
        <h1 className="text-7xl font-bold">
          Trang Vu
        </h1>

        <p className="text-zinc-400 mt-4 text-xl">
        So called engineer
        </p>
      </motion.div>
    </section>
  )
}