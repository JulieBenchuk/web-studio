import React from 'react';
import SmallTitle from "@/components/common/Titles/SmallTitle";
import Wrapper from "@/components/common/wrapper";
import style from './../../../styles/components/callBackMe.module.scss'
import FullButton from "@/components/common/buttons/FullButton";

const CallBackMe = () => {
    return (
        <Wrapper className={style.wrapper}>
            <SmallTitle children={"Остались вопросы?"} className={style.title}/>
            <div className={style.form}>
                <div className={style.column}>
                    <div className={style.name}>name</div>
                    <p className={style.description}>Оставьте свои контакты и наши специалисты с вами свяжутся</p>
                </div>
                <div className={style.column}>
                    <div className={style.phone}>+37544 5590660</div>
                    <FullButton>Заказать звонок</FullButton>
                </div>
            </div>
        </Wrapper>
    );
};

export default CallBackMe;