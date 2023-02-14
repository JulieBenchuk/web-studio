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
            <div className={style.mainTitleBlock}>
                <MainTitle title={"Разработка сайтов"}/>
            </div>
            <div className={style.description}>— сайты, построенные на современных технологиях и фреймворках. Понятный
                frontend для пользователя, который подключается к CMS, и надежный backend для стабильной работы
                продукта.
            </div>
            <div className={style.bgImageBlock}>
                <img src={bgImage.src} alt="background" className={style.bgImage}/>
            </div>


        </Wrapper>
    );
};

export default TopBlock;