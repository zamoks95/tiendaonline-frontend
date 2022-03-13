import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Index = () => {
  return (
    <Layout location={'title'} title={'title'}>
      <Seo title="All posts" />
    </Layout>
  )
}

export default Index

