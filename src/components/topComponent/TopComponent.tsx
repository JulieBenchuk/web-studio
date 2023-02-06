import React from 'react';
import Image from "next/image";
import ground from "@/assets/svg/ground.svg";
import FullButton from "@/components/common/buttons/FullButton";
import Header from "@/components/common/header/Header";
import Wrapper from "@/components/common/wrapper";
import style from '../../styles/components/topComponent.module.scss'

const TopComponent = () => {
    return (
        <Wrapper className={style.wrapper}>
            <Image src={ground} alt={"ground"} className={style.ground}/>
            <Header isMainPage={true} currentPage={"Разработка сайтов"}/>
            <FullButton className={style.button}>Заполнить анкету</FullButton>

        </Wrapper>
    );
};

export default TopComponent;