import React, { useState } from "react";
import { Link } from "gatsby";
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
const Navbar = ({ title }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const handleSearchClick = () => window.location.href = `/buscador?search=${query}`;

    const commonLinks = [
        { name: 'Categorías', url: "/categorias", title: "Ir a Categorias" },
        { name: 'Productos destacados', url: "/destacados", title: "Ir a Productos Destacados" },
        { name: 'Ofertas', url: "/ofertas", title: "Ir a Ofertas" },
    ]
    return (
        <nav className={`bg-white shadow-sm sticky top-0 left-0 z-50`}>
            <div className="max-w-7xl mx-auto px-4 md:px-12 py-1 md:py-4">
                <div className="flex flex-wrap items-center justify-between md:justify-start">
                    <Link
                        to={`/`}
                        title={`Ir al Inicio`}
                        className="font-bold text-gray-700 text-2xl capitalize"
                    >
                        {title}
                    </Link>
                    <button type="button" className="md:hidden w-10 h-10 rounded-lg flex justify-center items-center" onClick={() => setIsOpen(!isOpen)}>
                        {!isOpen && <AiOutlineMenu />}
                        {isOpen && <AiOutlineClose />}
                    </button>
                    <div className="hidden md:flex space-x-3 flex-1 ml-8">
                        {commonLinks.map(({ name, url, title }) => (
                            <Link
                                key={name}
                                to={url}
                                title={title}
                                className="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-700 hover:text-gray-800"
                            >
                                {name}
                            </Link>
                        ))}
                    </div>
                    <div className="flex justify-center ml-0 lg:ml-8 w-full lg:w-auto mt-3 mb-1 lg:my-0">
                        <div className="input-group flex items-stretch w-full">
                            <label htmlFor="Search" className="hidden">inputSearch</label>
                            <input type="search" id="inputSearch" className=" flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Buscar producto" aria-label="Search" aria-describedby="button-addon3" value={query} onChange={(event) => setQuery(event.target.value)} />
                            <label htmlFor="sendSearch" className="hidden">sendSearch</label>
                            <button id="sendSearch" aria-label="sendSearch" className={`btn inline-block px-3 py-2 border-2 border-indigo-600 text-indigo-600 font-medium text-md rounded`} type="button" onClick={handleSearchClick}><AiOutlineSearch /></button>
                        </div>
                    </div>
                </div>
                {isOpen &&
                    <div className="flex flex-col md:hidden">
                        {commonLinks.map(({ name, url, title }) => (
                            <Link
                                key={`${name}-mobile`}
                                to={url}
                                title={title}
                                className="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-700 hover:text-gray-800"
                            >
                                {name}
                            </Link>
                        ))}
                    </div>
                }
            </div>
        </nav>
    )
}


export default Navbar;