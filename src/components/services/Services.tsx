import React from 'react';
import Wrapper from "../common/wrapper";
import Image from "next/image";
import LinkBtn from "@/components/common/buttons/LinkBtn";
import gift from '../../assets/svg/gift.svg'

import style from '../../styles/components/services.module.scss'
import FullButton from "@/components/common/buttons/FullButton";
import SmallTitle from "@/components/common/Titles/SmallTitle";


const Services = () => {
    return (
        <>
            <Wrapper className={style.wrapper}>
                <SmallTitle>Наши услуги!</SmallTitle>
                <div className={style.items}>
                    <div className={style.itemsBg}></div>
                    <div className={style.itemsMenu}>
                        <div className={style.item_first}>
                            <div className={style.item_blockLeft}>
                                <h5 className={style.item_title}>РАЗРАБОТКА САЙТОВ</h5>
                                <div className={style.buttons}>
                                    <LinkBtn>Cайт-Визитка</LinkBtn>
                                    <LinkBtn>Промо-сайт</LinkBtn>
                                    <LinkBtn>Landing page</LinkBtn>
                                    <LinkBtn>Корпоративный сайт</LinkBtn>
                                    <LinkBtn>Интернет магазин</LinkBtn>
                                </div>
                            </div>
                            <div className={style.item_blockRight}>
                                <FullButton className={style.fillBtn}>Подробнее</FullButton>
                                <h5 className={style.cost}>от 34990 &#8381;</h5>
                                <div className={style.giftBox}>
                                    <Image alt={'gift'} src={gift} width={`${20}`} height={`${20}`}/>
                                    <p className={style.gift}>Год хостинга в подарок</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.item_second}>
                            <div className={style.item_blockLeft}>
                                <h5 className={style.item_title}>Интернет Продвижение</h5>
                                <div className={style.buttons}>
                                    <LinkBtn>SEO продвижение</LinkBtn>
                                    <LinkBtn>Контекстная реклама</LinkBtn>
                                    <LinkBtn>SEO оптимизация</LinkBtn>
                                </div>
                            </div>
                            <div className={style.item_blockRight}>
                                <FullButton className={style.fillBtn}>Подробнее</FullButton>
                                <h5 className={style.cost}>от 24990 &#8381;</h5>
                                <div className={style.giftBox}>
                                    <Image alt={'gift'} src={gift} width={`${20}`} height={`${20}`}/>
                                    <p className={style.gift}>Аудит в подарок</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.item_third}>
                            <div className={style.item_blockLeft}>
                                <h5 className={style.item_title}>Дизайн</h5>
                                <div className={style.buttons}>
                                    <LinkBtn>UI и UX дизайн</LinkBtn>
                                    <LinkBtn>Редизайн сайта</LinkBtn>
                                </div>
                            </div>
                            <div className={style.item_blockRight}>
                                <FullButton className={style.fillBtn}>Подробнее</FullButton>
                                <h5 className={style.cost}>от 25990 &#8381;</h5>
                                <div className={style.giftBox}>
                                    <Image alt={'gift'} src={gift} width={`${20}`} height={`${20}`}/>
                                    <p className={style.gift}>Анализ дизайна в подарок</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>

        </>

    );
};

export default Services;