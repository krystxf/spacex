import { motion } from 'framer-motion'
import React from 'react'

const BackgroundScreen: React.FC<{
  backgroundImage?: string
}> = ({ children, backgroundImage }) => {
  return (
    <motion.div
      className="min-h-screen relative"
      style={{
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      <div className="absolute w-full top-0 bg-gradient-to-b from-black to-transparent h-[10vh]" />
      <motion.div
        className="w-full h-full"
        initial={{ backgroundColor: '#000' }}
        animate={{ backgroundColor: '#000000b6' }}
        transition={{ delay: 0.75, duration: 1, ease: 'easeInOut' }}
      >
        <div className="max-w-7xl m-auto px-8 xl:px-4 w-full grid grid-cols-1 md:grid-cols-2 pt-20 min-h-screen gap-4 items-center">
          {children}
        </div>
      </motion.div>
      <div className="absolute w-full bottom-0 bg-gradient-to-b to-black from-transparent h-[10vh]" />
    </motion.div>
  )
}

export default BackgroundScreen
