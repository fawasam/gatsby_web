/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [ 
  'gatsby-transformer-remark',
  'gatsby-transformer-sharp',
  'gatsby-plugin-sharp',
    {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `projects`,
      path: `${__dirname}/src/projects/`,
    },
  },
    {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images/`,
    },
  },
],
  siteMetadata:{
    title:"fawas",
    desc:"portfolio",
    copyright:"This website is copyright 2021 fawasam",
    contact:'fawasama32@gmail.com'
  }
}
