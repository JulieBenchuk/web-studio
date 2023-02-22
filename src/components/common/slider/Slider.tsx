import React from 'react';
import styles from '@/styles/components/slider/slider.module.scss'
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper";
import Image from 'next/image'
import ava from '@/assets/img/reviews_ava.png'
import arrow from '@/assets/img/Arrow_2.png'

import 'swiper/css/navigation';
import 'swiper/css/autoplay';

type SwiperDataType = {
    swiperData: DataType[]
}
type DataType = {
    id: string;
    title: string;
    subTitle?: string;
    desc: string;
    img?: string;
    price?: number;
}

export const Slider: React.FC<SwiperDataType> = ({swiperData}) => {
    return (
        <div className={styles.carousel}>
            <Swiper className='swiper-slide'
                    modules={[Autoplay, Navigation]}
                    navigation={{
                        prevEl: '.swiper-button-prev',
                        nextEl: '.swiper-button-next',
                    }}
                    loop={true}
                    autoplay={true}
            >
                    {swiperData.map((el, index) => {
                        return <SwiperSlide key={index} className={styles.slide}>
                                <div className={styles.image}>
                                    <Image src={ava} alt={el.title}/>
                                </div>
                                <div className={styles.allText}>
                                    <div className={styles.title}>
                                        {el.title}
                                    </div>
                                    <div className={styles.subTitle}>{el.subTitle}</div>
                                    <div className={styles.desc}>
                                        {el.desc}
                                    </div>
                                    <div className={styles.price}>{el.price && `от ${el.price} ₽`}</div>
                                    <div className={styles.buttons}>
                                        <div className={`swiper-button-prev ${styles.swiperButtonPrev}`}>
                                            <Image src={arrow} alt={'Arrow'}/>
                                        </div>
                                        {`0${index + 1}`}/<span>{`0${swiperData.length}`}</span>
                                        <div className={`swiper-button-next ${styles.swiperButtonNext}`}>
                                            <Image src={arrow} alt={'Arrow'}/>
                                        </div>
                                    </div>
                                </div>
                        </SwiperSlide>
                    })}
            </Swiper>
            <style jsx>{`
              .slideClass {

              }

              .swiper-slide {

              }

              .swiper-button-next:after {
                display: none;
              }

              .swiper-button-prev:after {
                display: none;
              }

              .swiper-slide {

              }
              .swiper-wrapper{
              display: none;
              }
            `}</style>
        </div>
    );
}