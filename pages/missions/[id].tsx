import { Layout } from '@components/Layout'
import { StarmanScreen } from '@components/Screens'
import Row from '@components/Tables/LaunchTable/Row'
import client from '@lib/apollo-client'
import { motion } from 'framer-motion'
import { NextPage, NextPageContext } from 'next'
import Link from 'next/link'
import Error404 from 'pages/404'
import React from 'react'
import CountUp from 'react-countup'
import { Mission, MissionDocument, MissionQuery } from 'types/generated'

type MissionPageProps = { mission: Mission }

const Mission: NextPage<MissionPageProps> = ({ mission }) => {
  if (!mission) return <Error404 />

  return (
    <Layout pathname="/missions">
      <StarmanScreen
        title={`mission ${mission.name}`}
        backgroundImage="/FH_2.jpg"
      >
        <motion.div
          className="w-full text-white text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1, ease: 'easeInOut' }}
        >
          {/* DESCRIPTION */}
          {mission.description}
          {mission.wikipedia && (
            <div className="pt-4">
              {'More on '}
              <Link href={mission.wikipedia}>
                <a className="underline hover:text-gray-200 transition-all duration-200 ease-linear">
                  wikipedia
                </a>
              </Link>
            </div>
          )}

          {/* MANUFACTURERS */}
          <div className="py-4">
            <h2 className="text-2xl font-bold">MANUFACTURERS:</h2>
            <ul>
              {mission.manufacturers?.map((manufacturer) => (
                <li key={manufacturer}>{manufacturer}</li>
              ))}
            </ul>
          </div>

          {/* PAYLOADS */}
          {mission.payloads && ( // only show when there are any payloads
            <div className="pt-4">
              <h2 className="text-2xl font-bold">
                {mission.payloads?.length > 1 ? 'PAYLOADS' : 'PAYLOAD'}:
              </h2>
              total of {mission.payloads.length} payloads
              {mission.payloads.map(
                (payload, index) =>
                  payload && ( // some payloads can be null
                    <div className={`flex my-10`} key={index}>
                      <div
                        className={`text-white max-w-7xl w-full backdrop-blur-sm backdrop-filter rounded-sm border-b border-gray-200`}
                      >
                        {/* TABLE */}
                        <div className="flex flex-col text-white font-medium divide-y divide-gray-500 w-full ">
                          <Row
                            title="manufacturer"
                            value={payload?.manufacturer ?? ''}
                          />
                          <Row
                            title="nationality"
                            value={payload?.nationality ?? ''}
                          />
                          <Row
                            title="type"
                            value={payload?.payload_type ?? ''}
                          />
                          <div className="flex justify-between items-center py-3 text-xs font-bold">
                            <span>PAYLOAD</span>
                            <span>
                              <CountUp
                                start={0}
                                end={payload?.payload_mass_kg ?? 0}
                                duration={1}
                                separator=" "
                                decimals={2}
                                decimal="."
                                suffix={` KG`}
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="w-full hidden md:block" />
                    </div>
                  )
              )}
            </div>
          )}
        </motion.div>
        <div className="flex justify-between mt-16" />
      </StarmanScreen>
    </Layout>
  )
}

export const getServerSideProps = async (context: NextPageContext) => {
  const { data }: { data: MissionQuery } = await client.query({
    variables: {
      id: context.query.id
    },
    query: MissionDocument
  })

  return {
    props: {
      mission: data.mission
    }
  }
}

export default Mission
