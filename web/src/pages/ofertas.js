import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSingle from "../components/hero-single"
import ProductGrid from "../components/product-grid"

const Ofertas = ({ data }) => {
  const pageDescription = data.strapiPages;
  const products = data.allStrapiProducts.edges.map(({ node }) => node);
  const discountedProducts = products.filter(({ price_discount }) => price_discount !== null);

  return (
    <Layout location={'Buscador'} title={'Buscador'} pageName={pageDescription.title}>
      <Seo title="Buscador" />
      <HeroSingle title="OFERTAS" subtitle="Aquí encontrarás todas los productos en oferta" />
      <ProductGrid products={discountedProducts} />
    </Layout >
  )
}

export const pageQuery = graphql`
  query Ofertas(
    $strapiPage: String
  ) {
    allStrapiProducts(
      filter: {pages: {elemMatch: {name: {eq: $strapiPage}}}}
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
export default Ofertas

