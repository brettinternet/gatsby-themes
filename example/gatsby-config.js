const themes = require('../themes')
const useSelectedThemes = themes.filter(theme => theme.options && theme.options.example)
useSelectedThemes.forEach(theme => console.log(`> example/gatsby-config.js: Using ${ theme.resolve }`))

module.exports = {
  siteMetadata: {
    title: 'My Themed Gatsby App',
  },
  plugins: [
    ...useSelectedThemes,
    /**
     * To avoid error: `Unknown type "ImageSharpSizes".`
     * Where `gatsby-transformer-sharp` is installed in
     * different workspace
     * @issue https://github.com/gatsbyjs/gatsby/issues/15625
     */
    `gatsby-transformer-sharp`,
  ],
}
