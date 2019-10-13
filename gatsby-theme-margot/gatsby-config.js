const withDefaults = require('./defaults')

const { NODE_ENV } = process.env
const isProd = NODE_ENV === 'production'

module.exports = (options) => {
  const {
    title,
    description,
    eventDetails,
    rsvpDetails,
    registries,
    menuLinks,
    pageCreatorIgnore,
    layoutPath,
    imagesPath,
  } = withDefaults(options)

  return {
    siteMetadata: {
      title,
      description,
      menuLinks,
      eventDetails,
      rsvpDetails,
      registries,
    },
    plugins: [
      /**
       * Theme plugin
       */
      {
        resolve: "gatsby-plugin-page-creator",
        options: {
          path: `${ __dirname }/src/pages`,
          ignore: pageCreatorIgnore,
        },
      },

      /**
       * Site plugins
       */
      `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: imagesPath,
        },
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
        resolve: "gatsby-plugin-root-import",
        options: {
          src: `${ __dirname }/src`,
          pages: `${ __dirname }/src/pages`,
          components: `${ __dirname }/src/components`,
          images: `${ __dirname }/src/images`,
          utils: `${ __dirname }/src/utils`,
        },
      },
      {
        resolve: `gatsby-plugin-styled-components`,
        options: {
          displayName: !isProd,
        }
      },
      {
        resolve: `gatsby-plugin-layout`,
        options: {
          component: require.resolve(layoutPath),
        },
      },
    ]
  }
}