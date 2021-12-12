import type { GetServerSideProps, NextPage } from 'next';
import { Layout } from '@components/Layout';
import client from '@lib/apollo-client';
import CountUp from 'react-countup';
import { RoadsterDocument, useRoadsterQuery } from 'types/generated';
import { StarmanScreen } from '@components/Screens';

const Roadster: NextPage<{
  roadster: {
    period_days: number;
    speed_kph: number;
    earth_distance_km: number;
    mars_distance_km: number;
    details: string;
  };
}> = ({ roadster }) => {
  return (
    <Layout pathname="/roadster">
      <StarmanScreen title="roadster to the mars">
        <div>
          <p className="w-full text-white text-lg">{roadster.details}</p>
          <div className="flex justify-between mt-16">
            <FlexItem
              title="Distance from Earth"
              value={roadster.earth_distance_km}
              suffix="km"
            />
            <FlexItem
              title="Distance from Mars"
              value={roadster.mars_distance_km}
              suffix="km"
            />
            <FlexItem
              title="Velocity"
              value={roadster.speed_kph}
              suffix="km/h"
            />
          </div>
        </div>
      </StarmanScreen>
    </Layout>
  );
};

const FlexItem: React.FC<{ title: string; value: number; suffix: string }> = ({
  title,
  value,
  suffix,
}) => {
  return (
    <div className="text-white flex flex-col items-center w-full">
      <h2 className="font-bold text-lg">{title.toLocaleUpperCase()}</h2>
      <h3 className="font-semibold text-base">
        <CountUp
          start={0}
          end={value}
          duration={2}
          separator=" "
          decimals={2}
          decimal="."
          suffix={` ${suffix}`}
        />
      </h3>
    </div>
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
