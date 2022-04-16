import React from 'react';
import { Pagination, Scrollbar, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import HeroSingle from './hero-single';

const HomepageCarrousel = () => {
    return (
        <Swiper
            modules={[Pagination, Scrollbar, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            className="max-w-screen-2xl"
        >
            <SwiperSlide>
                <HeroSingle title="hero" subtitle={'asdasdasd'} imageSrc='https://elyssi.redpixelthemes.com/assets/img/unlicensed/hero-slide-05.jpg' />
            </SwiperSlide>
            <SwiperSlide>
                <HeroSingle title="hero" subtitle={'asdasdasd'} imageSrc='https://elyssi.redpixelthemes.com/assets/img/unlicensed/hero-slide-05.jpg' />
            </SwiperSlide>
            <SwiperSlide>
                <HeroSingle title="hero" subtitle={'asdasdasd'} imageSrc='https://elyssi.redpixelthemes.com/assets/img/unlicensed/hero-slide-05.jpg' />
            </SwiperSlide>
            <SwiperSlide>
                <HeroSingle title="hero" subtitle={'asdasdasd'} imageSrc='https://elyssi.redpixelthemes.com/assets/img/unlicensed/hero-slide-05.jpg' />
            </SwiperSlide>
        </Swiper>
    )
}

export default HomepageCarrousel