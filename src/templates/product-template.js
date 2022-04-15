import * as React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Layout from "../components/layout";
import ProductBreadcrumb from "../components/product-breadcrumb";
import ProductSlideshow from "../components/product-slideshow";

const ProductTemplate = ({ data }) => {
  const product = data.strapiProducts;
  const pageDescription = data.strapiPages;

  const { name, description, link, price, gallery_big, gallery_small, meta_ogg, short_description, categories } = product;

  return (
    <Layout location={'title'} title={'title'} pageName={pageDescription.title}>
      <div className="py-6">
        <ProductBreadcrumb categoryName={categories[0].title} categoryLink={categories[0].slug} productName={name} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <ProductSlideshow gallerySmall={gallery_small} galleryBig={gallery_big} />
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">{product.name}</h2>

              <div className="flex items-center space-x-4 my-4">
                <div>
                  <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                    <span className="font-bold text-indigo-600 text-3xl">{price}</span>
                    <span className="text-indigo-400 mr-1 mt-1">€</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-green-500 text-xl font-semibold">Save 12%</p>
                  <p className="text-gray-400 text-sm">Inclusive of all Taxes.</p>
                </div>
              </div>
              <ReactMarkdown className='markdownBlock' children={short_description} remarkPlugins={[remarkGfm]} />

              <div className="flex py-4 space-x-4">
                <a className="px-6 py-4 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white" href={link} title={`Ir a ${link}`} target="_blank" rel="noreferrer">Comprar</a>
              </div>
            </div>
          </div>
        </div>
        <section>
          <ReactMarkdown className='markdownBlock' children={description} remarkPlugins={[remarkGfm]} />
        </section>
      </div >
    </Layout >
  )
}

export default ProductTemplate

export const pageQuery = graphql`
  query ProductByUid(
    $slug: String!
    $strapiPage: String
  ) {
    strapiProducts(slug: { eq: $slug }) {
      name
      price
      description
      short_description
      link
      gallery_big {
        localFile {
          publicURL
        }
      }
      gallery_small {
        localFile {
          publicURL
        }
      }
      meta_ogg {
        localFile {
          publicURL
        }
      }
      categories {
        title
        slug
      }
    }
    strapiPages(name: {eq: $strapiPage}) {
      description
      title
      color
    }
  }
`
