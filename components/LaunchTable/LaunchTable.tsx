import Button from '@components/UI/Button';
import Link from 'next/link';
import LaunchTableRow from './Row';

export type LaunchTableProps = { launch: any };

const LaunchTable: React.FC<LaunchTableProps> = ({ launch }) => {
  return (
    <>
      <div className="flex flex-col text-white font-medium divide-y divide-gray-500 max-w-md w-full ">
        <LaunchTableRow title="Rocket" value={launch.rocket.rocket.name} />
        <LaunchTableRow title="Mission" value={launch.mission_name} />
        <LaunchTableRow
          title="Launch date"
          value={
            // if launch is in past, return unknown date, bcs we don't have launch date yet
            new Date(launch.launch_date_utc) < new Date()
              ? 'unknown'
              : new Date(launch.launch_date_utc).toString()
          }
        />
        <div>
          <div className="py-3 text-xs font-bold text-white">DESCRIPTION</div>
          <p className="font-normal text-xs ">{launch.details}</p>
        </div>
      </div>
      <span className="mt-12 w-full max-w-md flex justify-center">
        <Link href={`/launches/${launch.id}`} passHref>
          <Button>SHOW DETAIL</Button>
        </Link>
      </span>
    </>
  );
};

export default LaunchTable;
