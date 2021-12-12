import Row from '@components/LaunchTable/Row';
import Button from '@components/UI/Button';
import Link from 'next/link';
import CountUp from 'react-countup';

const MissionTable = ({ mission }: { mission: any }) => {
  // convert manufacturers to string
  const manufacturers = mission.manufacturers.map(
    (manufacturer: string, index: number) =>
      `${index === 0 ? '' : ', '}${manufacturer}`
  );

  const totalPayload =
    mission.payloads
      .filter(
        (x: { payload_mass_kg: number | null } | null) =>
          x !== null && x.payload_mass_kg !== null
      ) // filter out nulls
      .map((payload: { payload_mass_kg: number }) => payload.payload_mass_kg)
      .reduce((a: number, b: number) => a + b, 0) ?? 0; // sum all numbers in array

  return (
    <div
      className={`text-white max-w-7xl w-full backdrop-blur-sm backdrop-filter rounded-sm`}
    >
      {/* MISSION NAME */}
      <h2 className="font-bold text-3xl">{mission.name.toUpperCase()}</h2>

      {/* TABLE */}
      <div className="flex flex-col text-white font-medium divide-y divide-gray-500 w-full ">
        <Row title="manufacturers" value={manufacturers} />
        <div className="flex justify-between items-center py-3 text-xs font-bold">
          <span>{'TOTAL PAYLOAD'}</span>
          <span>
            <CountUp
              start={0}
              end={totalPayload}
              duration={1}
              separator=" "
              decimals={2}
              decimal="."
              suffix={` KG`}
            />
          </span>
        </div>
        <div>
          <div className="py-3 text-xs font-bold text-white">DESCRIPTION</div>
          <p className="font-normal text-sm">{mission.description}</p>
        </div>
      </div>
      {/* BUTTON */}
      <span className="mt-12 w-full flex justify-center">
        <Link href={`/missions/${mission.id}`} passHref>
          <a>
            <Button>SHOW DETAIL</Button>
          </a>
        </Link>
      </span>
    </div>
  );
};

export default MissionTable;
