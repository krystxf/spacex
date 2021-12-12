import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PageHeading from '@components/UI/PageHeading';

export type SpaceModuleScreenProps = { title: string };

const SpaceModuleScreen: React.FC<SpaceModuleScreenProps> = ({ title }) => {
  const [offset, setOffset] = useState([0, 0]);

  return (
    <>
      {/* TITLE */}
      <PageHeading title={title} />

      <div
        className="overflow-x-hidden bg-black"
        onPointerMove={(e) => setOffset([-e.pageX / 400, -e.pageY / 400])}
      >
        {/* BACKGROUND IMAGE */}
        <motion.div
          className="relative w-[105vw] h-[105vh] text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1, ease: 'easeInOut' }}
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
            className="w-[60%] h-[60%] absolute left-10 bottom-20 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
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
