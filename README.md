# Gatsby Themes

[![Demo Build Status](https://travis-ci.org/brettinternet/gatsby-themes.svg?branch=master)](https://travis-ci.org/brettinternet/gatsby-themes)

This is a playground for small sites that I create. I turn them into [Gatsby themes](https://www.gatsbyjs.org/tutorial/building-a-theme/) to reuse or for others to try.

[View demo](https://brettinternet.github.io/gatsby-themes)

## Setup

[Gatsby theme development](https://www.gatsbyjs.org/blog/2019-05-22-setting-up-yarn-workspaces-for-theme-development/) uses [yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces/).

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

To override default options, set options to a "defined falsy" value, such as an empty string (`""`) or `null`. If it's `undefined`, the default value is used to demo the theme.

### Usage

- [Margot](./gatsby-theme-margot/README.md)
