type Mission = {
  id: string;
  description: string;
  manufacturers: Array<string>;
  name: string;
  payloads: Array<{ payload_mass_kg?: number | null } | null>;
};

export default Mission;
