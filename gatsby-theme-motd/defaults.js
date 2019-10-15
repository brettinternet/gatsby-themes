const defaults = {
  motdsPath: `${ __dirname }/content/motds`,
  motdComponentPath: `${ __dirname }/src/components/Motd.jsx`
}

module.exports = (options) => Object.assign({}, options, {
  motdsPath: useDefault(options, 'motdsPath'),
  motdComponentPath: useDefault(options, 'motdComponentPath'),
})

function useDefault(options, key) {
  const value = options[key]
  return value === undefined ? defaults[key] : useFalsyEmptyString(value)
}

function useFalsyEmptyString(value) {
  return value || ''
}