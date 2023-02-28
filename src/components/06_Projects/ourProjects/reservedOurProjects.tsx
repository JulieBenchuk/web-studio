import React from 'react';
import style from "@/styles/components/ourProjects.module.scss";
import MainTitle from "@/components/common/Titles/MainTitle";
import Wrapper from "@/components/common/wrapper";
import LinkBtn from "@/components/common/buttons/LinkBtn";
import {GetStaticProps, NextPage} from 'next'

export interface HomePageProps {
    data: string[];
}


export const getStaticProps: GetStaticProps = async () => {
    const res = ['sss', 'ssss']
    return {
        props: {
            data: res
        }
    };
};

const ReservedOurProjects: NextPage<HomePageProps> = ({data}) => {
    console.log(data)
    return (
        <Wrapper className={style.wrapper}>
            <MainTitle title={'Наши Проекты'} className={style.title}/>
            <p className={style.subTitle}>Здесь может оказаться ваш проект</p>
            <div className={style.swiperBlock}>
                {data && data.map((el, i) =>
                    <div key={i}>{el}</div>
                )}
            </div>
            <LinkBtn className={style.button}>Загрузить</LinkBtn>
        </Wrapper>
    );
};

export default ReservedOurProjects;