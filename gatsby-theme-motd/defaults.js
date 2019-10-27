const defaults = {
  motdComponentPath: `${__dirname}/src/components/Motd.jsx`,
  motdsPath: `${__dirname}/content/motds`,
  motdsUrl:
    "https://raw.githubusercontent.com/brettinternet/gatsby-themes/master/gatsby-theme-motd/content/motds.json",
  pageCreatorIgnore: {},
}

module.exports = options =>
  Object.assign({}, options, {
    motdComponentPath: useDefault(options, "motdComponentPath"),
    motdsPath: useDefault(options, "motdsPath"),
    motdsUrl: useDefault(options, "motdsUrl"),
    pageCreatorIgnore: useDefault(options, "pageCreatorIgnore"),
  })

function useDefault(options, key) {
  const value = options[key]
  return value === undefined ? defaults[key] : useFalsyEmptyString(value)
}

function useFalsyEmptyString(value) {
  return value || ""
}
