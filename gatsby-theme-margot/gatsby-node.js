// // const config = require('./gatsby-config')

// // const replacePath = (path, prefix) => `/${ prefix }${ path }`

// /**
//  * Unable to start dev server with pathPrefix
//  * https://github.com/gatsbyjs/gatsby/issues/12379
//  * https://github.com/gatsbyjs/gatsby/issues/3721
//  */
// exports.createPages = async ({ graphql, page, actions }) => {
//   const { createPage, deletePage, createRedirect } = actions
//   const data = await graphql(
//     `
//       {
//         site {
//           siteMetadata {
//             themePathPrefix
//           }
//         }
//       }
//     `
//   )

//   console.log('result: ', result);

//   if (data.errors) {
//     reporter.panicOnBuild(`Error while running GraphQL query.`)
//     return
//   }

//   const { themePathPrefix } = data.site.siteMetadata
//   if (themePathPrefix) {
//     const oldPage = Object.assign({}, page)

//     /**
//      * Prefix theme pathnames with their name
//      */
//     themeNames.forEach((name, index) => {
//       if (page.component.includes(name)) {
//         page.path = replacePath(page.path, themePagePrefixes[index])
//         if (page.path !== oldPage.path) {
//           deletePage(oldPage)
//           createPage(page)
//         }
//       }
//     })
//   }


// }