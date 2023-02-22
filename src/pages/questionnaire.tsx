import React from 'react';
import style from "@/styles/Home.module.scss";
import bgImage from "@/assets/svg/anketaBg.svg";
import Head from "next/head";
import TopBlock from "@/components/common/topBlock/TopBlock";
import QuestionnaireForm from "@/components/05_Questionnaire/QuestionnaireForm";

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
                <QuestionnaireForm/>
            </main>

        </>
    );
};

export default Questionnaire;