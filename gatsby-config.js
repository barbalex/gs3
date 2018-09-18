module.exports = {
  siteMetadata: {
    title: 'Gabriel Software',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gabriel-Software',
        short_name: 'Gabriel',
        start_url: '/',
        background_color: '#145f00',
        theme_color: '#145f00',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    //'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
  ],
}
