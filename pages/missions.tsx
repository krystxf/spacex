import type { GetServerSideProps, NextPage } from 'next';
import { Layout } from '@components/Layout';

import React from 'react';
import client from '@lib/apollo-client';
import { Mission, MissionsDocument, MissionsQuery } from 'types/generated';
import { MissionsScreen } from '@components/Screens';
import { MissionTable } from '@components/MissionTable';

const Missions: NextPage<{
  missions: Mission[];
}> = ({ missions }) => {
  return (
    <Layout pathname="/missions">
      <MissionsScreen title="missions">
        <div className="max-w-7xl m-auto w-full flex items-center flex-col min-h-screen gap-16 py-16 px-8">
          {missions.map((mission, index: number) => (
            <div
              key={mission.id}
              className={`flex ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
            >
              <MissionTable mission={mission} />
              <span className="w-full hidden md:block" />
            </div>
          ))}
        </div>
      </MissionsScreen>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data }: { data: MissionsQuery } = await client.query({
    query: MissionsDocument,
  });

  return {
    props: {
      missions: data.missions,
    },
  };
};

export default Missions;
