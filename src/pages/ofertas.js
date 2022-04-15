import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSingle from "../components/hero-single"
import CategoryGrid from "../components/category-grid"

const Ofertas = ({ data }) => {
  const pageDescription = data.strapiPages;
  const categories = data.allStrapiCategories.nodes

  return (
    <Layout location={'Buscador'} title={'Buscador'} pageName={pageDescription.title}>
      <Seo title="Buscador" />
      <HeroSingle title="OFERTAS" subtitle="Aquí encontrarás todas los productos en oferta" />
      <CategoryGrid categories={categories} />
    </Layout >
  )
}

export const pageQuery = graphql`
  query Ofertas(
    $strapiPage: String
  ) {
    allStrapiCategories(filter: {page: {name: {eq: $strapiPage}}}) {
      nodes {
        title
        slug
        image_thumbnail {
          localFile {
            publicURL
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

