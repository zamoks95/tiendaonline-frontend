import React from 'react';
import { Link } from 'gatsby'

const ProductItem = ({ product }) => {
    const { name, slug, price, image, price_discount } = product;
    const hasDiscount = price_discount ? true : false;
    return (
        <Link to={`/${slug}`} className='block w-auto hover:drop-shadow-lg hover:scale-95 transition-all'>
            <div className={`rounded-2xl overflow-hidden relative ${hasDiscount ? 'border-4 border-violet-600' : ''}`} style={{ background: '#f1f5f8' }}>
                <img src={image.localFile.publicURL} alt={name} className="h-250 object-cover m-auto" style={{ height: '360px', width: '294px' }} />
                {hasDiscount && (
                    <div className='absolute bottom-0 w-full font-bold py-2 text-center bg-violet-600 text-lg text-white'>
                        <span>OFERTA</span>
                    </div>
                )}
            </div>
            <div className='mt-2'>
                <h3 className="mt-4 text-md text-gray-700">{name}</h3>
                {!hasDiscount && price && (
                    <p className="mt-1 text-lg font-medium text-gray-900">{price}€</p>
                )}
                {hasDiscount && (
                    <div className='flex gap-x-2 items-end'>
                        <p className="mt-1 text-lg font-medium text-gray-900">{price_discount}€</p>
                        <p className="mt-1 text-sm font-medium line-through text-red-600">{price}€</p>
                    </div>
                )}
            </div>
        </Link>
    )
}
export default ProductItem