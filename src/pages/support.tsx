import React from 'react';
import style from "@/styles/Home.module.scss";
import {MainLayout} from "@/components/layout/MainLayout";
import TopBlock from "@/components/common/topBlock/TopBlock";
import {WeDo} from "@/components/common/weDo/WeDo";
import bgImage from "@/assets/img/supportBg.png";
import {support} from "@/components/01_Main/reviews/mock";

const Support = () => {
    return (
        <>
            <MainLayout title={"Support"} isMainPage={false} currentPage={"Поддержка сайта"}>
                <main className={style.main}>
                    <TopBlock currentPage={"Поддержка сайта"}
                              serviceDescription={"— С гарантированным временем реакции и фиксированным сроком выполнения задач"}
                              backgroundImage={bgImage.src} button={"Заполнить анкету"}
                              buttonDescription={"Заполните анкету, чтобы получить бесплатную консультацию"}
                              buttonImage={"gift"}
                    />
                    <WeDo weDoData={support}/>
                </main>
            </MainLayout>
        </>
    );
};

export default Support;