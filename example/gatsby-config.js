const themes = require('./themes')

module.exports = {
  pathPrefix: '/gatsby-themes',
  siteMetadata: {
    title: 'Gatsby Themes',
    description: `This is a playground for small sites that I create. I turn them into themes to reuse or for others to try.`,
    /**
     * These options are for the demo, and aren't necessary
     * to add to a site that uses one of these themes.
     */
    themes,
  },
  plugins: [
    ...themes,
    /**
     * Demo specific
     */
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
