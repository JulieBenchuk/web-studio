import React from 'react';
import TopBlock from "@/components/common/topBlock/TopBlock";
import bgImage from "../assets/img/developmentBg.png"
import StagesOfWork from "@/components/02_Development/stagesOfWork/stagesOfWork";
import ToolsAndTechnologies from "@/components/02_Development/ToolsAndTechnologies/ToolsAndTechnologies";
import OurBenefits from "@/components/common/ourBenefits/OurBenefits";
import CallBackMe from "@/components/common/callBackMe/CallBackMe";
import {WeDo} from "@/components/common/weDo/WeDo";
import {development} from "@/components/01_Main/reviews/mock";
import {MainLayout} from "@/components/layout/MainLayout";

const Development = ({}) => {

    return (
        <>
            <MainLayout isMainPage={false} currentPage={"Разработка сайтов"} title={"Development"}>
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
                <WeDo weDoData={development}/>
                <OurBenefits/>
                <StagesOfWork/>
                <ToolsAndTechnologies/>
                <CallBackMe/>
            </MainLayout>
        </>
    );
};

export default Development;