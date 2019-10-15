const withDefaults = require('./defaults')

const isProd = process.env.NODE_ENV === 'production'

module.exports = (options) => {
  const {
    motdsPath,
    motdComponentPath,
  } = withDefaults(options)

  return {
    siteMetadata: {
      motdsPath,
    },
    plugins: [
      {
        resolve: 'gatsby-plugin-styled-components',
        options: {
          displayName: !isProd,
        }
      },
      {
        resolve: 'gatsby-plugin-layout',
        options: {
          component: require.resolve(motdComponentPath)
        }
      }
    ]
  }
}