import { Layout } from '@components/Layout'
import { MissionsScreen } from '@components/Screens'
import client from '@lib/apollo-client'
import { NextPage, NextPageContext } from 'next'
import Error404 from 'pages/404'
import React from 'react'
import { LaunchDocument, Launch, LaunchQuery } from 'types/generated'

type LaunchPageProps = { launch: Launch }

const Launch: NextPage<LaunchPageProps> = ({ launch }) => {
  if (!launch) return <Error404 />

  console.log(launch)

  return (
    <Layout pathname="/">
      <MissionsScreen title="missions">
        <div className="max-w-7xl m-auto w-full flex items-center flex-col min-h-screen gap-16 py-16 px-8">
          <div className={`flex`}>
            <span className="w-full hidden md:block" />
            {JSON.stringify(launch)}
          </div>
        </div>
      </MissionsScreen>
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
