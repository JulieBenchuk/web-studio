import React from 'react';
import Wrapper from "@/components/common/wrapper";
import Header from "@/components/common/header/Header";
import style from "./../../../styles/components/topBlock.module.scss"

const TopBlock: React.FC<{}> = () => {
    return (
        <Wrapper className={style.wrapper}>
            <Header isMainPage={false} currentPage={"Разработка сайтов"}/>

        </Wrapper>
    );
};

export default TopBlock;