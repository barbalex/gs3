module.exports = {
  siteMetadata: {
    title: 'Gabriel Software',
    siteUrl: `https://gabriel-software.ch`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gabriel-Software',
        short_name: 'Gabriel',
        start_url: '/',
        background_color: '#145f00',
        theme_color: '#145f00',
        display: 'standalone',
        icon: 'src/images/favicon.png',
        include_favicon: true,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto', 'Roboto Mono'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: './src/utils/typography.js',
        omitGoogleFont: true,
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-leaflet',
    'gatsby-plugin-sitemap',
  ],
}
