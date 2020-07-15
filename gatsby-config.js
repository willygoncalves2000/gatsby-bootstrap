/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Gatsby-Bootstrap",
    description: "This is the description of our website",
    keywords: "gatsby, gatsbyjs project, gatsby bootstrap",
    image: '/static/gatsby.jpeg',
    url: "https://gatsbyjs.org/"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`
    },
    {
      resolve : `gatsby-source-wordpress`, options:{
        baseUrl: `practice.codingsrc.com`,
        protocol: `https`,
        hostingWPCOM: false,
      }
    },
    `gatsby-plugin-react-helmet`
  ],
}

/**
 *    <Helmet>
        <title>Gatsby Bootstrap Wordpress Souced</title>
        <meta name="description" content="This is the description of our website" />
        <meta name="keywords" contetn="gatsby, gatsbyjs project, gatsby bootstrap" />
        <meta name="robots" content="index,follow"></meta>
      </Helmet>
 */