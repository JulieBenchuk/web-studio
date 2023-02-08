import Head from 'next/head'
import React from "react";
import style from '../styles/Home.module.scss'
import StagesSlider from "@/components/stagesSlider/StagesSlider";

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
                <StagesSlider/>
            </main>
        </>
    )
}
