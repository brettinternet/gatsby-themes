const fs = require('fs')
const fse = require('fs-extra')
const { execSync } = require('child_process')
const path = require('path')
const chalk = require('chalk')

class Log {
  info(...msgs) {
    chalk.blue('> build.js (info): ') + chalk.white(msgs.join(' '))
  }

  error(...msgs) {
    chalk.red(`> build.js (error): ${ msgs.join(' ') }`)
  }
}

const logger = new Log()

const isPrefixPath = true
const repoDir = path.join(__dirname, '..')
const demoDir = path.join(__dirname, '..', 'demo')
const demoPublicDir = path.join(demoDir, 'public')
const themeGatsbyConfig = path.join(__dirname, 'gatsby-config.js')
const themes = require(path.join(repoDir, 'themes'))
const demoConfig = require(path.join(demoDir, 'gatsby-config'))
const { pathPrefix: demoPathPrefix } = demoConfig

const themeVersion = '1.0.0'

if (!fs.existsSync(demoDir)) {
  throw Error(`The Demo site must be built first with 'gatsby build'. The 'public' directory is the output path of this script.`)
}

for (let i = 0; i < themes.length; i++) {
  const theme = themes[i];
  const themeShortName = theme.options.demoPathPrefix.split('/')[1]

  /**
   * Yarn workspace install theme in case it doesn't already exist
   */
  try {
    logger.info(`Installing ${ theme.resolve } to the build workspace`)
    execSync(`yarn workspace builder add ${ theme.resolve }@${ themeVersion }`, {
      cwd: repoDir,
      stdio: 'inherit'
    })
    logger.info(`Installed ${ theme.resolve }`)
  } catch (err) {
    logger.error(`Unable to install ${ theme.resolve }`)
    cleanup()
    throw err
  }

  /**
   * Write `gatsby-config.js`
   */
  const configFileText = `module.exports = {
  pathPrefix: '${ demoPathPrefix }${ theme.options.demoPathPrefix }',
  plugins: [
    {
      resolve: '${ theme.resolve }',
      options: {
        demoPathPrefix: '${ theme.options.demoPathPrefix }'
      }
    }
  ],
};
`
  try {
    fs.writeFileSync(themeGatsbyConfig, configFileText)
    logger.info(`Wrote gatsby-config.js for ${ theme.resolve } to ${ themeGatsbyConfig }`)
  } catch (err) {
    logger.error(`Unable to create theme's gatsby-config.js`)
    cleanup(theme.resolve)
    throw err
  }

  /**
   * Build the workspace app
   */
  const buildThemeArgs = isPrefixPath ? ` --prefix-paths` : ''
  try {
    logger.info(`Building ${ theme.resolve }`)
    execSync(`yarn workspace builder build-theme${ buildThemeArgs }`, {
      cwd: repoDir,
      stdio: 'inherit'
    })
    logger.info(`Built ${ theme.resolve }`)
  } catch (err) {
    logger.error('Unable to build the theme')
    cleanup(theme.resolve)
    throw err
  }

  /**
   * Move `bin/build/public` to `demo/public${demoPathPrefix}`
   */
  const themePublicDir = path.join(demoPublicDir, themeShortName)
  try {
    fse.moveSync('public', themePublicDir, { overwrite: true })
    logger.info(`Moved build output to ${ themePublicDir }`)
  } catch (err) {
    logger.error(`Unable to move the theme's build output to the public demo folder`)
    cleanup(theme.resolve)
    throw err
  }

  /**
   * Clean up
   * 
   * `gatsby-config.js`
   */
  cleanup(theme.resolve)

  logger.info(`Build completed for ${ theme.resolve }`)
}

logger.info('Builds completed successfully')
process.exit()

/**
 * Removing installed themes allows for cleaner
 * install on the next theme build
 *  
 * Clean up gatsby files
 */
function cleanup(themeName) {
  if (themeName) {
    try {
      logger.info(`Removing ${ theme.resolve } from the build workspace`)
      execSync(`yarn workspace builder remove ${ themeName }`, {
        cwd: repoDir,
        stdio: 'inherit'
      })
      logger.info(`Removed ${ themeName }`)
    } catch (err) {
      logger.error(`Unable to remove ${ themeName } from builder workspace`)
    }
  }

  const cleanupFiles = [themeGatsbyConfig]
  logger.info(`Cleaning up files ${ cleanupFiles.join(', ') }`)
  cleanupFiles.forEach(cleanupFile => {
    fs.unlinkSync(cleanupFile)
  })

  const cleanupDirs = [path.join(__dirname, '.cache')]
  logger.info(`Cleaning up directories ${ cleanupDirs.join(', ') }`)
  cleanupDirs.forEach(cleanupDir => {
    fse.removeSync(cleanupDir)
  })
}