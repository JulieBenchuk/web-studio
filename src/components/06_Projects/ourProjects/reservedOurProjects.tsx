import React from 'react';
import style from "@/styles/components/ourProjects.module.scss";
import MainTitle from "@/components/common/Titles/MainTitle";
import Wrapper from "@/components/common/wrapper";
import LinkBtn from "@/components/common/buttons/LinkBtn";

export async function getStaticProps() {
    return {
        props: {}, // will be passed to the page component as props
    }
}

const ReservedOurProjects = () => {
    return (
        <Wrapper className={style.wrapper}>
            <MainTitle title={'Наши Проекты'} className={style.title}/>
            <p className={style.subTitle}>Здесь может оказаться ваш проект</p>
            <div className={style.swiperBlock}>

            </div>
            <LinkBtn className={style.button}>Загрузить</LinkBtn>
        </Wrapper>
    );
};

export default ReservedOurProjects;