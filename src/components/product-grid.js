import React from "react";
import ProductItem from "./product-item";
const ProductGrid = ({ products }) => {
    return (
        <section className="bg-white py-8">
            <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
                {products.length > 0 && products.map((product) => (
                    <div className="w-full md:w-1/2 xl:w-1/4 md:p-6 flex flex-col mb-4" key={product.slug}>
                        <ProductItem product={product} />
                    </div>
                ))}
                {products.length <= 0 &&
                    <div className="w-full">
                        <p className='text-3xl tracking-tight font-extrabold text-gray-900 mb-4 block text-center'>No se han encontrado productos</p>
                    </div>
                }
            </div>
        </section>
    )
}
export default ProductGrid;