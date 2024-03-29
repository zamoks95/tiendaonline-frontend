import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { useFlexSearch } from 'react-use-flexsearch';
import ProductGrid from "../components/product-grid"
import queryString from 'query-string'


const Buscador = ({ data, location }) => {
  const { index, store } = data.localSearchProducts;
  const pageDescription = data.strapiPages;
  const { search } = queryString.parse(location.search);
  const [query, setQuery] = useState(search ?? '')
  const results = useFlexSearch(query, index, store)

  return (
    <Layout location={'Buscador'} title={'Buscador'} pageName={pageDescription.title}>
      <Seo title="Buscador" />
      <section>
        <header className="text-center pb-8">
          <h1 className='text-4xl tracking-tight font-extrabold text-gray-900  mb-4'>BUSCADOR DE PRODUCTOS</h1>
          <p className='text-xl text-gray-800 mb-4'>Introduce tu búsqueda en el campo inferior para encontrar un producto</p>
        </header>
        <input
          type="search"
          onChange={(event) => setQuery(event.target.value)}
          className="block w-full md:w-1/3 mx-auto px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          value={query}
          placeholder="Type query"
        />
      </section>
      <ProductGrid products={results} />
    </Layout >
  )
}

export const pageQuery = graphql`
  query SearchQuery(
    $strapiPage: String
  )  {
    localSearchProducts {
      index
      store
    }
    strapiPages(name: {eq: $strapiPage}) {
      description
      title
      color
    }
  }
`
export default Buscador

