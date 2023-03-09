import React from 'react';
import SmallTitle from "@/components/common/Titles/SmallTitle";
import Wrapper from "@/components/common/wrapper";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from 'swiper';
import style from '../../../styles/components/ourWorks.module.scss'

import 'swiper/css';
import 'swiper/css/autoplay';
import {worksItems} from "@/components/common/ourWorks/OurWotksItems";
import FullButton from "@/components/common/buttons/FullButton";
import LinkBtn from "@/components/common/buttons/LinkBtn";


const OurWorks: React.FC<{ isButton: boolean, className?: string }> = ({isButton, className}) => {
    const wrapper = className ? `${style.wrapper} ${className}` : style.wrapper
    return (
        <Wrapper className={wrapper}>
            <SmallTitle>Наши Работы!</SmallTitle>
            <Swiper
                modules={[Autoplay]}
                slidesPerView={'auto'}
                autoplay={{
                    delay: 2000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false,
                    reverseDirection: false,
                }}
                loop={true}
                spaceBetween={20}
            >
                {worksItems.map((el, i) =>
                    <SwiperSlide key={i}>
                        <div className={style.card}>
                            <img src={el.src} alt={'image portfolio'}/>
                            <h5>{el.width}</h5>
                            <LinkBtn><a href="#">Перейти на страницу</a></LinkBtn>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
            {isButton && <FullButton>Смотреть все работы</FullButton>}
        </Wrapper>
    );
};

export default OurWorks;