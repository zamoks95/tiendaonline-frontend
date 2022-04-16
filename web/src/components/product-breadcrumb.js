import * as React from "react"
import { BsChevronLeft } from 'react-icons/bs';
import { Link } from 'gatsby'

const ProductBreadcrumb = ({ categoryName, categoryLink, productName }) => {
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Link to="/" className="hover:underline hover:text-gray-600" title={`Ir a Inicio`}>Inicio</Link>
                <BsChevronLeft className="h-5 w-5 leading-none text-gray-400" />
                <Link to={`/${categoryLink}`} className="hover:underline hover:text-gray-600" title={`Ir a ${categoryName}`}>{capitalizeFirstLetter(categoryName)}</Link>
                <BsChevronLeft className="h-5 w-5 leading-none text-gray-400" />
                <span>{capitalizeFirstLetter(productName)}</span>
            </div>
        </div>
    )
}
export default ProductBreadcrumb;