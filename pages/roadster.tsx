import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import Layout from "@components/Layout";
import { gql } from "@apollo/client";
import client from "lib/apollo-client";

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
              value={`${FormatNumber(
                roadster.earth_distance_km.toFixed(2)
              )} km`}
            />
            <FlexItem
              title="Distance from Mars"
              value={`${FormatNumber(roadster.mars_distance_km.toFixed(2))} km`}
            />
            <FlexItem
              title="Velocity"
              value={`${FormatNumber(roadster.speed_kph.toFixed(2))} km/h`}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

function FormatNumber(num: number | string) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

const FlexItem: React.FC<{ title: string; value: string }> = ({
  title,
  value,
}) => {
  return (
    <div className="flex flex-col items-center">
      <h2>{title}</h2>
      <h3>{value}</h3>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query({
    query: gql`
      query Roadster {
        roadster {
          period_days
          speed_kph
          earth_distance_km
          mars_distance_km
          details
        }
      }
    `,
  });

  return {
    props: {
      roadster: data.roadster,
    },
  };
};

export default Roadster;
