import React from 'react';
import style from "@/styles/Home.module.scss";
import bgImage from "@/assets/img/promotionBg.png";
import TopBlock from "@/components/common/topBlock/TopBlock";
import WhoNeedPromotion from "@/components/03_Promotion/WhoNeedPromotion/WhoNeedPromotion";
import CallBackMe from "@/components/common/callBackMe/CallBackMe";
import RunningString from "@/components/common/runningString/RunningString";
import OurBenefits from "@/components/common/ourBenefits/OurBenefits";
import Guarantees from "@/components/03_Promotion/guarantees/Guarantees";
import Promo from "@/components/03_Promotion/promo/Promo";
import {WeDo} from "@/components/common/weDo/WeDo";
import {MainLayout} from "@/components/layout/MainLayout";
import {promotion} from "@/components/01_Main/reviews/mock";

const Promotion = () => {
    return (
        <>
            <MainLayout isMainPage={false} currentPage={"Интернет продвижение"} title={"Promotion"}>
                <main className={style.main}>
                    <TopBlock currentPage={"Интернет продвижение"}
                              serviceDescription={"— Для быстрого привлечения ваших клиентов и увеличении конверсии"}
                              backgroundImage={bgImage.src} button={"Заполнить анкету"}
                              buttonDescription={"Заполните анкету, чтобы получить бесплатную консультацию"}
                              isMainTitleWide={true} buttonImage={"gift"}
                    />
                    <WeDo weDoData={promotion}/>
                    <OurBenefits/>
                    <Guarantees/>
                    <WhoNeedPromotion/>
                    <RunningString/>
                    <Promo/>
                    <CallBackMe/>
                </main>
            </MainLayout>

        </>
    );
};

export default Promotion;