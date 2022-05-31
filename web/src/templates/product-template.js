import * as React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import ReactMarkdown from 'react-markdown'
import useBreakpoint from 'use-breakpoint';
import { Autoplay, Pagination } from 'swiper';
import remarkGfm from 'remark-gfm'
import Layout from "../components/layout";
import ProductBreadcrumb from "../components/product-breadcrumb";
import ProductSlideshow from "../components/product-slideshow";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../components/home-favorites/home-favorites';
import ProductItem from '../components/product-item';


const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 }
const ProductTemplate = ({ data }) => {
  const product = data.strapiProducts;
  const pageDescription = data.strapiPages;
  const relatedProducts = data.allStrapiProducts.edges;

  const { breakpoint } = useBreakpoint(BREAKPOINTS, 'desktop');
  const sliderPerView = () => {
    switch (breakpoint) {
      case "desktop":
        return 4;
      case "tablet":
        return 2;
      default:
        return 1;
    }
  }

  const { name, description, link, price, price_discount, gallery_big, gallery_small, meta_ogg, keywords, short_description, categories } = product;

  return (
    <Layout location={'title'} title={'title'} pageName={pageDescription.title}>
      <Seo title={name} description={short_description} metaKeywords={keywords} metaOgImage={meta_ogg.localFile.publicURL} />
      <div className="py-6">
        <ProductBreadcrumb categoryName={categories[0].title} categoryLink={categories[0].slug} productName={name} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <ProductSlideshow gallerySmall={gallery_small} galleryBig={gallery_big} />
            </div>
            <div className="md:flex-1 px-4 mt-4 md:mt-0">
              <h1 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl">{product.name}</h1>
              <div className="flex items-center space-x-4 my-4">
                {price_discount !== null && (
                  <>
                    <span className="font-bold text-indigo-600 text-3xl">{price_discount}€</span>
                    <div className="flex-1">
                      <p className="text-md font-semibold text-red-500">Antes <span className="line-through ml-0.5">{price}€</span></p>
                      <p className="text-gray-400 text-sm">Producto en oferta</p>
                    </div>
                  </>
                )}
                {price_discount === null && (
                  <span className="font-bold text-indigo-600 text-3xl">{price}€</span>
                )}
              </div>
              <ReactMarkdown className='markdownBlock' children={short_description} remarkPlugins={[remarkGfm]} />
              <div className="flex py-4 space-x-4">
                <OutboundLink className="px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-center md:max-w-xs w-full" href={link} title={`Ir a ${link}`} target="_blank" rel="noreferrer">Comprar</OutboundLink>
              </div>
            </div>
          </div>
        </div>
        <section className="mt-2 md:mt-8">
          <h2 className="leading-tight tracking-tight font-bold text-gray-800 text-3xl mb-4 uppercase">Detalles</h2>
          <ReactMarkdown className='markdownBlock' children={description} remarkPlugins={[remarkGfm]} />
        </section>
        <section className="mt-2 md:mt-8">

          <h2 className="leading-tight tracking-tight font-bold text-gray-800 text-3xl mb-4 uppercase" >Productos Relacionados</h2>
          <div className={'flex gap-6 flex-col md:flex-row'}>

            <div className='w-full flex flex-row gap-6'>
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={24}
                slidesPerView={sliderPerView()}
                autoplay
                loop
                pagination={{ clickable: true }}
                me='pb-3'
              >
                {relatedProducts.map((product) => (
                  <SwiperSlide key={product.node.slug}>
                    <ProductItem product={product.node} />
                  </SwiperSlide>
                ))}

              </Swiper>
            </div>

          </div>
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
    $mainCategory: [String]
  ) {
    strapiProducts(slug: { eq: $slug }) {
      name
      price
      price_discount
      description
      short_description
      keywords
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
    allStrapiProducts(
      filter: {pages: {elemMatch: {name: {eq: $strapiPage}}}, categories: {elemMatch: {name: {in: $mainCategory}}}}
      limit: 5
    ) {
      edges {
        node {
          name
          categories {
            name
          }
          slug
          image {
            localFile {
              publicURL
            }
          }
          price_discount
          price
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
