import type { GetServerSideProps, NextPage } from "next";
import Layout from "@components/Layout";
import client from "@lib/apollo-client"; 
import CountUp from 'react-countup';
import { RoadsterDocument, useRoadsterQuery } from "types/generated";

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
      <div
        className="relative w-full h-full text-white flex flex-row-reverse px-[20%]"
        style={{
          backgroundImage:
            'url("https://www.spacex.com/static/images/backgrounds/mission_feature.webp")',
        }}
      >
        <div className="mt-24">
          <h1>Tesla Roadster trip to Mars</h1>
          <p className="max-w-xl">{roadster.details}</p>
          <div className="flex justify-between mt-16">
            <FlexItem
              title="Distance from Earth"
              value={
                roadster.earth_distance_km}
              suffix="km"
            />
            <FlexItem
              title="Distance from Mars"
              value={roadster.mars_distance_km}
              suffix="km"
            />
            <FlexItem
              title="Velocity"
              value={(roadster.speed_kph)}
              suffix="km/h"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

 
const FlexItem: React.FC<{ title: string; value: number, suffix: string }> = ({
  title,
  value,
  suffix
}) => {
  return (
    <div className="flex flex-col items-center w-full">
      <h2>{title}</h2>
      <h3>
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
