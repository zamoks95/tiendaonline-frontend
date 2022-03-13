import React from 'react';

const ProductItem = ({ name, url, price, imageSrc }) => {
    return (
        <a href={url}>
            <img className="hover:grow hover:shadow-lg" src={imageSrc} alt={name} />
            <div className="pt-3 flex items-center justify-between">
                <p className="">{name}</p>
            </div>
            <p className="pt-1 text-gray-900">{price}</p>
        </a>

    )
}
export default ProductItem