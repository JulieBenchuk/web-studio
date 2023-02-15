import React from 'react';
import Head from "next/head";
import style from "@/styles/Home.module.scss";
import TopBlock from "@/components/common/topBlock/TopBlock";
import bgImage from "@/assets/svg/promotionBg.svg";

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
            </main>

        </>
    );
};

export default Promotion;