import React from 'react';
import Wrapper from "@/components/common/wrapper";
import style from "@/styles/components/designerTasks.module.scss"
import spaceman from "@/assets/img/desing_spaceman.png"
import stars from "@/assets/img/desing_stars.png"
import waves from "@/assets/img/desing_waves.png"
import SmallTitle from "@/components/common/Titles/SmallTitle";

const DesignerTasks = () => {
    return (
        <Wrapper className={style.wrapper}>
            <div className={style.content}>
                <SmallTitle className={style.title}>Задачи дизайнера</SmallTitle>
                <div className={style.tasks}>
                    <img src={spaceman.src} alt="design" className={style.spaceman}/>
                    <img src={stars.src} alt="design" className={style.stars}/>
                    <div className={style.topTask}>Выделить компанию на фоне конкурентов</div>
                    <div className={style.leftTask}>сделать сайт запоминающимся</div>
                    <div className={style.rightTask}>Сделать понятный логичный визуал для удобного пользования клиентами
                        бизнеса
                    </div>
                    <div className={style.tasksDescription}>Веб-дизайнер проектирует визуальное представление, а также
                        продумывает наиболее верные решения для подачи информации
                    </div>
                </div>
                <div className={style.visual}>Контент+визуал</div>
            </div>
            {/*<div className={style.background}>
                <img src={waves.src} alt="design" className={style.waves}/>
            </div>*/}

        </Wrapper>
    );
};

export default DesignerTasks;