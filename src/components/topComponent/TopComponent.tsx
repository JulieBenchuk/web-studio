import React from 'react';
import Image from "next/image";
import ground from "@/assets/svg/ground.svg";
import Header from "@/components/common/header/Header";
import Wrapper from "@/components/common/wrapper";
import style from '../../styles/components/topComponent.module.scss'
import FullButton from "@/components/common/buttons/FullButton";
import gift from '../../assets/svg/giftConsultation.svg'
import giftBckgrnd from '../../assets/svg/giftConsultBackground.svg'


const TopComponent = () => {
    return (
        <Wrapper className={style.wrapper}>
            <div className={style.topComponent}>
                <div className={style.leftBlock}>
                    <Header isMainPage={false} currentPage={"Разработка сайтов"}/>
                    <div className={style.titleBlock}>
                        <h1 className={style.title}>SELIVANS</h1>
                    </div>
                    <div className={style.textDescription}>
                        <p className={style.text}>Веб-студия специализируется на разработке сложно-функциональных сайтов
                            и веб-сервисов, на
                            креативном дизайне, интернет продвижении
                            и поддержке.</p>
                    </div>
                    <div className={style.consultationBlock}>
                        <div className={style.consultation}>
                            <Image src={gift} alt={"free consultation"} className={style.gift}/>
                            <Image src={giftBckgrnd} alt={"free consultation"} className={style.background}/>
                            <p className={style.consultationText}>Заполните анкету, чтобы получить бесплатную
                                консультацию</p>
                        </div>
                    </div>
                    <FullButton className={style.buttonFillForm}>Заполнить анкету</FullButton>
                </div>
                <div className={style.rightBlock}></div>
            </div>
            <Image src={ground} alt={"ground"} width={1440} height={770} className={style.ground}/>

        </Wrapper>
    );
};

export default TopComponent;