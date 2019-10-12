# Gatsby Themes

This is a playground for small sites that I create. I turn them into themes to reuse or for others to try.

[View demo](https://brettinternet.github.io/brettinternet/gatsby-themes)

## Setup

Gatsby theme development uses [yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces/).

```shell
gatsby new my-site https://github.com/brettinternet/gatsby-themes
cd my-site
yarn workspace example start
```

## Layout

```shell
.
├── README.md
├── example
│   ├── README.md
│   ├── gatsby-config.js
│   ├── package.json
│   └── src
├── gatsby-theme-margo
│   ├── README.md
│   ├── gatsby-config.js
│   ├── index.js
│   └── package.json
├── package.json
└── yarn.lock

```

### `gatsby-theme-""`

This directory is the theme package itself.

### `example`

This is an example usage of a theme. I've modified the example site's build so that it displays all of the themes, and prefixes each theme's pathname with the theme name. This wouldn't be done when you're extending just one theme.

- `example/`
  - `gatsby-config.js`: Specifies which theme to use and any other one-off config a site might need.
  - `src/`: Source code such as one-off pages or components that might live in a user's site.

## Extending

### Component Shadowing

Learn about [component shadowing](https://www.gatsbyjs.org/blog/2019-04-29-component-shadowing/) with Gatsby themes.

For example, if you wanted to overwrite the theme's footer, you could create a subdirectory at the root of your Gatsby project with the theme's name, and create your own `Footer.jsx`.

```sh
gatsby-theme-margot
└── src
    └── components
        └── Footer.jsx
```

## Themes

### Margo

This is a minimal site designed to display details for an event, an event location or images.

#### Features

- Images with a minimal lightbox
- Registry details for relevant events (e.g. weddings)
- Google map to demonstrate an event location [generate maps api key via google console](https://console.cloud.google.com/)
- Form input with Google Sheets as a database of responses [view responses](https://docs.google.com/spreadsheets/d/1UTNY23iZYWyiEG8BvpdChaI1TQvjjt9jXIVO5x-fG1g/edit?usp=sharing)
