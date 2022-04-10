import React, { useState } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
const Navbar = () => {
    const data = useStaticQuery(graphql`
    query NavbarQuery{
        allStrapiPages(filter: {name: {eq: "juegosdemesa" }}) {
            nodes {
              categories {
                title
                slug
              }
              name
            }
        }
      }
  `)

    const categories = data.allStrapiPages.nodes[0].categories;
    const pageTitle = data.allStrapiPages.nodes[0].name
    const [isOpen, setIsOpen] = useState(false);

    const [query, setQuery] = useState('');
    const handleSearchClick = () => {
        console.log('clicked', query);
        window.location.href = `/buscador?search=${query}`;
    }

    return (
        <nav className={`bg-white shadow-sm sticky top-0 left-0 z-50`}>
            <div className="max-w-7xl mx-auto px-4 md:px-12 py-1 md:py-4">
                <div className="flex flex-wrap items-center justify-between md:justify-start">
                    <Link
                        to={`/`}
                        title={`Ir al Inicio`}
                        className="font-bold text-gray-700 text-2xl capitalize"
                    >
                        {pageTitle}
                    </Link>
                    <button type="button" className="md:hidden w-10 h-10 rounded-lg flex justify-center items-center" onClick={() => setIsOpen(!isOpen)}>
                        {!isOpen && <AiOutlineMenu />}
                        {isOpen && <AiOutlineClose />}
                    </button>
                    <div className="hidden md:flex space-x-3 flex-1 ml-8">
                        {categories.map(({ title, slug }) => (
                            <Link
                                to={`/${slug}`}
                                title={`Ir a ${title}`}
                                className="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600"
                                key={slug}
                            >
                                {title}
                            </Link>
                        ))}
                    </div>
                    <div className="flex justify-center ml-0 lg:ml-8 w-full lg:w-auto mt-3 mb-1 lg:my-0">
                        <div className="input-group flex items-stretch w-full">
                            <input type="search" className=" flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Buscar producto" aria-label="Search" aria-describedby="button-addon3" value={query} onChange={(event) => setQuery(event.target.value)} />
                            <button className="btn inline-block px-3 py-2 border-2 border-blue-600 text-blue-600 font-medium text-md rounded" type="button" id="button-addon3" onClick={handleSearchClick}><AiOutlineSearch /></button>
                        </div>
                    </div>
                </div>
                {isOpen &&
                    <div className="flex flex-col md:hidden">
                        {categories.map(({ title, slug }) => (
                            <Link
                                to={`/${slug}`}
                                title={`Ir a ${title}`}
                                className="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600"
                                key={slug}
                            >
                                {title}
                            </Link>
                        ))}
                    </div>
                }
            </div>
        </nav>
    )
}


export default Navbar;