import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import HeroSingle from "../components/hero-single"
import Seo from "../components/seo"
import CategoryGrid from "../components/category-grid"

const Categorias = ({ data }) => {
  const categories = data.allStrapiCategories.nodes
  const pageDescription = data.strapiPages;

  return (
    <Layout location={'Buscador'} title={'Buscador'} pageName={pageDescription.title}>
      <Seo title="Buscador" />
      <HeroSingle title="CATEGORÍAS" subtitle="Aquí encontrarás todas las categorías disponibles" />
      <CategoryGrid categories={categories} />
    </Layout >
  )
}

export const pageQuery = graphql`
  query MyQuery(
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
export default Categorias

