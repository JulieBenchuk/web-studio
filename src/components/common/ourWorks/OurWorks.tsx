import React from 'react';
import {useRouter} from "next/router";
import 'swiper/css';
import 'swiper/css/autoplay';
import {Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import Wrapper from "@/components/common/wrapper";
import SmallTitle from "@/components/common/Titles/SmallTitle";
import FullButton from "@/components/common/buttons/FullButton";
import LinkBtn from "@/components/common/buttons/LinkBtn";
import style from '@/styles/components/ourWorks.module.scss'
import {PortfolioType} from "@/pages/portfolio";


const OurWorks: React.FC<{ isButton: boolean, className?: string, portfolio: PortfolioType[] }> = ({
                                                                                                       isButton,
                                                                                                       className,
                                                                                                       portfolio
                                                                                                   }) => {
    const route = useRouter()
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
                {portfolio.map((el, i) =>
                    <SwiperSlide key={i} className={style.swiperSlide}>
                        <div className={style.card}>
                            <img src={el.img} alt={'image portfolio'}/>
                            <h5>{el.title}</h5>
                            <LinkBtn><a href={el.link}>Перейти на страницу</a></LinkBtn>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
            {isButton && <FullButton onClick={() => route.push('./portfolio')}>Смотреть все работы</FullButton>}
        </Wrapper>
    );
};

export default OurWorks;