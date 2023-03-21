import React from 'react';
import {GetStaticProps, NextPage} from "next";
import style from "@/styles/Home.module.scss";
import {MainLayout} from "@/components/layout/MainLayout";
import TopBlock from "@/components/common/topBlock/TopBlock";
import DesignerTasks from "@/components/04_Desing/DesignerTasks";
import CallBackMe from "@/components/common/callBackMe/CallBackMe";
import OurWorks from "@/components/common/ourWorks/OurWorks";
import HowDoWeDoIt from "@/components/04_Desing/howDoWeDoIt/HowDoWeDoIt";
import WhatIsDesignFor from "@/components/04_Desing/whatIsDesignFor/WhatIsDesignFor";
import {WeDo} from "@/components/common/weDo/WeDo";
import {design} from "@/components/01_Main/reviews/mock";
import {PortfolioPageProps} from "@/pages/portfolio";
import bgImage from "@/assets/img/designBg.png";

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch("http://localhost:4200/portfolio")
    const data = await response.json()

    return {
        props: {
            data
        }
    };
};
const Design: NextPage<PortfolioPageProps> = ({data}) => {
    return (
        <>
            <MainLayout title={"Design"} isMainPage={false} currentPage={"UI/UX Дизайн"}>
                <main className={style.main}>
                    <TopBlock currentPage={"UI/UX Дизайн"}
                              serviceDescription={"— имидж и стиль. Грамотная концепция формирует первое впечатление. Это всегда требует больше внимания"}
                              backgroundImage={bgImage.src} button={"Заполнить анкету"}
                              buttonDescription={"Заполните анкету, чтобы получить бесплатную консультацию"}
                              buttonImage={"gift"}
                    />
                    <WeDo weDoData={design}/>
                    <DesignerTasks/>
                    <HowDoWeDoIt/>
                    <WhatIsDesignFor/>
                    <OurWorks isButton={true} portfolio={data} className={style.OurWorks}/>
                    <CallBackMe/>
                </main>
            </MainLayout>
        </>
    );
};

export default Design;