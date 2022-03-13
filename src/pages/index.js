import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HomepageCarrousel from "../components/homepage-carrousel"

const Index = () => {
  return (
    <Layout location={'title'} title={'title'}>
      <Seo title="All posts" />
      <HomepageCarrousel />
      <p>THIS IS HOMEPAGE</p>
    </Layout>
  )
}

export default Index

