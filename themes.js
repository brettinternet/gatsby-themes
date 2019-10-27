/**
 * Set `example: true` to view in example workspace with `yarn start`
 *
 * Install theme to example workspace with:
 * `yarn workspace example add gatsby-theme-margot@1.0.0`
 *
 * remove themes from `example/package.json` that aren't used
 * in the example, or errors will likely throw
 */
module.exports = [
  {
    resolve: `gatsby-theme-margot`,
    options: {
      demoPathPrefix: "/margot",
      demoDescription:
        "Minimal theme for events with an RSVP form, event details, photo gallery and registry links.",
      example: true,
    },
  },
  {
    resolve: `gatsby-theme-motd`,
    options: {
      demoPathPrefix: "/motd",
      demoDescription: "A plugin to display a Message of the Day",
    },
  },
  {
    resolve: `gatsby-theme-reveal`,
    options: {
      demoPathPrefix: "/reveal",
      demoDescription:
        "Static presentations with Markdown + Reveal.js + GatsbyJS",
    },
  },
]
