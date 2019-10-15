import { statusLevels } from '../components/Motd'

export default {
  appWidth: 960,
  colors: {
    linkHover: 'blue',
    [statusLevels.SUCCESS]: {
      color: 'darkgreen',
      bg: 'lightgreen',
    },
    [statusLevels.INFO]: {
      color: 'darkblue',
      bg: 'lightblue',
    },
    [statusLevels.WARNING]: {
      color: 'darkyellow',
      bg: 'lightyellow',
    },
    [statusLevels.ERROR]: {
      color: 'darkred',
      bg: 'lightred',
    },
    [statusLevels.NEUTRAL]: {
      color: 'darkgray',
      bg: 'lightgray',
    },
  },
}