import React, {ReactNode} from 'react';
import style from "@/styles/Home.module.scss";
import Head from "next/head";
import Header from "@/components/common/header/Header";
import {Footer} from "@/components/common/footer/Footer";

export const MainLayout: React.FC<{ children: ReactNode, isMainPage: boolean, currentPage: string, title: string }> = ({
                                                                                                                           children,
                                                                                                                           isMainPage,
                                                                                                                           currentPage,
                                                                                                                           title
                                                                                                                       }) => {
    return (
        <>
            <Head>
                <title>{title} | Silevans</title>
                <meta name="description" content="Silevans Web-Studio"/>
                <meta name="keywords" content="web,web studio, seo, development, site, website, promotion, интернет продвижение, разработка сайтов, СЕО оптимизация, веб дизайн"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={style.main}>
                <Header isMainPage={isMainPage} currentPage={currentPage}/>
                {children}
                <Footer/>
            </main>
        </>
    );
};