import React from 'react';
import TopBlock from "@/components/common/topBlock/TopBlock";
import Head from "next/head";
import style from "@/styles/Home.module.scss";
import StagesOfWork from "@/components/stagesOfWork/stagesOfWork";
import bgImage from "../assets/svg/developmentBg.svg"
import ToolsAndTechnologies from "@/components/02_Development/ToolsAndTechnologies/ToolsAndTechnologies";
import OurBenefits from "@/components/common/ourBenefits/OurBenefits";

const Development: React.FC<{}> = ({}) => {

    return (
        <>
            <Head>
                <title>Development</title>
            </Head>
            <main className={style.main}>
                <TopBlock currentPage={"Разработка сайтов"}
                          serviceDescription={"— сайты, построенные на современных технологиях и фреймворках. Понятный\n" +
                              "                frontend для пользователя, который подключается к CMS, и надежный backend для стабильной работы\n" +
                              "                продукта."}
                          backgroundImage={bgImage.src} button={"Рассчитать стоимость"}
                          buttonDescription={"Финальная стоимость работы всегда напрямую зависит от объёма,\n" +
                              "                    необходимых технических решений и уровня проработки дизайна проекта."}
                          isCostBlockWide={true}
                          buttonImage={"coins"}
                />
                <OurBenefits/>
                <StagesOfWork/>
                <ToolsAndTechnologies/>
            </main>

        </>
    );
};

export default Development;