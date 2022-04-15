import React from "react";
import CategoryItem from "./category-item";
const CategoryGrid = ({ categories }) => {
    return (
        <section className="bg-white py-8">
            <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
                {categories.length > 0 && categories.map((category) => (
                    <div className="w-full md:w-1/2 xl:w-1/4 md:p-6 flex flex-col mb-4" key={category.slug}>
                        <CategoryItem category={category} />
                    </div>
                ))}
                {categories.length <= 0 &&
                    <div className="w-full">
                        <p className='text-3xl tracking-tight font-extrabold text-gray-900 mb-4 block text-center'>No se ha ningúna categoría</p>
                    </div>
                }
            </div>
        </section>
    )
}
export default CategoryGrid;