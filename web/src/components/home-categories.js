import React from 'react';
import { Link } from 'gatsby'

import { AiOutlineArrowRight } from 'react-icons/ai';
const HomeCategories = ({ categories }) => {
    const [category1, category2, category3] = categories;
    const { image_featured: cat_1_image, slug: cat_1_slug, title: cat_1_title } = category1.node;
    const { image_featured: cat_2_image, slug: cat_2_slug, title: cat_2_title } = category2.node;
    const { image_featured: cat_3_image, slug: cat_3_slug, title: cat_3_title } = category3.node;
    return (
        <section className='mb-6 py-6'>
            <header className={'sm:flex justify-between mb-4'}>
                <h2 className={'text-3xl font-extrabold text-gray-800'}>Categorías destacadas</h2>
                <Link className={'text-xl font-bold text-gray-800 flex items-center'} to="/categorias">Búscar por categorías <AiOutlineArrowRight className={'ml-2 mt-1'} /></Link>
            </header>
            <main className={'flex gap-6 flex-col md:flex-row'}>
                <Link to={cat_1_slug} className='w-full md:w-1/2 h-250 md:h-auto bg-indigo-800 rounded-2xl relative px-4 overflow-hidden hover:drop-shadow-lg hover:scale-95 transition-all' style={{ backgroundPosition: 'center', backgroundImage: `url('${cat_1_image.localFile.publicURL}')` }}>
                    <span className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-32 opacity-50'></span>
                    <div className='absolute bottom-4'>
                        <label className='text-3xl font-bold text-white' style={{ textShadow: '1px 1px 3px black' }}>{cat_1_title}</label>
                    </div>
                </Link>
                <div className='w-full md:w-1/2 flex flex-col gap-6'>
                    <Link to={cat_2_slug} className='h-250 bg-purple-800  rounded-2xl relative px-4 overflow-hidden hover:drop-shadow-lg hover:scale-95 transition-all' style={{ backgroundPosition: 'center', backgroundImage: `url('${cat_2_image.localFile.publicURL}')` }}>
                        <span className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-32 opacity-50'></span>
                        <div className='absolute bottom-4'>
                            <label className='text-3xl font-bold text-white' style={{ textShadow: '1px 1px 3px black' }}>{cat_2_title}</label>
                        </div>
                    </Link>
                    <Link to={cat_3_slug} className='h-250 bg-purple-800 rounded-2xl relative px-4 overflow-hidden hover:drop-shadow-lg hover:scale-95 transition-all' style={{ backgroundPosition: 'center', backgroundImage: `url('${cat_3_image.localFile.publicURL}')` }}>
                        <span className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-32 opacity-50'></span>
                        <div className='absolute bottom-4'>
                            <label className='text-3xl font-bold text-white' style={{ textShadow: '1px 1px 3px black' }}>{cat_3_title}</label>
                        </div>

                    </Link>
                </div>
            </main>
        </section>
    )
}

export default HomeCategories;