import React from 'react';
import Wrapper from "@/components/common/wrapper";
import Header from "@/components/common/header/Header";
import style from "./../../../styles/components/topBlock.module.scss"
import bgImage from "../../../assets/img/developmentTopBg.png"
import MainTitle from "@/components/common/Titles/MainTitle";

const TopBlock: React.FC<{}> = () => {
    return (
        <Wrapper className={style.wrapper}>
            <Header isMainPage={false} currentPage={"Разработка сайтов"}/>
            <img src={bgImage.src} alt="background" className={style.bgImage}/>
            <MainTitle title={"Разработка сайтов"}/>


        </Wrapper>
    );
};

export default TopBlock;