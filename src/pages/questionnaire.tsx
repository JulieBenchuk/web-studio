import React from 'react';
import Head from "next/head";
import style from "@/styles/Home.module.scss";
import TopBlock from "@/components/common/topBlock/TopBlock";
import bgImage from "@/assets/svg/anketaBg.svg";

const Questionnaire = () => {
    return (
        <>
            <Head>
                <title>Questionnaire</title>
            </Head>
            <main className={style.main}>
                <TopBlock currentPage={"Анкета"}
                          serviceDescription={"— Готовим предложение в течении 2 рабочих дней!"}
                          backgroundImage={bgImage.src}
                />
            </main>

        </>
    );
};

export default Questionnaire;