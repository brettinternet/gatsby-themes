const defaults = {
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
      name: "Details",
      to: "/details/",
    },
    {
      name: "Registry",
      to: "/registry/",
    },
    {
      name: "Photos",
      to: "/photos/",
    },
  ],
  eventDetails: {
    title: 'Join Us',
    description: `<div>
<p>Adaptogen vape narwhal direct trade lumbersexual twee woke brooklyn polaroid iPhone la croix. Before they sold out hella hashtag enamel pin, keffiyeh coloring book yuccie irony marfa tumeric art party air plant portland. Jianbing helvetica chillwave affogato palo santo. Retro kickstarter iPhone chillwave, forage kombucha church-key lomo celiac cred jianbing chartreuse.</p>
<p>Offal before they sold out franzen master cleanse tacos ugh activated charcoal lyft shoreditch wolf bitters. Disrupt etsy sriracha, post-ironic shabby chic pop-up lyft VHS cliche franzen. Fingerstache listicle knausgaard banh mi, messenger bag mustache cronut vice. Taiyaki pitchfork organic hexagon, health goth echo park freegan.</p>
<p>Trust fund gluten-free stumptown biodiesel try-hard chartreuse woke activated charcoal cold-pressed church-key +1 small batch helvetica occupy. Readymade actually unicorn raw denim shabby chic. Quinoa meh blue bottle thundercats irony pabst flexitarian gentrify asymmetrical letterpress, authentic pinterest austin everyday carry deep v. Microdosing wayfarers keytar truffaut cray kombucha, normcore kickstarter salvia. Slow-carb ramps cloud bread, pop-up lumbersexual scenester humblebrag church-key paleo forage green juice. Craft beer semiotics lumbersexual single-origin coffee mustache. Put a bird on it flannel locavore gentrify selfies snackwave live-edge truffaut freegan hell of brooklyn air plant.</p>
</div>`,
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
  layoutPath: `${ __dirname }/src/components/Layout.jsx`,
  imagesPath: `${ __dirname }/content/images`,
}

module.exports = (options) => Object.assign({}, options, {
  title: useDefault(options, 'title'),
  description: useDefault(options, 'description'),
  menuLinks: useDefault(options, 'menuLinks'),
  eventDetails: useDefault(options, 'eventDetails'),
  rsvpDetails: useDefault(options, 'rsvpDetails'),
  registries: useDefault(options, 'registries'),
  pageCreatorIgnore: useDefault(options, 'pageCreatorIgnore'),
  layoutPath: useDefault(options, 'layoutPath'),
  imagesPath: useDefault(options, 'imagesPath'),
})

function useDefault(options, key) {
  const value = options[key]
  return value === undefined ? defaults[key] : useFalsyEmptyString(value)
}

function useFalsyEmptyString(value) {
  return value || ''
}