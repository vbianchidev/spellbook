import { faBolt, faBookMedical, faChain, faCloudBolt, faDroplet, faFire, faFlask, faSkull, faSnowflake, faSun } from '@fortawesome/free-solid-svg-icons'

const IconsElements = {
  necromancy: {
    icon: faSkull,
    color: '#324376'
  },
  fire: {
    icon: faFire,
    color: '#FF6700'
  },
  water: {
    icon: faDroplet,
    color: "#2541B2"
  },
  ice: {
    icon: faSnowflake,
    color: "#06BEE1"
  },
  lighting: faBolt,
  thunder: faCloudBolt,
  poison: faFlask,
  radiant: faSun,
  healing: faBookMedical,

  control: {
    icon: faChain
  }
}

export const Icons = {
  elements: IconsElements
}