### Margo

This is a minimal site designed to display details for an event, an event location or images.

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
