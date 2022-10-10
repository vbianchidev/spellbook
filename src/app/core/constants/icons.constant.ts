import {
  faBolt,
  faBrain,
  faCloudBolt,
  faCut,
  faDroplet,
  faFire,
  faFlask,
  faGavel,
  faPen,
  faSkull,
  faSnowflake,
  faSun,
  faWind,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

import { RPGDamageType } from '../rules/rpg.rule';

interface IconElement {
  icon: IconDefinition;
  color: string;
}

const IconsElements: Record<RPGDamageType, IconElement> = {
  acid: {
    color: '#53A548',
    icon: faFlask,
  },
  cold: {
    color: '#55C1FF',
    icon: faSnowflake,
  },
  fire: {
    color: '#EB5E28',
    icon: faFire,
  },
  force: {
    color: '#A4BFEB',
    icon: faWind,
  },
  lightning: {
    color: '#FFD23F',
    icon: faBolt,
  },
  necrotic: {
    color: '#370031',
    icon: faSkull,
  },
  poison: {
    color: '#53A548',
    icon: faDroplet,
  },
  psychic: {
    color: '#6320EE',
    icon: faBrain,
  },
  radiant: {
    color: '#FFD23F',
    icon: faSun,
  },
  thunder: {
    color: '#173753',
    icon: faCloudBolt,
  },

  bludgeoning: {
    color: '#FF312E',
    icon: faGavel,
  },
  piercing: {
    color: '#FF312E',
    icon: faPen,
  },
  slashing: {
    color: '#FF312E',
    icon: faCut,
  },
};

export const Icons = {
  elements: IconsElements,
};
