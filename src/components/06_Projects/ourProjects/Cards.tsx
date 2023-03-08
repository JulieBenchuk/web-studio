import React, {useEffect, useState} from 'react';
import style from "@/styles/components/ourProjects.module.scss";
import CardModal from "@/components/06_Projects/ourProjects/CardModal";
import {PortfolioType} from "@/components/06_Projects/ourProjects/moc";
import {useWindowSize} from "@/hooks/useWindowSize";
import LinkBtn from "@/components/common/buttons/LinkBtn";

const Cards: React.FC<{ portfolio: PortfolioType[], setIdCallBack: (id: string) => void, id: string, setPageSize: (size: number) => void, pageSize: number }> = ({
                                                                                                                                                                     portfolio,
                                                                                                                                                                     setIdCallBack,
                                                                                                                                                                     id,
                                                                                                                                                                     setPageSize,
                                                                                                                                                                     pageSize
                                                                                                                                                                 }) => {
    const size = useWindowSize();
    const [showModal, setShowModal] = useState(false)
    const [showGlass, setShowGlass] = useState(false)

    useEffect(() => {
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

    const onItemHandler = (id: string) => {
        showGlassHandler(true)
        setIdCallBack(id)
    }
    const showGlassHandler = (open: boolean) => {
        setShowGlass(open)
    }
    const showModalHandler = (open: boolean) => {
        setShowGlass(!showGlass)
        setShowModal(open)
    }

    return (
        <>
            {portfolio.map((el, i) =>
                <div key={i} className={style.item}>
                    <img src={el.img}
                         alt="image"
                         onMouseEnter={() => onItemHandler(el.id)}
                         className={style.img}
                    />
                    {id === el.id && showGlass &&
                        <div className={style.glass}
                             onMouseLeave={() => showGlassHandler(false)}
                        >
                            <h5>{el.title}</h5>
                            <p>{el.services.description}</p>
                            <LinkBtn onClick={() => showModalHandler(true)}>Подробнее</LinkBtn>
                        </div>}
                    {showModal && id === el.id &&
                        <div className={style.wrapperModal}
                             onClick={(e) => (e.currentTarget === e.target) && showModalHandler(false)}
                        >
                            <CardModal el={el}/>
                        </div>}
                </div>
            )}
        </>
    );
};

export default Cards;