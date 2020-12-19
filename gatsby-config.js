/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Portfolio`,
    author: `Evan Valmassoi`,
    firstName: `Evan`,
    lastName: `Valmassoi`,
    email: `evan.valmassoi@gmail.com`,
    description: `Evan Valmassoi's personal site`,
    occupation: `Software Engineer`,
    keywords: [`Evan`, `Valmassoi`, `Personal`, `Resume`, `Projects`, `Work`],
    siteUrl:
      process.env.URL || process.env.DEPLOY_URL || `http://localhost:8000`,
    unemployed: true,
    designations: [`Code Explorer`, `Music Nerd`],
    moviesList: [
      {
        title: `Arrival`,
        author: `Denis Villeneuve`,
        link: `https://www.imdb.com/title/tt2543164/`,
        image: `../../icons/arrival.jpg`,
      },
      {
        title: `Interstellar`,
        author: `Christopher Nolan`,
        link: `https://www.imdb.com/title/tt0816692/`,
        image: `../../icons/Kevin-Dart-Interstellar.jpg`,
      },
      {
        title: `The Grand Budapest Hotel`,
        author: `Wes Anderson`,
        link: `https://www.imdb.com/title/tt2278388/`,
        image: `../../icons/GBH.jpg`,
      },
    ],
    showsList: [
      {
        title: `The Mandalorian`,
        author: `Jon Favreau`,
        link: `https://www.imdb.com/title/tt8111088/`,
        image: `../../icons/mando.jpg`,
      },
      {
        title: `The Boys`,
        author: `Eric Kripke`,
        link: `https://www.imdb.com/title/tt1190634/`,
        image: `../../icons/Homelander.jpg`,
      },
      {
        title: `Star Trek: The Next Generation`,
        author: `Gene Roddenberry`,
        link: `https://www.imdb.com/title/tt0092455/`,
        image: `../../icons/tng.jpg`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-preload-link-crossorigin`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Evan Valmassoi's Personal Site`,
        short_name: `E.Valmassoi`,
        description: `This is my personal site.`,
        start_url: `/`,
        background_color: `#D8DEE9`,
        theme_color: `#D8DEE9`,
        display: `standalone`,
        icon: `${__dirname}/static/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Raleway:300,400"],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: true,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
  ],
}
