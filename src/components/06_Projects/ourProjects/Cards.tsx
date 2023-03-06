import React, {useEffect} from 'react';
import style from "@/styles/components/ourProjects.module.scss";
import CardModal from "@/components/06_Projects/ourProjects/CardModal";
import {PortfolioType} from "@/components/06_Projects/ourProjects/moc";
import {useWindowSize} from "@/hooks/useWindowSize";

const Cards: React.FC<{ portfolio: PortfolioType[], setIdCallBack: (id: string) => void, id: string, setPageSize: (size: number) => void }> = ({
                                                                                                                                                   portfolio,
                                                                                                                                                   setIdCallBack,
                                                                                                                                                   id,
                                                                                                                                                   setPageSize
                                                                                                                                               }) => {
    const size = useWindowSize();

    useEffect(() => {
        console.log(portfolio)
        if (size.width !== undefined) {
            if (size.width > 1440) {
                setPageSize(12)
            }
            if (size.width < 1440 && size.width > 965) {
                setPageSize(8)
            }
            if (size.width < 965) {
                setPageSize(4)
            }
        }
    }, [size])

    const onMouseHandler = (id: string) => {
        setIdCallBack(id)
    }

    return (
        <>
            {portfolio.map((el, i) =>
                <div key={i}>
                    <img src={el.img}
                         alt="image"
                         onMouseEnter={() => onMouseHandler(el.id)}
                         onClick={() => onMouseHandler(el.id)}
                         onMouseLeave={() => onMouseHandler('')}
                         className={style.img}
                    />
                    {id === el.id && <CardModal el={el}/>}
                </div>
            )}
        </>
    );
};

export default Cards;