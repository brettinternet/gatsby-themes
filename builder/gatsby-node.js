// const { plugins } = require('./gatsby-config')

// const theme = plugins[0]
// const themeName = theme.resolve
// const themeShortName = theme.options.themePathPrefix.split('/')[1]

// const replacePath = (path, prefix) => `/${ prefix }${ path }`

// exports.onCreatePage = ({ page, actions }) => {
//   const { createPage, deletePage } = actions
//   const oldPage = Object.assign({}, page)

//   /**
//    * Prefix theme page pathname with its name
//    */
//   if (page.component.includes(themeName)) {
//     page.path = replacePath(page.path, themeShortName)
//     if (page.path !== oldPage.path) {
//       deletePage(oldPage)
//       createPage(page)
//     }
//   }

// }