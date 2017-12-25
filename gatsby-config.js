module.exports = {
  siteMetadata: {
    title: `Hans-Kristian Koren`
  },
  plugins: [
    `gatsby-plugin-glamor`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-17229082-4'
      }
    }
  ]
};
