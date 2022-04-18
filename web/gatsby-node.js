const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const productTemplate = path.resolve(`./src/templates/product-template.js`)
  const categoryTemplate = path.resolve(`./src/templates/category-template.js`)

  // Get all markdown blog posts sorted by date
  const resultCategories = await graphql(
    `
    {
      allStrapiCategories(filter: {page: {name: {eq: "${process.env.STRAPI_PAGE}"}}}) {
        nodes {
          title
          slug
          page {
            name
          }
        }
      }
    }
    `
  )
  if (resultCategories.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      resultCategories.errors
    )
    return
  }
  const categories = resultCategories.data.allStrapiCategories.nodes;
  if (categories.length > 0) {
    categories.forEach((category) => {
      createPage({
        path: category.slug,
        component: categoryTemplate,
        context: {
          slug: category.slug,
          page: category.page.name
        },
      })
    })
  }

  const resultProducts = await graphql(
    `
    {
      allStrapiProducts(filter: {pages: {elemMatch: {name: {eq: "${process.env.STRAPI_PAGE}"}}}}) {
        nodes {
          slug 
          categories {
            name
          }
        }
      }
    }
    `
  )
  if (resultProducts.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      resultProducts.errors
    )
    return
  }

  const products = resultProducts.data.allStrapiProducts.nodes;
  if (products.length > 0) {
    products.forEach((product) => {
      createPage({
        path: product.slug,
        component: productTemplate,
        context: {
          slug: product.slug,
          mainCategory: product.categories[0].name
        },
      })
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js
}
