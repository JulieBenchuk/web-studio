import React from 'react';
import style from "@/styles/Home.module.scss";
import {MainLayout} from "@/components/layout/MainLayout";
import TopBlock from "@/components/common/topBlock/TopBlock";
import QuestionnaireForm from "@/components/05_Questionnaire/QuestionnaireForm";
import bgImage from "@/assets/img/quest_top.png";

const Questionnaire = () => {
    return (
        <>
            <MainLayout title={"Questionnaire"} isMainPage={false} currentPage={"Анкета"}>
                <main className={style.main}>
                    <TopBlock currentPage={"Анкета"}
                              serviceDescription={"— Готовим предложение в течении 2 рабочих дней!"}
                              backgroundImage={bgImage.src} isQuestionnairePage={true}
                    />
                    <QuestionnaireForm/>
                </main>
            </MainLayout>

        </>
    );
};

export default Questionnaire;