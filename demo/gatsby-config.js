const themes = require('./themes')
const { repository } = require('../package.json')

module.exports = {
  pathPrefix: '/gatsby-themes',
  siteMetadata: {
    title: 'Gatsby Themes',
    description: `This is a playground for small sites that I create. I turn them into themes to reuse or for others to try.`,
    repoUrl: repository.url,
    themes,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${ __dirname }/content/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
