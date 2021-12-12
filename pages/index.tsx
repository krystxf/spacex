import type { GetServerSideProps, NextPage } from 'next';
import { Layout } from '@components/Layout';

import React from 'react';
import client from '@lib/apollo-client';
import { LaunchNextDocument } from 'types/generated';
import { LaunchTable } from '@components/LaunchTable';
import { SpaceModuleScreen } from '@components/Screens';

const Home: NextPage<{ launchNext: any }> = ({ launchNext }) => {
  return (
    <Layout pathname="/">
      <SpaceModuleScreen title="launches" />
      {/* UPCOMING LAUNCH */}
      <div
        className="bg-black min-h-screen"
        style={{
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundImage:
            'url("https://www.spacex.com/static/images/falcon-9/desktop/MerlinVac.webp")',
        }}
      >
        <div className="w-full h-full md:bg-[#0000008e] bg-[#000000b6]">
          <div className="max-w-7xl m-auto px-8 xl:px-4 w-full grid grid-cols-1 md:grid-cols-2 pt-20 min-h-screen gap-4 items-center">
            <div className="text-white">
              <h2 className="font-bold text-3xl">UPCOMING LAUNCH</h2>
              <LaunchTable launch={launchNext} />
            </div>
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
