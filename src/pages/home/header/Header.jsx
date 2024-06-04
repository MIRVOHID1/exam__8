import './Header.css'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Banner1 from '../../../assets/Banners/home__banner1.webp'
import Banner2 from '../../../assets/Banners/home__banner2.webp'
import Banner3 from '../../../assets/Banners/home__banner3.webp'


const Header = () => {
    return (
        <div className="home__banner">
            <>

                <Swiper
                    style={{'--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff',}}
                    lazy={true}
                    loop={true}
                    pagination={{clickable: true,}}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide data-hash="slide1">
                        <img className='home__banner__img' src={Banner1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide data-hash="slide2">
                        <img className='home__banner__img' src={Banner2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide data-hash="slide3">
                        <img className='home__banner__img' src={Banner3} alt="" />
                    </SwiperSlide>
                </Swiper>
            </>
        </div>
    );
}

export default Header;