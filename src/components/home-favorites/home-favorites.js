import React from 'react';
import useBreakpoint from 'use-breakpoint';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'gatsby';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './pagination.css';

import ProductItem2 from '../product-item'

const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 }
const HomeFavorites = ({ products }) => {
    const { breakpoint } = useBreakpoint(BREAKPOINTS, 'desktop');
    const sliderPerView = () => {
        switch (breakpoint) {
            case "desktop":
                return 4;
            case "tablet":
                return 2;
            default:
                return 1;
        }
    }

    return (
        <section>
            <header className={'sm:flex justify-between mb-4'}>
                <h2 className={'text-3xl font-extrabold text-gray-800'}>Productos destacados</h2>
                <Link className={'text-xl font-bold text-gray-800 flex items-center'} to="/destacados">Ver los Destacados <AiOutlineArrowRight className={'ml-2 mt-1'} /></Link>
            </header>
            <main className={'flex gap-6 flex-col md:flex-row'}>
                <div className='w-full flex flex-row gap-6'>
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={24}
                        slidesPerView={sliderPerView()}
                        autoplay
                        loop
                        pagination={{ clickable: true }}
                        me='pb-3'
                    >
                        {products.map((product) => (
                            <SwiperSlide key={product.slug}>
                                <ProductItem2 product={product} />
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </main>
        </section>
    )
}

export default HomeFavorites;