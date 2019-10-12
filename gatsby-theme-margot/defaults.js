const { get } = require('lodash')

const defaults = {
  pathPrefix: '/margot',
  title: 'Margot',
  description: `A Gatsby theme by @brettinternet`,
  /**
   * https://www.gatsbyjs.org/packages/gatsby-plugin-page-creator/
   */
  pageCreatorIgnore: {},
  menuLinks: [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "RSVP",
      to: '/rsvp/'
    },
    {
      name: "Registry",
      to: "/registry/",
    },
    {
      name: "Photos",
      to: "/photos/",
    },
    {
      name: "Details",
      to: "/details/",
    },
  ],
  eventDetails: {
    instructions: `Turn left at the fire hydrant. You can't miss it.`,
    date: 'December 1st',
    address: 'Liberty Park<br>Salt Lake City, UT',
    /**
     * https://console.cloud.google.com/
     */
    googleMapsApiKey: '',
    coordinates: {
      lat: 40.7765868,
      lng: -111.9905241
    }
  },
  rsvpDetails: {
    note: `We <em>love</em> your kids, but this will be an <u>adults only</u> event. We appreciate your understanding!`,
    /**
     * View: https://docs.google.com/spreadsheets/d/1UTNY23iZYWyiEG8BvpdChaI1TQvjjt9jXIVO5x-fG1g/edit?usp=sharing
     */
    googleSheetsScriptUrl: 'https://script.google.com/macros/s/AKfycbw-QJcZxnNzposHKI0tmcqzFug8ioNm9Do-zmZvr-c7-d5w78I/exec'
  },
  registries: [
    {
      name: 'amazon',
      href: 'https://amazon.com',
    },
    {
      name: 'anthropologie',
      href: 'https://www.anthropologie.com',
    },
    {
      name: 'target',
      href: 'https://www.target.com/',
    },
    {
      name: 'crate-and-barrel',
      href: 'https://crateandbarrel.com'
    },
    {
      name: 'bed-bath-and-beyond',
      href: '',
    },
    {
      name: 'etsy',
      href: '#',
    },
    {
      name: 'kohls',
      href: '#',
    },
    {
      name: 'macys',
      href: '#',
    },
    {
      name: 'newlywish',
      href: '#',
    },
    {
      name: 'pottery-barn',
      href: '#',
    },
    {
      name: 'rei',
      href: '#',
    },
    {
      name: 'sears',
      href: '#',
    },
    {
      name: 'jcpenny',
      href: '#',
    },
    {
      name: 'the-container-store',
      href: '#',
    },
    {
      name: 'williams-sonoma',
      href: '#',
    },
    {
      name: 'west-elm',
      href: '#',
    },
  ],
}

module.exports = (options) => Object.assign({}, options, {
  pathPrefix: useDefault(options, 'pathPrefix'),
  title: useDefault(options, 'title'),
  description: useDefault(options, 'description'),
  menuLinks: prefixMenuLinks(options, useDefault(options, 'menuLinks')),
  eventDetails: useDefault(options, 'eventDetails'),
  rsvpDetails: useDefault(options, 'rsvpDetails'),
  registries: useDefault(options, 'registries'),
  pageCreatorIgnore: useDefault(options, 'pageCreatorIgnore'),
})

function useDefault(options, key) {
  const value = get(options, key)
  return value === undefined ? get(defaults, key) : useFalsyEmptyString(value)
}

function useFalsyEmptyString(value) {
  return value || ''
}

function prefixMenuLinks(options, links) {
  if (options.themePathPrefix) {
    return links.map(link => Object.assign({}, link, { to: `/${ options.themePathPrefix }${ link.to }` }))
  }
  return links
}