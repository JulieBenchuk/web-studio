import React from 'react';
import Head from "next/head";
import style from "@/styles/Home.module.scss";
import TopBlock from "@/components/common/topBlock/TopBlock";
import bgImage from "@/assets/svg/supportBg.svg";
import {WeDo} from "@/components/weDo/WeDo";
import {support} from "@/components/reviews/moc";

const Support = () => {
    return (
        <>
            <Head>
                <title>Support</title>
            </Head>
            <main className={style.main}>
                <TopBlock currentPage={"поддержка сайта"}
                          serviceDescription={"— С гарантированным временем реакции и фиксированным сроком выполнения задач"}
                          backgroundImage={bgImage.src} button={"Заполнить анкету"}
                          buttonDescription={"Заполните анкету, чтобы получить бесплатную консультацию"}
                          buttonImage={"gift"}
                />
                <WeDo weDoData={support}/>
            </main>
        </>
    );
};

export default Support;