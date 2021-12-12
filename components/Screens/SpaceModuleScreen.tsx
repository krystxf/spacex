import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export type SpaceModuleScreenProps = { title: string };

const SpaceModuleScreen: React.FC<SpaceModuleScreenProps> = ({ title }) => {
  const [offset, setOffset] = useState([0, 0]);

  return (
    <>
      <div className="overflow-x-hidden bg-black">
        {/* TITLE */}
        <div
          className="absolute left-1/2 -translate-x-1/2 lg:translate-x-0 lg:right-[20%] top-[20%] z-10 lg:text-8xl text-6xl font-bold text-gray-300"
          onPointerMove={(e) => setOffset([-e.pageX / 400, -e.pageY / 400])}
        >
          {title.toUpperCase()}
        </div>
        {/* BACKGROUND IMAGE */}
        <motion.div
          className="relative w-[105vw] h-[105vh] text-white"
          onPointerMove={(e) => setOffset([-e.pageX / 400, -e.pageY / 400])}
          style={{
            x: offset[0],
            y: offset[1] - 40,
          }}
        >
          <Image
            src="/background.webp"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="Background picture"
          />
          {/* SPACE MODULE IMAGE */}
          <motion.div
            className="w-[80%] md:w-[800px] h-[80vh] absolute left-10 bottom-20 z-10"
            style={{
              x: offset[0],
              y: offset[1],
            }}
          >
            <Image
              src="/dragon2.png"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
              alt="Dragon module picture"
            />
          </motion.div>
        </motion.div>
      </div>
      <div className="h-44 w-full from-transparent to-black bg-gradient-to-b -mt-52 relative z-20" />
    </>
  );
};

export default SpaceModuleScreen;
