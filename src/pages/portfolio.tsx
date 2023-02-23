import React from 'react';
import Head from "next/head";
import {Footer} from "@/components/common/footer/Footer";
import Header from "@/components/common/header/Header";
import style from '@/styles/Home.module.scss'
import OurProjects from "@/components/06_Projects/ourProjects/OurProjects";

const Portfolio: React.FC<{}> = ({}) => {
    return (
        <>
            <Head>
                <title>Portfolio</title>
            </Head>
            <main className={style.main}>
                <Header isMainPage={false} currentPage={'Наши проекты'}/>
                <OurProjects/>
                <Footer/>
            </main>

        </>
    );
};

export default Portfolio;