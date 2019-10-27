const fs = require("fs")
const { execSync } = require("child_process")
const chalk = require("chalk")
const path = require("path")

class Log {
  info(...msgs) {
    console.log(
      chalk.white.bgBlue.bold("> prestart.js (info):") +
        " " +
        chalk.blue(msgs.join(" "))
    )
  }

  error(msg, err) {
    console.log(
      chalk.white.bgRed.bold(`> prestart.js (error):`) + " " + chalk.red(msg)
    )
    if (err) console.error(err)
  }
}

const logger = new Log()

const repoDir = path.join(__dirname, "..", "..")
const themes = require(path.join(repoDir, "themes"))
const examplePkg = require(path.join("..", "package.json"))

const themeVersion = "1.0.0"

for (let i = 0; i < themes.length; i++) {
  const theme = themes[i]
  const useExample = theme.options.example

  if (useExample && !examplePkg.dependencies[theme.resolve]) {
    /**
     * Yarn workspace install theme in case it doesn't already exist
     */
    try {
      logger.info(`Installing ${theme.resolve} to the build workspace`)
      execSync(`yarn workspace example add ${theme.resolve}@${themeVersion}`, {
        cwd: repoDir,
        stdio: "inherit",
      })
      logger.info(`Installed ${theme.resolve}`)
    } catch (err) {
      logger.error(`Unable to install ${theme.resolve}`)
      cleanupAll(
        themes.filter(
          _theme => _theme.options.example && _theme.resolve !== theme.resolve
        )
      )
      throw err
    }

    logger.info(`Prestart theme installation completed for ${theme.resolve}`)
  } else if (!useExample && examplePkg.dependencies[theme.resolve]) {
    cleanup(theme.resolve)
  }
}

// process.on("exit", () => {
//   themes.forEach(theme => cleanup(theme.resolve))
// })

function cleanupAll(themesToCleanup) {
  themesToCleanup.forEach(theme => cleanup(theme.resolve))
}

/**
 * Removing installed themes allows for cleaner
 * install on the next theme build
 *
 * Clean up gatsby files
 */
function cleanup(themeName) {
  if (themeName) {
    try {
      logger.info(`Removing ${themeName} from the example workspace`)
      execSync(`yarn workspace example remove ${themeName}`, {
        cwd: repoDir,
        stdio: "inherit",
      })
      logger.info(`Removed ${themeName}`)
    } catch (err) {
      logger.error(`Unable to remove ${themeName} from example workspace`, err)
    }
  }
}
