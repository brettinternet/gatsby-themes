const breakpointList = ["40em", "52em", "64em", "80em"]
const space = [
  0, 4, 8, 16, 32, 64
]

export const breakpoints = {
  sm: breakpointList[0],
  md: breakpointList[1],
  lg: breakpointList[2],
  xl: breakpointList[3],
}

const font = {
  families: {
    SANS_SERIF: '"Lato", "Source Sans Pro", Tahoma, Arial, sans-serif',
    MONO:
      '"SFMono-Regular", Consolas, "Roboto Mono", "Droid Sans Mono", "Liberation Mono", Menlo, Courier, monospace',
  },
  weights: {
    LIGHT: 300,
    MEDIUM: 400,
    BOLD: 900,
  }
}

const colors = {
  lightGray: "#eaeaea",
}

export default {
  breakpoints: breakpointList,
  fonts: {
    body: font.families.SANS_SERIF,
    heading: font.families.SANS_SERIF,
    monospace: font.families.MONO,
  },
  fontWeights: {
    body: font.weights.LIGHT,
    heading: font.weights.LIGHT,
    bold: font.weights.BOLD,
  },
  lineHeights: {
    body: 1.2,
    heading: 1.2,
  },
  colors,
  space,
  appWidth: 960,
}
