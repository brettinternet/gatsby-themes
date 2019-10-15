const isProd = process.env.NODE_ENV === 'production'

let logger

if (isProd) {
  const emptyFunction = () => { }
  logger = {
    warn: emptyFunction,
    error: emptyFunction,
    info: emptyFunction,
    log: emptyFunction,
  }
} else {
  logger = console
}

export default logger