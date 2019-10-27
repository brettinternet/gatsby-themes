const withDefaults = require("./defaults")

const isProd = process.env.NODE_ENV === "production"

module.exports = options => {
  const {
    motdsPath,
    motdsUrl,
    motdComponentPath,
    demoPathPrefix,
    pageCreatorIgnore,
  } = withDefaults(options)

  return {
    siteMetadata: {
      motdsPath,
      motdsUrl,
    },
    plugins: [
      /**
       * Theme plugin
       */
      {
        resolve: "gatsby-plugin-page-creator",
        options: {
          path: `${__dirname}/src/pages`,
          ignore: pageCreatorIgnore,
        },
      },
      {
        resolve: "gatsby-plugin-styled-components",
        options: {
          displayName: !isProd,
        },
      },
      {
        resolve: "gatsby-plugin-layout",
        options: {
          component: require.resolve(motdComponentPath),
        },
      },
      /**
       * To avoid error: `Unknown type "ImageSharpSizes".`
       * Where `gatsby-transformer-sharp` is installed in
       * different workspace
       * @issue https://github.com/gatsbyjs/gatsby/issues/15625
       */
      ...(demoPathPrefix ? [`gatsby-transformer-sharp`] : []),
    ],
  }
}
