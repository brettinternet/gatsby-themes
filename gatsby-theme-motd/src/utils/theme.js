import { statusLevels } from '../components/Motd'

export default {
  appWidth: 960,
  colors: {
    linkHover: 'blue',
    [statusLevels.SUCCESS]: {
      color: 'darkgreen',
      bg: '#d2e9af',
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
      color: 'maroon',
      bg: '#eddcdc',
    },
    [statusLevels.NEUTRAL]: {
      color: 'black',
      bg: 'lightgray',
    },
  },
  fonts: {
    heading: 'Roboto, Verdana, Helvetica, Arial, sans-serif',
    body: 'Roboto, Verdana, Helvetica, Arial, sans-serif',
  }
}