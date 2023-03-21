import React from 'react';
import {GetStaticProps, NextPage} from 'next'
import style from '@/styles/Home.module.scss'
import OurProjects from "@/components/06_Projects/ourProjects/OurProjects";
import {MainLayout} from "@/components/layout/MainLayout";

export type PortfolioType<T = { title: string, description: string }> = {
    id: string,
    img?: string
    title: string,
    request: T,
    deadlines: T,
    services: T,
    frontEnd: T,
    backEnd: T,
    design: T,
    link: string
}

export interface PortfolioPageProps {
    data: PortfolioType[];
}

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch("http://localhost:4200/portfolio")
    const data = await response.json()

    return {
        props: {
            data
        }
    };
};

const Portfolio: NextPage<PortfolioPageProps> = ({data}) => {
    return (
        <>
            <MainLayout title={"Portfolio"} isMainPage={false} currentPage={'Наши проекты'}>
                <main className={style.main}>
                    <OurProjects portfolio={data}/>
                </main>
            </MainLayout>
        </>
    );
};


export default Portfolio;