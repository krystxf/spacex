import { motion } from 'framer-motion';
import React from 'react';

const BackgroundScreen: React.FC<{ title: string }> = ({ children, title }) => {
  return (
    <>
      <div
        className="bg-black min-h-screen"
        style={{
          background: 'url("/starman.webp") no-repeat center bottom fixed',
          backgroundSize: '80vw',
        }}
      >
        <motion.div
          className="w-full h-full"
          initial={{ backgroundColor: '#000' }}
          animate={{ backgroundColor: '#00000086' }}
          transition={{ delay: 0.5, duration: 1, ease: 'easeInOut' }}
        >
          <div className="max-w-4xl m-auto px-8 w-full min-h-screen pt-[10vh]">
            <div className="text-6xl font-bold text-white pb-12">
              {title.toUpperCase()}
            </div>
            {children}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default BackgroundScreen;
