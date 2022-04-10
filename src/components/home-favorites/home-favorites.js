import React from 'react';
import useBreakpoint from 'use-breakpoint';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './pagination.css';

import ProductItem2 from '../product-item'

const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 }
const HomeFavorites = ({ products }) => {
    console.log('products', products);
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
            <header className={'flex justify-between mb-4'}>
                <h2 className={'text-2xl font-extrabold text-gray-800'}>Our Favorites</h2>
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
                        classNa
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