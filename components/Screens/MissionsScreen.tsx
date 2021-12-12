import { motion } from 'framer-motion';
import React from 'react';

const MissionsScreen: React.FC<{ title: string }> = ({ children, title }) => {
  return (
    <>
      <div
        className="bg-black min-h-screen"
        style={{
          background: 'url("/FH_2.jpg") no-repeat center top fixed',
          backgroundSize: 'cover',
        }}
      >
        <motion.div
          className="w-full h-full"
          initial={{ backgroundColor: '#000' }}
          animate={{ backgroundColor: '#00000086' }}
          transition={{ delay: 0.5, duration: 1, ease: 'easeInOut' }}
        >
          <div className="w-full flex justify-center text-6xl font-bold text-white pb-12 pt-[10vh]">
            {title.toUpperCase()}
          </div>
          {children}
        </motion.div>
      </div>
    </>
  );
};

export default MissionsScreen;
