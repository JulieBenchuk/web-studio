import React from 'react';
import Head from "next/head";
import style from "@/styles/Home.module.scss";
import bgImage from "@/assets/img/designBg.png";
import TopBlock from "@/components/common/topBlock/TopBlock";
import DesignerTasks from "@/components/04_Desing/DesignerTasks";
import CallBackMe from "@/components/common/callBackMe/CallBackMe";
import {Footer} from "@/components/common/footer/Footer";
import OurWorks from "@/components/common/ourWorks/OurWorks";
import HowDoWeDoIt from "@/components/howDoWeDoIt/HowDoWeDoIt";
import WhatIsDesignFor from "@/components/whatIsDesignFor/WhatIsDesignFor";
import Header from "@/components/common/header/Header";
import {WeDo} from "@/components/weDo/WeDo";
import {design} from "@/components/reviews/moc";

const Design: React.FC<{}> = () => {
    return (
        <>
            <Head>
                <title>Design</title>
            </Head>
            <main className={style.main}>
                <Header isMainPage={false} currentPage={"UI/UX Дизайн"}/>
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
                <OurWorks/>
                <CallBackMe/>
                <Footer/>
            </main>
        </>
    );
};

export default Design;