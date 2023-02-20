import React from 'react';
import Head from "next/head";
import style from "@/styles/Home.module.scss";
import TopBlock from "@/components/common/topBlock/TopBlock";
import bgImage from "@/assets/img/webDesignBg.png";
import DesignerTasks from "@/components/04_Desing/DesignerTasks";
import CallBackMe from "@/components/common/callBackMe/CallBackMe";
import {Footer} from "@/components/common/footer/Footer";

const Design: React.FC<{}> = () => {
    return (
        <>
            <Head>
                <title>Design</title>
            </Head>
            <main className={style.main}>
                <TopBlock currentPage={"UI/UX Дизайн"}
                          serviceDescription={"— имидж и стиль. Грамотная концепция формирует первое впечатление. Это всегда требует больше внимания"}
                          backgroundImage={bgImage.src} button={"Заполнить анкету"}
                          buttonDescription={"Заполните анкету, чтобы получить бесплатную консультацию"}
                          buttonImage={"gift"}
                />
                <DesignerTasks/>
                <CallBackMe/>
                <Footer/>
            </main>
        </>
    );
};

export default Design;