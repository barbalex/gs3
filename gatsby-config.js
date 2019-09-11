module.exports = {
  siteMetadata: {
    title: 'Gabriel Software',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|cache|public|docs)/,
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    'gatsby-plugin-react-helmet',
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
    'gatsby-plugin-styled-components',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-leaflet',
  ],
}
