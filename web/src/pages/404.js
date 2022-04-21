import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data }) => {

  const pageDescription = data.strapiPages;
  return (
    <Layout pageName={pageDescription.title}>
      <Seo title="404: Página no encontrada" />

      <div className="flex items-center justify-center min-h-screen bg-white py-48">
        <div className="flex flex-col">
          <div className="flex flex-col items-center">
            <div className="text-indigo-500 font-bold text-7xl">
              404
            </div>
            <div className="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
              Esta página no existe
            </div>
          </div>
          <div className="flex flex-col mt-32">
            <div className="text-gray-400 font-bold uppercase">
              Puedes probar a seguir navegando con estas
            </div>

            <div className="flex flex-col items-stretch mt-5">
              <div className="flex flex-row group px-4 py-8
                    border-t hover:cursor-pointer
                    transition-all duration-200 delay-100">

                <div className="rounded-xl bg-blue-100 px-3 py-2 md:py-4">
                  <i className="mdi mdi-home-outline mx-auto 
                            text-indigo-900 text-2xl md:text-3xl"></i>
                </div>

                <div className="grow flex flex-col pl-5 pt-2">
                  <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
                    <Link to='/' title="Ir a categorías">
                      Inicio
                    </Link>
                  </div>
                </div>

                <i className="mdi mdi-chevron-right text-gray-400 mdi-24px my-auto pr-2
                        group-hover:text-gray-700 transition-all duration-200 delay-100"></i>
              </div>

              <div className="flex flex-row group px-4 py-8
                    border-t hover:cursor-pointer
                    transition-all duration-200 delay-100">

                <div className="rounded-xl bg-blue-100 px-3 py-2 md:py-4">
                  <i className="mdi mdi-book-open-page-variant-outline mx-auto 
                            text-indigo-800 text-2xl md:text-3xl"></i>
                </div>

                <div className="grow flex flex-col pl-5 pt-2">
                  <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
                    <Link to='/categorias' title="Ir a categorías">
                      Categorías
                    </Link>
                  </div>
                </div>

                <i className="mdi mdi-chevron-right text-gray-400 mdi-24px my-auto pr-2
                        group-hover:text-gray-700 transition-all duration-200 delay-100"></i>
              </div>

              <div className="flex flex-row group px-4 py-8
                    border-t hover:cursor-pointer
                    transition-all duration-200 delay-100">

                <div className="rounded-xl bg-blue-100 px-3 py-2 md:py-4">
                  <i className="mdi mdi-archive-settings-outline 
                            mx-auto text-indigo-800 text-2xl md:text-3xl"></i>
                </div>

                <div className="grow flex flex-col pl-5 pt-2">
                  <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
                    <Link to='/destacados' title="Ir a categorías">
                      Productos destacados
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-row group px-4 py-8
                    border-t hover:cursor-pointer
                    transition-all duration-200 delay-100">

                <div className="rounded-xl bg-blue-100 px-3 py-2 md:py-4">
                  <i className="mdi mdi-at mx-auto 
                            text-indigo-800 text-2xl md:text-3xl"></i>
                </div>

                <div className="grow flex flex-col pl-5 pt-2">
                  <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
                    <Link to='/ofertas' title="Ir a categorías">
                      Ofertas
                    </Link>
                  </div>
                </div>

                <i className="mdi mdi-chevron-right text-gray-400 mdi-24px my-auto pr-2
                        group-hover:text-gray-700 transition-all duration-200 delay-100"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
query error(
  $strapiPage: String
)  {
  strapiPages(name: {eq: $strapiPage}) {
    title
  }
}
`
