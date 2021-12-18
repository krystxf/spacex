import Button from '@components/UI/Button'
import { Maybe } from 'graphql/jsutils/Maybe'
import moment from 'moment'
import Link from 'next/link'
import Row from './Row'
import LaunchTableRow from './Row'

type LaunchTableProps = {
  launch: {
    details?: Maybe<string>
    id?: Maybe<string>
    static_fire_date_utc?: any
    launch_date_utc?: any
    rocket?: Maybe<{
      rocket_name?: Maybe<string>
    }>
    mission_name?: Maybe<string>
    mission_id: Maybe<string[]> | undefined
  };
  hideMission?: boolean
}

const LaunchTable: React.FC<LaunchTableProps> = ({ launch, hideMission }) => {
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

  const missionId = launch?.mission_id ? launch.mission_id[0] : undefined

  return (
    <>
      <div className="flex flex-col text-white font-medium divide-y divide-gray-500 max-w-md w-full ">
        <LaunchTableRow
          title="Rocket"
          value={launch.rocket?.rocket_name ?? 'unknown'}
        />
        {hideMission !== true && (
          <Row
            title="mission"
            value={missionId ? <Link href={`/missions/${missionId}`}>{launch.mission_name ?? ""}</Link> : <span>{launch.mission_name ?? ""}</span>}
          />
        )}

        <Row
          title={
            // if launch is in past, return planned, bcs we don't have launch date yet
            new Date(launch.launch_date_utc) < new Date()
              ? 'planned launch date'
              : 'launch date'
          }

          value={<abbr title={new Date(launch.launch_date_utc) < new Date() ? moment(plannedLaunch).fromNow() : undefined}>{plannedLaunch}</abbr>}
        />
        {plannedLaunch !== actualLaunch && ( // show actual launch date only if it differs from planned
          <Row
            title="launch date" value={<abbr title={new Date(actualLaunch) < new Date() ? moment(actualLaunch).fromNow() : undefined}> {actualLaunch}</abbr>}


          />
        )}
        {launch.details && (
          <div>
            <div className="py-3 text-xs font-bold text-white">DESCRIPTION</div>
            <p className="font-normal text-xs ">{launch.details}</p>
          </div>
        )}
      </div>
      <span className="mt-12 w-full max-w-md flex justify-center">
        <Link href={`/launches/${launch.id}`} passHref>
          <a>
            <Button>SHOW DETAIL</Button>
          </a>
        </Link>
      </span>
    </>
  )
}

export default LaunchTable
