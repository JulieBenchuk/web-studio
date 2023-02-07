import React from 'react';
import Image from "next/image";
import ground from "@/assets/svg/ground.svg";
import Header from "@/components/common/header/Header";
import Wrapper from "@/components/common/wrapper";
import style from '../../styles/components/topComponent.module.scss'
import FullButton from "@/components/common/buttons/FullButton";


const TopComponent = () => {
    return (
        <Wrapper className={style.wrapper}>
            <div className={style.topComponent}>
                <div className={style.leftBlock}>
                    <Header isMainPage={true} currentPage={"Разработка сайтов"}/>
                    <div className={style.titleBlock}></div>
                    <div className={style.textDescription}></div>
                    <div className={style.consultationBlock}></div>
                    <FullButton>Заполнить анкету</FullButton>
                </div>
                <div className={style.rightBlock}></div>
            </div>
            {/*<Image src={ground} alt={"ground"} width={1440} height={770} className={style.ground}/>
            <Header isMainPage={true} currentPage={"Разработка сайтов"}/>*/}

        </Wrapper>
    );
};

export default TopComponent;