import React from 'react';
import SmallTitle from "@/components/common/Titles/SmallTitle";
import Wrapper from "@/components/common/wrapper";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from 'swiper';
import style from '../../../styles/components/ourWorks.module.scss'

import 'swiper/css';
import 'swiper/css/autoplay';
import {worksItems} from "@/components/common/ourWorks/OurWotksItems";
import Image from "next/image";


const OurWorks = () => {
    return (
        <Wrapper className={style.wrapper}>
            <SmallTitle>Наши Работы</SmallTitle>
            <Swiper
                modules={[Autoplay]}
                pagination={{clickable: true}}
                slidesPerView={2}
                autoplay={{
                    delay: 2000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false
                }}
                loop
                className={style.swiper_container}
            >
                {worksItems.map((el) =>
                    <SwiperSlide style={{width: 'max-content'}}>
                        <Image src={el} alt={''}/>
                    </SwiperSlide>
                )}
            </Swiper>
        </Wrapper>
    );
};

export default OurWorks;