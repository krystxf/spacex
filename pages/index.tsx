import type { GetServerSideProps, NextPage } from 'next';
import Layout from '@components/Layout';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import client from '@lib/apollo-client';
import { LaunchNextDocument } from 'types/generated';
import TimeAgo from 'react-timeago';

const Home: NextPage<{ launchNext: any }> = ({ launchNext }) => {
  const [offset, setOffset] = useState([0, 0]);

  return (
    <Layout pathname="/">
      <div className="overflow-x-hidden bg-black">
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
          <div className="w-[800px] h-[80vh] absolute right-24 top-40 z-10 text-8xl font-bold text-gray-300">
            Launches
          </div>

          <motion.div
            className="w-[800px] h-[80vh] absolute left-10 bottom-20 z-10"
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
      <div className="h-32 w-full from-transparent to-black bg-gradient-to-b -mt-40 relative z-20"></div>
      <div className="bg-black w-full h-screen gap-4 px-4 relative pt-40 pl-14">
        <Image
          src="/Merlin.webp"
          layout="fill"
          objectFit="contain"
          objectPosition="right"
          alt="Merlin booster"
        />
        <div className="p-4 z-20 text-white absolute">
          <h2 className="font-semibold text-3xl">UPCOMING:</h2>
          <div className="flex flex-col text-white font-medium text-xl w-96 divide-y divide-gray-500">
            <div className="flex justify-between items-center py-2">
              <span>Rocket</span>
              <span>{launchNext.rocket.rocket.name}</span>
            </div>{' '}
            <div className="flex justify-between items-center py-2">
              <span>Mission</span>
              <span>{launchNext.mission_name}</span>
            </div>{' '}
            <div className="flex justify-between items-center py-2">
              <span>Launch date</span>
              <span>
                {new Date(launchNext.launch_date_utc) < new Date()
                  ? 'unknown'
                  : new Date(launchNext.launch_date_utc).toString()}
              </span>
            </div>
            <span className="">
              <div className="font-medium text-xl py-2">Description:</div>
              <p className="font-normal text-base ">{launchNext.details}</p>
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query({
    query: LaunchNextDocument,
  });

  return {
    props: {
      launchNext: data.launchNext,
    },
  };
};

export default Home;
