import React from 'react'
import About from '../About/About'
import Sliding from '../Sliding/Sliding'
import { motion } from 'framer-motion'

export default function AboutUs() {
  return (
    <motion.div style={{ marginBottom: '150px' }} enter={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
      <Sliding />
      <About />
    </motion.div>
  )
}
