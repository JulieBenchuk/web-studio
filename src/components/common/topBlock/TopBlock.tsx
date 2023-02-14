import React from 'react';
import Wrapper from "@/components/common/wrapper";
import Header from "@/components/common/header/Header";
import style from "./../../../styles/components/topBlock.module.scss"
import MainTitle from "@/components/common/Titles/MainTitle";
import FullButton from "@/components/common/buttons/FullButton";

const TopBlock: React.FC<{ currentPage: string, serviceDescription: string, backgroundImage: string, button: string, buttonDescription: string }> = ({
                                                                                                                                                         currentPage,
                                                                                                                                                         serviceDescription,
                                                                                                                                                         backgroundImage,
                                                                                                                                                         button,
                                                                                                                                                         buttonDescription
                                                                                                                                                     }) => {
    return (
        <Wrapper className={style.wrapper}>
            <Header isMainPage={false} currentPage={currentPage}/>
            <div className={style.mainTitleBlock}>
                <MainTitle title={currentPage}/>
            </div>
            <div className={style.description}>{serviceDescription}</div>
            <div className={style.bgImageBlock}>
                <img src={backgroundImage} alt="background" className={style.bgImage}/>
            </div>
            <div className={style.costBlock}>
                <div>
                    <FullButton className={style.button}> {button} </FullButton>
                </div>
                <span className={style.costDescription}>{buttonDescription}</span>
            </div>


        </Wrapper>
    );
};

export default TopBlock;