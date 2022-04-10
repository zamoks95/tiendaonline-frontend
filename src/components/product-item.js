import React from 'react';
import { Link } from 'gatsby'

const ProductItem = ({ product }) => {
    const { name, slug, price, image, price_discount } = product;
    const hasDiscount = price_discount ? true : false;
    return (
        <Link to={`/${slug}`} className='block w-auto hover:drop-shadow-lg hover:scale-95 transition-all'>
            <div className={`rounded-2xl overflow-hidden relative ${hasDiscount ? 'border-4 border-violet-600' : ''}`} style={{ background: '#f1f5f8' }}>
                <img src={image.localFile.publicURL} className="h-250 object-cover m-auto" />
                {hasDiscount && (
                    <div className='absolute bottom-0 w-full font-bold py-2 text-center bg-violet-600 text-lg text-white'>
                        <label>OFERTA</label>
                    </div>
                )}
            </div>
            <div className='mt-2'>
                <label className='text-xl font-bold'>{name}</label>
                {!hasDiscount && (
                    <p className='text-lg'>{price}€</p>
                )}
                {hasDiscount && (
                    <div className='flex gap-x-2 items-end'>
                        <span className='text-xl'>{price_discount}€</span>
                        <span className='text-l  line-through text-red-600'>{price}€</span>
                    </div>
                )}
            </div>
        </Link>
    )
}
export default ProductItem