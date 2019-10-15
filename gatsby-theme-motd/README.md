# MOTD plugin

Display Messages of the Day on your site with this plugin theme. New MOTDs do not require a rebuild of the site. Instead, in my example I simply use a `raw.github.com` url to a json file in this repo (see `gatsby-theme-motd/content/motds.json`).

## Features

- Animated appearance of the MOTD
- Procrastinated load until all assets are painted in the view until MOTDs display
- Scheduled start and end display times

#### Icons

Icons are from [Feather](https://feathericons.com/).

## Options

```js
{
  motdsUrl: 'https://raw.githubusercontent.com/brettinternet/gatsby-themes/master/gatsby-theme-motd/content/motds.json',
}
```
