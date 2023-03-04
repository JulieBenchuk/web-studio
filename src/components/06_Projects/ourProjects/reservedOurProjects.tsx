import React, {useEffect, useState} from 'react';
import style from "@/styles/components/ourProjects.module.scss";
import MainTitle from "@/components/common/Titles/MainTitle";
import Wrapper from "@/components/common/wrapper";
import LinkBtn from "@/components/common/buttons/LinkBtn";
import {PortfolioType} from "@/components/06_Projects/ourProjects/moc";
import CardModal from "@/components/06_Projects/ourProjects/CardModal";
import ReactPaginate from "react-paginate";

const ReservedOurProjects: React.FC<{ portfolio: PortfolioType[] }> = ({portfolio}) => {
    const [id, setId] = useState('')
    const [slice, setSliced] = useState(portfolio)
    const [pageSize, setPageSize] = useState(12)
    const pagesCount = Math.ceil(portfolio.length / pageSize); // 100/10
    useEffect(() => {
        paginate(portfolio, 1, pageSize)
    }, [])


    const onMouseHandler = (id: string) => {
        setId(id)
    }

    const paginate = (portfolio: PortfolioType[], pageNumber: number, pageSize: number) => {
        console.log(pageNumber)
        const startIndex = (pageNumber - 1) * pageSize;
        const slice = portfolio.slice(startIndex, startIndex + pageSize);

        setSliced(slice)
    };

    return (
        <Wrapper className={style.wrapper}>
            <MainTitle title={'Наши Проекты'} className={style.title}/>
            <p className={style.subTitle}>Здесь может оказаться ваш проект</p>
            <div className={style.swiperBlock}>
                {slice && slice.map((el, i) =>
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
            <ReactPaginate
                pageCount={pagesCount}
                onPageChange={(selectedItem) => paginate(portfolio, selectedItem.selected + 1, pageSize)}

            />
        </Wrapper>
    );
};

export default ReservedOurProjects;