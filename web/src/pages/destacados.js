import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSingle from "../components/hero-single"
import ProductGrid from "../components/product-grid"

const Destacados = ({ data }) => {
  const pageDescription = data.strapiPages;
  const products = data.allStrapiProducts.edges.map(({ node }) => node);

  return (
    <Layout pageName={pageDescription.title}>
      <Seo title={"Productos destacados"} description={'Encuentra todos los productos destacados de esta página web'} metaKeywords={'Productos Destacados'} />
      <HeroSingle title="PRODUCTOS DESTACADOS" subtitle="Aquí encontrarás todas los productos destacados" />
      <ProductGrid products={products} />
    </Layout >
  )
}

export const pageQuery = graphql`
  query Destacados(
    $strapiPage: String
  ) {
    allStrapiProducts(
      filter: {featured: {eq: true}, pages: {elemMatch: {name: {eq: $strapiPage}}}}
    ) {
      edges {
        node {
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
    strapiPages(name: {eq: $strapiPage}) {
      description
      title
      color
    }
  }

`
export default Destacados

