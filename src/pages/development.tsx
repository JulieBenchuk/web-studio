import React from 'react';
import TopBlock from "@/components/common/topBlock/TopBlock";
import Head from "next/head";
import style from "@/styles/Home.module.scss";
import StagesWork from "@/components/common/stagesWork/stagesWork";

const Development: React.FC<{}> = ({}) => {

    return (
        <>
            <Head>
                <title>Development</title>
            </Head>
            <main className={style.main}>
                <TopBlock/>
                <StagesWork
                    text={'Проведение брифинга, обсуждение проекта, уточнение деталей, разработка сметы проекта. Подготовка функциональной карты проекта и договора. Составление ТЗ. '}
                    title={'Подготовка'} number={1}/>
            </main>

        </>
    );
};

export default Development;