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
                    <input type="text" placeholder="Иванов Иван Иванович"
                           className={style.name}
                    />
                    <p className={style.description}>Оставьте свои контакты и наши специалисты с вами свяжутся</p>
                </div>
                <div className={style.column}>
                    <input type="tel" placeholder="+7 (___) ___ __ __"
                           className={style.phone}
                    />
                    <FullButton>Заказать звонок</FullButton>
                </div>
            </div>
        </Wrapper>
    );
};

export default CallBackMe;