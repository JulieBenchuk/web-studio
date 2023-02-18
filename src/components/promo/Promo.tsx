import React from 'react';
import Wrapper from "@/components/common/wrapper";
import SmallTitle from "@/components/common/Titles/SmallTitle";
import style from "../../styles/components/promo.module.scss";
import {PromoData} from "@/components/promo/MocPromo";
import Image from "next/image";

const Promo = () => {
    return (
        <Wrapper>
            <SmallTitle className={style.title}>Что мы продвигаем</SmallTitle>
            <div className={style.items}>
                {PromoData.map(el=><div key={el.id}>
                    <Image src={el.img} alt={''}/>
                    <h5>{el.title}</h5>
                    <p>{el.description}</p>
                </div>)}
            </div>
        </Wrapper>
    );
};

export default Promo;