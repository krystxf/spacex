import { motion } from 'framer-motion';
import React from 'react';

const Button: React.FC = ({ children }) => {
  return (
    <motion.button
      className="border border-white py-2 px-4 text-xs rounded-sm font-bold text-white hover:bg-gray-100 hover:text-black"
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
