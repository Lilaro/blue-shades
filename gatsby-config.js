require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Blue Shades`,
    description: `Blue Shades Website`,
    author: `Lisa LaRochelle`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/waffle-favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `blueshadescoffeewaffles`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-google-places`,
      options: {
        placeId: 'ChIJr4dJcI4G5IkR_MZCE-1o-RQ',
        apiKey: process.env.GATSBY_PLACES_API_KEY
      }
    },
  ],
}
