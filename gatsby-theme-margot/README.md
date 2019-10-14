### Margo

This is a minimal site designed to display details for an event, an event location or images.

[Margot theme demo](https://brettinternet.github.io/gatsby-themes/margot/)

#### Features

- Images with a minimal lightbox
- Registry details for relevant events (e.g. weddings)
- Google map to demonstrate an event location [generate maps api key via google console](https://console.cloud.google.com/)
- Form input with Google Sheets as a database of responses [view responses](https://docs.google.com/spreadsheets/d/1UTNY23iZYWyiEG8BvpdChaI1TQvjjt9jXIVO5x-fG1g/edit?usp=sharing)

#### Usage

Add the theme in the plugins array.

```js
module.exports = {
  siteMetadata: {
    title: "My Themed Gatsby App",
  },
  plugins: [
    {
      resolve: `gatsby-theme-margot`,
      options: {
        // options
      },
    },
  ],
}
```

#### Options

There are two ways to pass options to the theme.

##### 1. Pass options into options object of the theme plugin

```js
{
  resolve: `gatsby-theme-margot`,
  options: {
    title: 'My site',
  },
},
```

##### 2. Set values in your `gatsby-config.js` as `SiteMetadata`

```js
siteMetadata: {
  title: 'My other site',
  eventDetails: {
    description: undefined,
  }
},
```

##### Example options

Set fields to `undefined` to remove the default values. The defaults are there to demonstrate usage.

```js
{
  title: 'Margot',
  description: `A Gatsby theme by @brettinternet`,
  /**
   * https://www.gatsbyjs.org/packages/gatsby-plugin-page-creator/#ignoring-specific-files
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
     * Demo map is displayed when `googleMapsApiKey` is an empty string
     * Set to null to remove the map
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
    googleSheetsScriptUrl: 'https://script.google.com/macros/s/...'
  },
  registries: [
    {
      name: 'amazon',
      href: 'https://amazon.com',
    },
  ],
  /**
   * You can override these with shadowing or by specifying the pathname here
   */
  layoutPath: './src/components/Layout.jsx',
  imagesPath: '${__dirname}/content/images', // resolves to `gatsby-theme-margot/content/images`
}
``
```
