module.exports = {
    plugins: [
      {
        resolve: 'gatsby-plugin-manifest',
        options: {
            start_url: `/`,
            display: `standalone`,
            icon: 'src/images/MPTSmallLeafIcon.png',
        },
      },
    ],
  };