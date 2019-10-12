const themes = require('./themes')

const themeNames = themes.map(theme => theme.resolve)
const themePagePrefixes = themes.map(theme => theme.resolve.split(`gatsby-theme-`)[1])

const replacePath = (path, prefix) => `/${ prefix }${ path }`

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  const oldPage = Object.assign({}, page)

  /**
   * Prefix theme pathnames with their name
   */
  themeNames.forEach((name, index) => {
    if (page.component.includes(name)) {
      page.path = replacePath(page.path, themePagePrefixes[index])
      if (page.path !== oldPage.path) {
        deletePage(oldPage)
        createPage(page)
      }
    }
  })

}