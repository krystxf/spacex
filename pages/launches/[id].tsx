import { Layout } from '@components/Layout'
import { PageScreen } from '@components/Screens'
import Row from '@components/Tables/LaunchTable/Row'
import client from '@lib/apollo-client'
import { motion } from 'framer-motion'
import { NextPage, NextPageContext } from 'next'
import Link from 'next/link'
import Error404 from 'pages/404'
import React from 'react'
import { LaunchDocument, Launch, LaunchQuery } from 'types/generated'

type LaunchPageProps = { launch: Launch }

const Launch: NextPage<LaunchPageProps> = ({ launch }) => {
  if (!launch) return <Error404 />

  const imageCount = launch?.links?.flickr_images?.length ?? 0 // get count of images from mission
  const imageIndex = Math.floor(Math.random() * imageCount) // get random image index
  const backgroundImage =
    launch?.links?.flickr_images?.[imageIndex] ?? '/FH_2.jpg'

  const plannedLaunch = new Date(launch.launch_date_utc).toLocaleDateString(
    'en-UK',
    {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    }
  )

  const actualLaunch = launch.static_fire_date_utc // if date is null return unknown
    ? new Date(launch.static_fire_date_utc).toLocaleDateString('en-UK', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    })
    : 'unknown'

  return (
    <Layout pathname="/" title={`Lanch ${launch.mission_name}`}>
      <PageScreen
        title={`${launch.mission_name} LAUNCH`}
        backgroundImage={backgroundImage}
      >
        <motion.div
          className="w-full text-white text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1, ease: 'easeInOut' }}
        >
          {/* DESCRIPTION */}
          {launch.details}

          <div className="flex my-10">
            <div className="text-white max-w-7xl w-full backdrop-blur-sm backdrop-filter rounded-sm">
              {/* TABLE */}
              <div className="flex flex-col text-white font-medium divide-y divide-gray-500 w-full ">
                <Row title="rocket" value={launch.rocket?.rocket_name ?? ''} />{' '}
                <Row
                  title="mission name"
                  value={
                    launch?.mission_id?.length ?? 0 > 0 ? (
                      <Link href={`/missions/${launch.mission_id}`}>
                        <a className="font-bold text-3xl">
                          {launch.mission_name ?? ''}
                        </a>
                      </Link>
                    ) : (
                      <span>{launch.mission_name ?? ''}</span>
                    )
                  }
                />
                <Row
                  title={
                    // if launch is in past, return planned, bcs we don't have launch date yet
                    new Date(launch.launch_date_utc) < new Date()
                      ? 'planned launch date'
                      : 'launch date'
                  }
                  value={plannedLaunch}
                  isDate
                />
                <Row title="launch date" value={actualLaunch} isDate />
                <Row
                  title="launch site"
                  value={
                    <abbr
                      title={launch.launch_site?.site_name_long ?? undefined}
                    >
                      {launch.launch_site?.site_name ?? ''}
                    </abbr>
                  }
                />
              </div>
            </div>
            <div className="w-full hidden md:block" />
          </div>
        </motion.div>
        <div className="flex justify-between mt-16" />
      </PageScreen>
    </Layout>
  )
}

export const getServerSideProps = async (context: NextPageContext) => {
  const { data }: { data: LaunchQuery } = await client.query({
    variables: {
      id: context.query.id
    },
    query: LaunchDocument
  })

  return {
    props: {
      launch: data.launch
    }
  }
}

export default Launch
