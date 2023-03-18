import React from 'react';
import {GetStaticProps, NextPage} from 'next'
import style from '@/styles/Home.module.scss'
import OurProjects from "@/components/06_Projects/ourProjects/OurProjects";
import {MainLayout} from "@/components/layout/MainLayout";
import {PortfolioType} from "@/components/06_Projects/ourProjects/mock";
import {Api} from "@/pages/api/api";

export interface PortfolioPageProps {
    data: PortfolioType[];
}


export const getStaticProps: GetStaticProps = async () => {
    const res = await Api.portfolioAPI()
    return {
        props: {
            data: res
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