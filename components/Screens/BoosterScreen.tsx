import { motion } from 'framer-motion';
import React from 'react';

const BoosterScreen: React.FC = ({ children }) => {
  return (
    <motion.div
      className="min-h-screen"
      style={{
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundImage:
          'url("https://www.spacex.com/static/images/falcon-9/desktop/MerlinVac.webp")',
      }}
    >
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
    </motion.div>
  );
};

export default BoosterScreen;
