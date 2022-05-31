
module.exports = {
  siteMetadata: {
    siteUrl: `${process.env.PAGE_URL}`,
  },
  plugins: [
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
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
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "GA-TRACKING_ID", process.env.GTAG
        ],
        pluginConfig: {
          head: true,
          anonymize_ip: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tienda online de ${process.env.STRAPI_PAGE}`,
        short_name: process.env.PAGE_URL,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4338ca`,
        display: `minimal-ui`,
        icon: `src/images/tiendaonline-icon.png`, // This path is relative to the root of the site.
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    `gatsby-plugin-offline`,
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
  ],
}
