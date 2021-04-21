import React from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Pagination, A11y, Autoplay, EffectFade} from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-fade/effect-fade.scss';

import slide1 from './../../Assets/img/slider-banner/slide1.png';
import slide2 from './../../Assets/img/slider-banner/slide2.png';
import slide3 from './../../Assets/img/slider-banner/slide3.png';
import slide4 from './../../Assets/img/slider-banner/slide4.png';
import classes from './../../Assets/styles/Swiper/swiper.module.sass';

SwiperCore.use([Pagination, A11y, Autoplay, EffectFade]);

const Slider = () => {
    const SLIDER = [
        {img: slide1, alt: 'slide 1'},
        {img: slide2, alt: 'slide 2'},
        {img: slide3, alt: 'slide 2'},
        {img: slide4, alt: 'slide 4'},
    ];

    return (
        <Swiper
            className={classes.swiperContainer}
            direction='vertical'
            effect='fade'
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 5500,
                disableOnInteraction: false,
            }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}>
            {SLIDER.map((item,index) => (
                <SwiperSlide className = {classes.slide}>
                    <img key = {index} src = {item.img} alt = {item.alt}/>
                    <div className={classes.textSlide}>
                        <h1>Мойки, смесители<br/>и аксессуары</h1>
                        <h3>от ведущего производителя сантехники<br/>для кухни Reginox</h3>
                    </div>                    
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;