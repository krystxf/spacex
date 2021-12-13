import type { GetServerSideProps, NextPage } from 'next';
import { Layout } from '@components/Layout';

import React from 'react';
import client from '@lib/apollo-client';
import {
  Launch,
  LaunchNextDocument,
  LaunchNextQuery,
  useLaunchNextQuery,
} from 'types/generated';
import { LaunchTable } from '@components/LaunchTable';
import { BoosterScreen, SpaceModuleScreen } from '@components/Screens';

const Home: NextPage<{ launchNext: Launch }> = ({ launchNext }) => {
  return (
    <Layout pathname="/">
      <SpaceModuleScreen title="launches" />
      {/* UPCOMING LAUNCH */}
      {launchNext && (
        <BoosterScreen>
          <div className="text-white">
            <h2 className="font-bold text-3xl">UPCOMING LAUNCH</h2>
            <LaunchTable launch={launchNext} />
          </div>
        </BoosterScreen>
      )}
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data }: { data: LaunchNextQuery } = await client.query({
    query: LaunchNextDocument,
  });

  return {
    props: {
      launchNext: data.launchNext,
    },
  };
};

export default Home;
