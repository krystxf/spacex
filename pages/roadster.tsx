import type { GetServerSideProps, NextPage } from 'next';
import { Layout } from '@components/Layout';
import client from '@lib/apollo-client';
import CountUp from 'react-countup';
import { RoadsterDocument, useRoadsterQuery } from 'types/generated';
import { StarmanScreen } from '@components/Screens';
import { motion } from 'framer-motion';
import Roadster from 'types/roadster';

const Roadster: NextPage<{ roadster: Roadster }> = ({ roadster }) => {
  return (
    <Layout pathname="/roadster">
      <StarmanScreen title="roadster to the mars">
        <div>
          <motion.p
            className="w-full text-white text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1, ease: 'easeInOut' }}
          >
            {roadster.details}
          </motion.p>
          <div className="flex justify-between mt-16">
            <FlexItem
              title="Distance from Earth"
              value={roadster.earth_distance_km}
              suffix="km"
              delay={1.5}
            />
            <FlexItem
              title="Distance from Mars"
              value={roadster.mars_distance_km}
              suffix="km"
              delay={1.75}
            />
            <FlexItem
              title="Velocity"
              value={roadster.speed_kph}
              suffix="km/h"
              delay={2}
            />
          </div>
        </div>
      </StarmanScreen>
    </Layout>
  );
};

const FlexItem: React.FC<{
  title: string;
  value: number;
  suffix: string;
  delay: number;
}> = ({ title, value, suffix, delay }) => {
  return (
    <motion.div
      className="text-white flex flex-col items-center w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 1, ease: 'easeInOut' }}
    >
      <h2 className="font-bold text-lg">{title.toLocaleUpperCase()}</h2>
      <h3 className="font-semibold text-base">
        <CountUp
          start={delay}
          end={value}
          duration={delay + 1}
          separator=" "
          decimals={2}
          decimal="."
          suffix={` ${suffix}`}
        />
      </h3>
    </motion.div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query({
    query: RoadsterDocument,
  });

  return {
    props: {
      roadster: data.roadster,
    },
  };
};

export default Roadster;
