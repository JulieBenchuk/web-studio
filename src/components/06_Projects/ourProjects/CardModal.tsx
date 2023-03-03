import React from 'react';
import {PortfolioType} from "@/components/06_Projects/ourProjects/moc";
import style from '@/styles/components/ourProjects.module.scss'

const CardModal: React.FC<{ el: PortfolioType }> = ({el}) => {
    return (
        <div className={style.items}>
            <button className={style.closeBtn}>x</button>
            <h4 className={style.itemsTitle}>{el.title}</h4>
            <div className={style.item}>
                <h6 className={style.itemTitle}>{el.request.title}</h6>
                <p className={style.itemDescription}>{el.request.description}</p>
            </div>
            <div className={style.item}>
                <h6 className={style.itemTitle}>{el.deadlines.title}</h6>
                <p className={style.itemDescription}>{el.deadlines.description}</p>
            </div>
            <div className={style.item}>
                <h6 className={style.itemTitle}>{el.services.title}</h6>
                <p className={style.itemDescription}>{el.services.description}</p>
            </div>
            <div className={style.item}>
                <h6 className={style.itemTitle}>{el.frontEnd.title}</h6>
                <p className={style.itemDescription}>{el.frontEnd.description}</p>
            </div>
            <div className={style.item}>
                <h6 className={style.itemTitle}>{el.backEnd.title}</h6>
                <p className={style.itemDescription}>{el.backEnd.description}</p>
            </div>
            <div className={style.item}>
                <h6 className={style.itemTitle}>{el.design.title}</h6>
                <p className={style.itemDescription}>{el.design.description}</p>
            </div>
            <button className={style.btn}>Перейти на Сайт</button>
        </div>
    );
};

export default CardModal;