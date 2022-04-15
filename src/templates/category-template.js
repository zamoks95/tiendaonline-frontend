import * as React from "react"
import { graphql } from "gatsby"
import HeroSingle from "../components/hero-single"
import Layout from "../components/layout"
import ProductGrid from "../components/product-grid"

const CategoryTemplate = ({ data }) => {
  const category = data.strapiCategories;
  const products = data.allStrapiProducts.nodes;
  const pageDescription = data.strapiPages;
  return (
    <Layout location={'title'} title={'title'} pageName={pageDescription.title}>
      <HeroSingle title={category.title} subtitle={category.description} />
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
    strapiPages(name: {eq: $page}) {
      description
      title
      color
    }
  }
`
