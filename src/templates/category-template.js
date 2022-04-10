import * as React from "react"
import { graphql } from "gatsby"
import HeroSingle from "../components/hero-single"
import Layout from "../components/layout"
import ProductGrid from "../components/product-grid"

const CategoryTemplate = ({ data }) => {
  const category = data.strapiCategories;
  const products = data.allStrapiProducts.nodes;
  return (
    <Layout>
      <HeroSingle title={category.title} subtitle={category.description} imageSrc={category.image.localFile.publicURL} />
      <ProductGrid products={products} />
    </Layout>
  )
}

export default CategoryTemplate

export const pageQuery = graphql`
  query CategoryByName(
    $slug: String!
    $page: String!
  ) {
    strapiCategories(slug: {eq: $slug}) {
      title
      description
      image {
        localFile {
          publicURL
        }
      }
    }
    allStrapiProducts(
      filter: {pages: {elemMatch: {name: {eq: $page}}}, categories: {elemMatch: {slug: {eq: $slug}}}}
    ) {
      nodes {
        name
        slug
        price
        price_discount
        image {
          localFile {
            publicURL
          }
        }
      }
    }
  }
`
