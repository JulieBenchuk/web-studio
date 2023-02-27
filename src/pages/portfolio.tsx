import React from 'react';
import Head from "next/head";
import {Footer} from "@/components/common/footer/Footer";
import Header from "@/components/common/header/Header";
import style from '@/styles/Home.module.scss'
import ReservedOurProjects from "@/components/06_Projects/ourProjects/reservedOurProjects";


const Portfolio: React.FC<{}> = ({}) => {
    return (
        <>
            <Head>
                <title>Portfolio</title>
            </Head>
            <main className={style.main}>
                <Header isMainPage={false} currentPage={'Наши проекты'}/>
                <ReservedOurProjects/>
                <Footer/>
            </main>

        </>
    );
};

export default Portfolio;