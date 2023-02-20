import React from 'react';
import Head from "next/head";
import style from "@/styles/Home.module.scss";
import bgImage from "@/assets/svg/promotionBg.svg";
import TopBlock from "@/components/common/topBlock/TopBlock";
import WhoNeedPromotion from "@/components/03_Promotion/WhoNeedPromotion/WhoNeedPromotion";
import CallBackMe from "@/components/common/callBackMe/CallBackMe";
import {Footer} from "@/components/common/footer/Footer";
import RunningString from "@/components/runningString/RunningString";

const Promotion: React.FC<{}> = () => {
    return (
        <>
            <Head>
                <title>Promotion</title>
            </Head>
            <main className={style.main}>
                <TopBlock currentPage={"Интернет продвижение"}
                          serviceDescription={"— Для быстрого привлечения ваших клиентов и увеличении конверсии"}
                          backgroundImage={bgImage.src} button={"Заполнить анкету"}
                          buttonDescription={"Заполните анкету, чтобы получить бесплатную консультацию"}
                          isMainTitleWide={true} buttonImage={"gift"}
                />
                <WhoNeedPromotion/>
                <RunningString/>
                <CallBackMe/>
                <Footer/>
            </main>

        </>
    );
};

export default Promotion;