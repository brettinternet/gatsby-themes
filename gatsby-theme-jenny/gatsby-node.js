exports.createPages = async ({ graphql, actions, reporter }, themeOptions) => {
  const { createPage } = actions
  const { basePath } = themeOptions

  createPage({
    path: basePath,
    component: require.resolve(`./src/templates/jennifer`),
    context: {},
  })
}