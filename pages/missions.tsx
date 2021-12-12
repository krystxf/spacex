import type { GetServerSideProps, NextPage } from 'next';
import { Layout } from '@components/Layout';

import React from 'react';
import client from '@lib/apollo-client';
import { MissionsDocument } from 'types/generated';
import { BoosterScreen, SpaceModuleScreen } from '@components/Screens';

const Missions: NextPage<{ missions: any }> = ({ missions }) => {
  console.log(missions);
  return (
    <Layout pathname="/missions">
      <SpaceModuleScreen title="launches" />
      {/* UPCOMING LAUNCH */}
      <BoosterScreen>
        <div className="text-white">
          <h2 className="font-bold text-3xl">UPCOMING LAUNCH</h2>
        </div>
      </BoosterScreen>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query({
    query: MissionsDocument,
  });

  return {
    props: {
      missions: data.missions,
    },
  };
};

export default Missions;
