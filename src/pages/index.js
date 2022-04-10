import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import HomepageCarrousel from "../components/homepage-carrousel"
import HomeCategories from "../components/home-categories"
import HomeHeader from "../components/home-header"
import HomeFavorites from "../components/home-favorites/home-favorites"

const Index = ({ data }) => {
  const products = data.allStrapiProducts.nodes;
  return (
    <Layout location={'title'} title={'title'}>
      <Seo title="All posts" />
      {/* https://tailwindui.com/components/ecommerce/page-examples/storefront-pages */}

      <HomeHeader />
      <HomeCategories />
      <HomeFavorites products={products} />

    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query Home {
    allStrapiProducts {
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

