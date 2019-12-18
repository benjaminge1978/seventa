require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    contactEmail: `info@seventa.co.uk`,
    contactPhone: `1202 237 433`,
    offices: [
      {
        location: `Bournemouth`,
        addresse: ['Seventa Events, 543 Wallisdown Rd,', 'Bournemouth, BH12 5AD'],
      },
      {
        location: `London`,
        addresse: ['The Dock, Tobacco Quay,', 'Wapping Lane, London, E1W 2SF'],
      },
    ],
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: `${__dirname}/src/images` // See below to configure properly
        }
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `4nlw2v6q7d79`,
        accessToken: `S6JYtIOcEbNXZNjWbxeNt2Jow1h3tpL8MzGGlBx01hQ`,
      },
    },
    `@contentful/gatsby-transformer-contentful-richtext`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
