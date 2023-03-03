import React, {useState} from 'react';
import style from "@/styles/components/ourProjects.module.scss";
import MainTitle from "@/components/common/Titles/MainTitle";
import Wrapper from "@/components/common/wrapper";
import LinkBtn from "@/components/common/buttons/LinkBtn";
import {PortfolioType} from "@/components/06_Projects/ourProjects/moc";
import CardModal from "@/components/06_Projects/ourProjects/CardModal";


const ReservedOurProjects: React.FC<{ portfolio: PortfolioType[] }> = ({portfolio}) => {
    const [id, setId] = useState('')
    console.log(portfolio)


    const onMouseHandler = (id: string) => {
        setId(id)
    }

    return (
        <Wrapper className={style.wrapper}>
            <MainTitle title={'Наши Проекты'} className={style.title}/>
            <p className={style.subTitle}>Здесь может оказаться ваш проект</p>
            <div className={style.swiperBlock}>
                {portfolio && portfolio.map((el, i) =>
                    <div key={i}>
                        <img src={el.img}
                             alt="image"
                             onMouseEnter={() => onMouseHandler(el.id)}
                             onMouseLeave={() => onMouseHandler('')}
                             className={style.img}
                        />
                        {id === el.id && <CardModal el={el}/>}
                    </div>
                )}
            </div>
            <LinkBtn className={style.button}>Загрузить</LinkBtn>
        </Wrapper>
    );
};

export default ReservedOurProjects;