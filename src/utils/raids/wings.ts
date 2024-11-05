import wingMechanicsData from './wing-mechanics.json';

interface Mechanic {
  name: string;
}

interface Boss {
  mechanics: Mechanic[];
}

interface Wing {
  [boss: string]: Boss;
}

interface WingMechanics {
  [wing: string]: Wing;
}

const wingMechanics: WingMechanics = wingMechanicsData;

export default wingMechanics;