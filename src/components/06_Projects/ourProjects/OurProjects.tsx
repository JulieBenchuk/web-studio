import React, {createContext, FC, useContext, useState} from 'react';
import Wrapper from "@/components/common/wrapper";
import MainTitle from "@/components/common/Titles/MainTitle";
import style from "@/styles/components/ourProjects.module.scss";

import {Swiper, SwiperSlide} from "swiper/react"
import {Grid, Pagination} from "swiper";

import 'swiper/swiper.css';
import "swiper/css/grid";
import "swiper/css/pagination";

import {worksItems} from "@/components/common/ourWorks/OurWotksItems";

const OurProjects = () => {
    //const [swiperInstance, setSwiperInstance] = useState<SwiperCore>();
    const [count, setCount] = useState(1);
    const context = createContext({count})
    const ss = useContext(context)


    return (

        <Wrapper className={style.wrapper}>
            <MainTitle title={'Наши Проекты'} className={style.title}/>
            <p className={style.subTitle}>Здесь может оказаться ваш проект</p>
            <div className={style.swiperBlock}>
                <context.Provider value={{count}}>
                    <Ssss count={ss.count} setCount={setCount}/>
                </context.Provider>
            </div>

        </Wrapper>

    );
};

const Ssss: FC<{ count: number, setCount: (value: number) => void }> = ({count, setCount}) => {
    // const swiper = useSwiper()
    return (
        <Swiper
            pagination={{
                clickable: true,
            }}
            onInit={swiper => swiper.updateSlides()}
            onBeforeInit={swiper => swiper.updateSlides()}
            breakpoints={{
                // when window width is >= 360px
                360: {
                    slidesPerView: 1,
                    grid: {
                        rows: count,
                        fill: 'column',
                    },
                    spaceBetween: 20,
                    allowTouchMove: false,
                    pagination: true,
                },
                // when window width is >= 965px
                497: {
                    slidesPerView: 2,
                    grid: {
                        rows: 3,
                        fill: 'row'
                    },
                    spaceBetween: 20,
                    allowTouchMove: false,
                    pagination: true,
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
            <button onClick={() => {
                setCount(count + 1)
            }}>Button
            </button>
        </Swiper>
    )

}


export default OurProjects;

