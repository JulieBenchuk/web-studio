import React from 'react';
import Wrapper from "@/components/common/wrapper";
import SmallTitle from "@/components/common/Titles/SmallTitle";
import style from "../../styles/components/promo.module.scss";

const Promo = () => {
    return (
        <Wrapper>
            <SmallTitle className={style.title}>Что мы продвигаем</SmallTitle>
            <div className={style.items}>

            </div>
        </Wrapper>
    );
};

export default Promo;