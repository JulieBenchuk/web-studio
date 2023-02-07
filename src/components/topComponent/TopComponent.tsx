import React from 'react';
import Image from "next/image";
import ground from "@/assets/svg/ground.svg";
import Header from "@/components/common/header/Header";
import Wrapper from "@/components/common/wrapper";
import style from '../../styles/components/topComponent.module.scss'
import ColorBlock from "@/components/topComponent/colorBlock/ColorBlock";


const TopComponent = () => {
    return (
        <Wrapper className={style.wrapper}>
            <Image src={ground} alt={"ground"} width={1440} height={770} className={style.ground}/>
            <Header isMainPage={true} currentPage={"Разработка сайтов"}/>
            <ColorBlock/>
        </Wrapper>
    );
};

export default TopComponent;