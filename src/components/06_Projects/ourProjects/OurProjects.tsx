import React, {FC, useRef} from 'react';
import Wrapper from "@/components/common/wrapper";
import MainTitle from "@/components/common/Titles/MainTitle";
import style from "@/styles/components/ourProjects.module.scss";

import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import {Grid, Pagination} from "swiper";
import {Swiper as SwiperCore} from 'swiper/types'

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import {worksItems} from "@/components/common/ourWorks/OurWotksItems";

const OurProjects = () => {
    const swiperRef = useRef<SwiperCore>()

    // swiperRef.current?.update()
    //
    // const swiper = useSwiper()
    // //
    // useEffect(() => {
    //
    // }, [count])
    console.log('render')

    return (
        <Wrapper className={style.wrapper}>
            <MainTitle title={'Наши Проекты'} className={style.title}/>
            <p className={style.subTitle}>Здесь может оказаться ваш проект</p>
            <div className={style.swiperBlock}>
                <Swiper
                    onBeforeInit={swiper => {
                        swiperRef.current = swiper
                    }}
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
                    <Example/>
                </Swiper>
            </div>
            <button onClick={() => {
                
            }}>Button
            </button>
        </Wrapper>
    );
};


export default OurProjects;
const Example: FC = () => {
    const swiper = useSwiper()
    return <button onClick={() => {
        swiper.update()
        swiper.slideTo(0)
    }}>Button
    </button>
}