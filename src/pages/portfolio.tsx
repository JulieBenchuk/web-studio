import React from 'react';
import Head from "next/head";
import {Footer} from "@/components/common/footer/Footer";
import Header from "@/components/common/header/Header";
import style from '@/styles/Home.module.scss'
import ReservedOurProjects from "@/components/06_Projects/ourProjects/reservedOurProjects";
import {GetStaticProps, NextPage} from 'next'

export interface PortfolioPageProps {
    data: string[];
}


export const getStaticProps: GetStaticProps = async () => {
    const res = ['sss', 'ssss', 'sasdasdasd']
    return {
        props: {
            data: res
        }
    };
};

const Portfolio: NextPage<PortfolioPageProps> = ({data}) => {
    return (
        <>
            <Head>
                <title>Portfolio</title>
            </Head>
            <main className={style.main}>
                <Header isMainPage={false} currentPage={'Наши проекты'}/>
                <ReservedOurProjects portfolio={data}/>
                <Footer/>
            </main>

        </>
    );
};

export default Portfolio;