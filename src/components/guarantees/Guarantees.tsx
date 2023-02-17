import React from 'react';
import Wrapper from "@/components/common/wrapper";
import SmallTitle from "@/components/common/Titles/SmallTitle";
import style from '../../styles/components/guarantees.module.scss'
import {guaranteesData, guaranteesPromiseData} from "../guarantees/MocGuarantees";


const Guarantees = () => {
    return (
        <Wrapper className={style.wrapper}>
            <SmallTitle>Гарантии</SmallTitle>
            <h3 className={style.title}>Мы не даем пустых обещаний</h3>
            <div className={style.bigBlock}>
                <div className={style.astroBg}></div>
                <div className={style.items}>
                    {guaranteesData.map(el =>
                        <div className={style.item} key={el.id}>
                            <h3 className={style.itemTitle}>{el.title}</h3>
                            <p className={style.itemDescription}>{el.description}</p>
                        </div>
                    )}
                </div>
            </div>
            <h3 className={style.title}>Но можем гарантировать</h3>
            <div className={style.smallBlock}>
                <div className={style.videoBg}>
                    <div className={style.cards}>
                        {guaranteesPromiseData.map(el =>
                            <div className={style.card} key={el.id}>
                                <h5 className={style.cardTitle}>{el.title}</h5>
                                <p className={style.cardDescription}>{el.description}</p>
                            </div>)}
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Guarantees;