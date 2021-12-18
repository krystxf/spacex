import type { GetServerSideProps, NextPage } from 'next';
import { Layout } from '@components/Layout';

import React from 'react';
import client from '@lib/apollo-client';
import {
  Launch,
  LaunchNextDocument,
  LaunchNextQuery,
  useLaunchesPastQuery,
} from 'types/generated';
import { LaunchTable } from '@components/Tables/LaunchTable';
import { BackgroundScreen, SpaceModuleScreen } from '@components/Screens';
import Loading from '@components/UI/Loading';

const Home: NextPage<{ launchNext: Launch }> = ({ launchNext }) => {
  const { data, loading, error } = useLaunchesPastQuery({
    variables: {
      offset: 0,
      limit: 10,
      order: 'asc',
      sort: 'static_fire_date_utc',
    },
  });

  return (
    <Layout pathname="/">
      <SpaceModuleScreen title="launches" />
      {/* UPCOMING LAUNCH */}
      {launchNext && (
        <BackgroundScreen backgroundImage="https://www.spacex.com/static/images/falcon-9/desktop/MerlinVac.webp">
          <div className="text-white">
            <h2 className="font-bold text-3xl">UPCOMING LAUNCH</h2>
            <LaunchTable launch={launchNext} />
          </div>
        </BackgroundScreen>
      )}
      {loading ? (
        <BackgroundScreen backgroundImage="https://www.spacex.com/static/images/falcon-9/desktop/MerlinVac.webp">
          <div className="text-white w-full flex gap-4 justify-center col-span-2 items-center">
            <h2 className="font-bold text-3xl">
              {loading
                ? 'FETCHING LAUNCHES'
                : 'SOMETHING WENT WRONG, TRY REFRESHING PAGE'}
            </h2>
            {loading && <Loading />}{' '}
          </div>
        </BackgroundScreen>
      ) : (
        data?.launchesPast &&
        data.launchesPast.map((launch, index) => {
          const imageCount = launch?.links?.flickr_images?.length ?? 0; // get count of images from mission
          const imageIndex = Math.floor(Math.random() * imageCount); // get random image index
          const backgroundImage =
            launch?.links?.flickr_images?.[imageIndex] ?? undefined;

          return launch ? (
              <BackgroundScreen key={index} backgroundImage={backgroundImage}>
                <div
                  className={`text-white ${
                    index % 2 === 0 ? 'md:col-start-2' : ''
                  }`}
                >
                  <h2 className="font-bold text-3xl">{launch.mission_name}</h2>
                  <LaunchTable launch={launch} hideMission />
                </div>
              </BackgroundScreen>
          ) : null;
        })
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
