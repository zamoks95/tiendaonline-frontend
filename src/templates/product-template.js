import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout";
import ProductBreadcrumb from "../components/product-breadcrumb";
import ProductSlideshow from "../components/product-slideshow";

const ProductTemplate = ({ data }) => {
  const product = data.strapiProducts;

  console.log(product);

  return (
    <Layout>
      <div className="py-6">
        <ProductBreadcrumb categoryName={product.categories[0].title} categoryLink={product.categories[0].slug} productName={product.name} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <ProductSlideshow />
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">{product.name}</h2>
              <p className="text-gray-500 text-sm">By <a href="https://google.com" title="Google" className="text-indigo-600 hover:underline">ABC Company</a></p>

              <div className="flex items-center space-x-4 my-4">
                <div>
                  <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                    <span className="font-bold text-indigo-600 text-3xl">{product.price}</span>
                    <span className="text-indigo-400 mr-1 mt-1">€</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-green-500 text-xl font-semibold">Save 12%</p>
                  <p className="text-gray-400 text-sm">Inclusive of all Taxes.</p>
                </div>
              </div>

              <p className="text-gray-500">{product.description}</p>

              <div className="flex py-4 space-x-4">
                <a className="px-6 py-4 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white" href={product.link} title={`Ir a ${product.link}`} target="_blank" rel="noreferrer">Comprar</a>
              </div>
            </div>
          </div>
        </div>
      </div >
    </Layout >
  )
}

export default ProductTemplate

export const pageQuery = graphql`
  query ProductByUid(
    $slug: String!
  ) {
    strapiProducts(slug: { eq: $slug }) {
      name
      price
      description
      link
      image {
        localFile {
          publicURL
        }
      }
      categories {
        title
        slug
      }
    }
  }
`
