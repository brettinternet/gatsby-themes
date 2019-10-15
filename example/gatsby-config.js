const themes = require('../themes')
const useSelectedThemes = themes.filter(theme => theme.options && theme.options.example)
useSelectedThemes.forEach(theme => console.log(`> example/gatsby-config.js: Using ${ theme.resolve }`))

module.exports = {
  siteMetadata: {
    title: 'My Themed Gatsby App',
  },
  plugins: [
    ...useSelectedThemes,
  ],
}
