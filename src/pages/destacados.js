import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSingle from "../components/hero-single"
import CategoryGrid from "../components/category-grid"

const Destacados = ({ data }) => {
  const pageDescription = data.strapiPages;
  const categories = data.allStrapiCategories.nodes

  return (
    <Layout location={'Buscador'} title={'Buscador'} pageName={pageDescription.title}>
      <Seo title="Buscador" />
      <HeroSingle title="PRODUCTOS DESTACADOS" subtitle="Aquí encontrarás todas los productos destacados" />
      <CategoryGrid categories={categories} />
    </Layout >
  )
}

export const pageQuery = graphql`
  query Destacados(
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
export default Destacados

