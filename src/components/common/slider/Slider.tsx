import React from 'react';
import styles from '@/styles/components/slider/slider.module.scss'
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper";
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
                <div>
                    {swiperData.map((el, index) => {
                        return <SwiperSlide key={index} className={styles.slide}>
                            <div className={styles.image}>
                                <img src={ava.src} alt={el.title}/>
                            </div>
                            <div className={styles.allText}>
                                <div className={styles.title}>
                                    {el.title}
                                </div>
                                {el.subTitle && <div className={styles.subTitle}>{el.subTitle}</div>}
                                <div className={styles.desc}>
                                    {el.desc}
                                </div>
                                {el.price && <div className={styles.price}>от {el.price} ₽</div>}

                                <div className={styles.buttons}>
                                    <div className={`swiper-button-prev ${styles.swiperButtonPrev}`}>
                                        <img src={arrow.src} alt={'Arrow'}/>
                                    </div>
                                    {`0${index + 1}`}/<span>{`0${swiperData.length}`}</span>
                                    <div className={`swiper-button-next ${styles.swiperButtonNext}`}>
                                        <img src={arrow.src} alt={'Arrow'}/>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    })}

                </div>
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
            `}</style>
        </div>
    );
}