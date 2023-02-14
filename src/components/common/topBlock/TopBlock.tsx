import React from 'react';
import Wrapper from "@/components/common/wrapper";
import Header from "@/components/common/header/Header";
import style from "./../../../styles/components/topBlock.module.scss"
import MainTitle from "@/components/common/Titles/MainTitle";
import FullButton from "@/components/common/buttons/FullButton";
import {useRouter} from "next/router";

const TopBlock: React.FC<{ currentPage: string, serviceDescription: string, backgroundImage: string, button?: string, buttonDescription?: string, imageClassName?: string }> = ({
                                                                                                                                                                                    currentPage,
                                                                                                                                                                                    serviceDescription,
                                                                                                                                                                                    backgroundImage,
                                                                                                                                                                                    button,
                                                                                                                                                                                    buttonDescription,
                                                                                                                                                                                    imageClassName
                                                                                                                                                                                }) => {
    const router = useRouter()

    return (
        <Wrapper className={style.wrapper}>
            <Header isMainPage={false} currentPage={currentPage}/>
            <div className={style.mainTitleBlock}>
                <MainTitle title={currentPage}/>
            </div>
            <div className={style.description}>{serviceDescription}</div>
            <div className={style.bgImageBlock}>
                <img src={backgroundImage} alt="background"
                     className={imageClassName ? `${style.bgImage} ${imageClassName}` : style.bgImage}/>
            </div>
            {button && <div className={style.costBlock}>
                <div>
                    <FullButton className={style.button} onClick={button == "Заполнить анкету" ? () => {
                        router.push('/questionnaire')
                    } : () => {
                    }}> {button} </FullButton>
                </div>
                <span className={style.costDescription}>{buttonDescription}</span>
            </div>}


        </Wrapper>
    );
};

export default TopBlock;