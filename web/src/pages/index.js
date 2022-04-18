import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import HomeCategories from "../components/home-categories"
import HomeHeader from "../components/home-header"
import HomeFavorites from "../components/home-favorites/home-favorites"

const Index = ({ data }) => {
  const pageDescription = data.strapiPages;
  const products = data.allStrapiProducts.nodes;
  const categories = data.allStrapiCategories.edges;
  return (
    <Layout pageName={pageDescription.title}>
      <Seo title={`Tienda Online de ${pageDescription.title}`} description={pageDescription.meta_description} metaKeywords={pageDescription.meta_keywords} metaOgImage={pageDescription.ogg_image.localFile.publicURL} />
      <HomeHeader pageDescription={pageDescription} />
      <HomeCategories categories={categories} />
      <HomeFavorites products={products} />
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query Home(
    $strapiPage: String
  ) {
    allStrapiProducts(filter: {pages: {elemMatch: {name: {eq: $strapiPage}}}, featured: {eq: true}}, limit: 10) {
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
    allStrapiCategories(filter: {page: {name: {eq: $strapiPage}}}, limit: 3) {
      edges {
        node {
          slug
          title
          image_featured {
            localFile {
              publicURL
            }
          }
        }
      }
    }
    strapiPages(name: {eq: $strapiPage}) {
      title
      description
      meta_keywords
      meta_description
      main_image {
        localFile {
          publicURL
        }
      }
      ogg_image {
        localFile {
          publicURL
        }
      }
    }
  }
`

