import React, {useState} from 'react';
import Wrapper from "@/components/common/wrapper";
import MainTitle from "@/components/common/Titles/MainTitle";
import style from "@/styles/components/ourProjects.module.scss";

import {Swiper, SwiperSlide} from "swiper/react";
import {Grid, Pagination} from "swiper";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import {worksItems} from "@/components/common/ourWorks/OurWotksItems";

const OurProjects = () => {

    const [count, setCount] = useState(2)

    return (
        <Wrapper className={style.wrapper}>
            <MainTitle title={'Наши Проекты'} className={style.title}/>
            <p className={style.subTitle}>Здесь может оказаться ваш проект</p>
            <div className={style.swiperBlock}>
                <Swiper
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        // when window width is >= 360px
                        360: {
                            slidesPerView: 1,
                            grid: {
                                rows: 2,
                                fill: 'column',
                            },
                            spaceBetween: 20,
                            allowTouchMove: false,
                            pagination: false,
                        },
                        // when window width is >= 965px
                        497: {
                            slidesPerView: 2,
                            grid: {
                                rows: 3,
                                fill: 'row'
                            },
                            spaceBetween: 20,
                            allowTouchMove: false
                        },
                        // when window width is >= 1439px
                        1440: {
                            slidesPerView: 3,
                            grid: {
                                rows: 4,
                                fill: 'row',
                            },
                            spaceBetween: 20,

                        },
                    }}
                    modules={[Grid, Pagination]}

                >
                    {worksItems.map((el, i) =>
                        <SwiperSlide key={i}>
                            <img src={el.src} alt="img" className={style.img}/>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
            <button onClick={() => {
                setCount(count + 4)
                console.log(count + 4)
            }}>Button
            </button>
        </Wrapper>
    );
};

export default OurProjects;