import { motion } from 'framer-motion'
import React from 'react'

const PageHeading: React.FC<{ title: string }> = ({ title }) => {
  return (
    <motion.div
      className="absolute left-0 z-10 top-[20%] text-6xl font-bold w-full flex justify-center text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1, ease: 'easeInOut' }}
    >
      {title.toUpperCase()}
    </motion.div>
  )
}

export default PageHeading
