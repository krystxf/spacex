import type { GetServerSideProps, NextPage } from 'next'
import { Layout } from '@components/Layout'
import InfiniteScroll from 'react-infinite-scroll-component'
import React, { useState } from 'react'
import client from '@lib/apollo-client'
import {
  Launch,
  LaunchNextDocument,
  LaunchNextQuery,
  useLaunchesPastQuery
} from 'types/generated'
import { LaunchTable } from '@components/Tables/LaunchTable'
import { BackgroundScreen, SpaceModuleScreen } from '@components/Screens'
import Loading from '@components/UI/Loading'
import Link from 'next/link'

const Home: NextPage<{ launchNext: Launch }> = ({ launchNext }) => {
  const { data, loading, error, fetchMore, refetch } = useLaunchesPastQuery({
    variables: {
      offset: 0,
      limit: 8,
      order: 'asc',
      sort: 'static_fire_date_utc'
    }
  })

  const [theEnd, setTheEnd] = useState(false)

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
          <div className="text-white w-full flex-col flex gap-4 justify-center col-span-2 items-center">
            <h2 className="font-bold text-3xl">
              {loading
                ? 'FETCHING LAUNCHES'
                : 'SOMETHING WENT WRONG, TRY REFRESHING PAGE'}
            </h2>
            {loading && <Loading />}
          </div>
        </BackgroundScreen>
      ) : (
        <InfiniteScroll
          dataLength={data?.launchesPast?.length ?? 0} //This is important field to render the next data
          // FETCH MORE LAUNCHES
          next={async () => {
            try {
              await fetchMore({
                variables: { offset: data?.launchesPast?.length, limit: 8 },
                updateQuery: (previousResult, { fetchMoreResult }) => {
                  return {
                    ...previousResult,
                    launchesPast: [
                      ...(previousResult.launchesPast ?? []),
                      ...(fetchMoreResult?.launchesPast ?? [])
                    ]
                  }
                }
              })
            } catch (error) {
              setTheEnd(true)
            }
          }}
          hasMore={!theEnd}
          // LOADING
          loader={
            <BackgroundScreen backgroundImage="https://www.spacex.com/static/images/falcon-9/desktop/MerlinVac.webp">
              <div className="text-white w-full flex flex-col gap-4 justify-center col-span-2 items-center">
                <h2 className="font-bold text-3xl">FETCHING MORE LAUNCHES</h2>
                <Loading />
              </div>
            </BackgroundScreen>
          }
          // REFRESH
          refreshFunction={async () => {
            await refetch()
          }}
          pullDownToRefresh
          pullDownToRefreshThreshold={80}
          pullDownToRefreshContent={
            <h3 className="text-white" style={{ textAlign: 'center' }}>
              &#8595; Pull down to refresh
            </h3>
          }
          releaseToRefreshContent={
            <h3 className="text-white" style={{ textAlign: 'center' }}>
              &#8593; Release to refresh
            </h3>
          }
        >
          {data?.launchesPast &&
            data.launchesPast.map((launch, index) => {
              const imageCount = launch?.links?.flickr_images?.length ?? 0 // get count of images from mission
              const imageIndex = Math.floor(Math.random() * imageCount) // get random image index
              const backgroundImage =
                launch?.links?.flickr_images?.[imageIndex] ?? undefined

              return launch ? (
                <BackgroundScreen key={index} backgroundImage={backgroundImage}>
                  <div
                    className={`text-white ${
                      index % 2 === 0 ? 'md:col-start-2' : ''
                    }`}
                  >
                    {launch?.mission_id?.length ?? 0 > 0 ? (
                      <Link href={`/missions/${launch.mission_id}`}>
                        <a className="font-bold text-3xl">
                          {launch.mission_name ?? ''}
                        </a>
                      </Link>
                    ) : (
                      <h2 className="font-bold text-3xl">
                        {launch.mission_name ?? ''}
                      </h2>
                    )}
                    <LaunchTable launch={launch} hideMission />
                  </div>
                </BackgroundScreen>
              ) : null
            })}
        </InfiniteScroll>
      )}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data }: { data: LaunchNextQuery } = await client.query({
    query: LaunchNextDocument
  })

  return {
    props: {
      launchNext: data.launchNext
    }
  }
}

export default Home
