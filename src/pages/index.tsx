import Head from 'next/head'
import React from "react";
import style from '../styles/Home.module.scss'
import Services from "@/components/services/Services";
import {Footer} from "@/components/common/footer/Footer";
import OurWorks from "@/components/common/ourWorks/OurWorks";
import StagesSlider from "@/components/stagesSlider/StagesSlider";
import {Reviews} from "@/components/reviews/Reviews";

export default function Home() {
    return (
        <>
            <Head>
                <title>Silevans</title>
                <meta name="description" content="Silevans Web-Studio"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={style.main}>
                <Services/>
                <OurWorks/>
                <StagesSlider/>
                <Reviews/>
                <Footer/>
            </main>
        </>
    )
}
