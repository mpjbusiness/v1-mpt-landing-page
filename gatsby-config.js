module.exports = {
    plugins: [
      {
        resolve: 'gatsby-plugin-manifest',
        options: {
            name: `GatsbyJS`,
            short_name: `GatsbyJS`,
            start_url: `/`,
            display: `standalone`,
            icon: 'src/images/MPTSmallLeafIcon.png',
        },
      },
    ],
  };