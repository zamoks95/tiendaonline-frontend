
module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Blog`,
    author: {
      name: `Kyle Mathews`,
      summary: `who lives and works in San Francisco building useful things.`,
    },
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://gatsbystarterblogsource.gatsbyjs.io/`,
    social: {
      twitter: `kylemathews`,
    },
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-global-context',
      options: {
        context: {
          strapiPage: process.env.STRAPI_PAGE
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GTAG,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://admin.tiendaonline.one`,
        queryLimit: 1000,
        collectionTypes: [`products`, `pages`, `categories`],
      },
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'products',
        engine: 'flexsearch',
        engineOptions: 'speed',
        query: `
          {
            allStrapiProducts {
              nodes {
                id
                name
                slug
                description
                image {
                  localFile {
                    publicURL
                  }
                }
              }
            }
          }
        `,
        ref: 'slug',
        index: ['name'],
        store: ['slug', 'name', 'image', 'price', 'price_discount'],
        normalizer: ({ data }) =>
          data.allStrapiProducts.nodes.map((node) => {
            return ({
              id: node.id,
              slug: node.slug,
              name: node.name,
              price: node.price,
              price_discount: node.price_discount,
              image: node.image
            })
          }),
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
