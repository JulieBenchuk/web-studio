import React from "react";
import {GetStaticProps, NextPage} from "next";
import style from '../styles/Home.module.scss'
import {MainLayout} from "@/components/layout/MainLayout";
import TopComponent from "@/components/01_Main/topComponent/TopComponent";
import Services from "@/components/01_Main/services/Services";
import StagesSlider from "@/components/01_Main/stagesSlider/StagesSlider";
import RunningString from "@/components/common/runningString/RunningString";
import CallBackMe from "@/components/common/callBackMe/CallBackMe";
import OurWorks from "@/components/common/ourWorks/OurWorks";
import {Reviews} from "@/components/01_Main/reviews/Reviews";
import Comfortable from "@/components/01_Main/comfortable/Comfortable";
import {PortfolioPageProps} from "@/pages/portfolio";

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch("http://localhost:4200/portfolio")
    const data = await response.json()

    return {
        props: {
            data
        }
    };
};

const Home: NextPage<PortfolioPageProps> = ({data}) => {
    return (
        <>
            <MainLayout title={"WEB STUDIO"} isMainPage={true} currentPage={"Разработка сайтов"}>
                <main className={style.main}>
                    <TopComponent/>
                    <RunningString/>
                    <Services/>
                    <Comfortable/>
                    <OurWorks isButton={true} portfolio={data}/>
                    <StagesSlider/>
                    <Reviews/>
                    <CallBackMe/>
                </main>
            </MainLayout>
        </>
    )
}

export default Home;
