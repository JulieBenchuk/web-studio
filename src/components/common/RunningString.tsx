import React from 'react';
import Image from "next/image";
import style from '../../styles/components/runningString.module.scss'
import star from '../../assets/svg/StarRunString.svg'
import Wrapper from "@/components/common/wrapper";

const RunningString = () => {
    return (
        <Wrapper>
            <div className={style.runningString}>
                <div className={style.strings}>
                    <div className={style.firstString}>
                        <Image src={star} width={47} height={47} alt={"star"} className={style.star}/>
                        <span className={style.text}> 22 эксперта в нашей команде </span>
                    </div>
                    <div className={style.secondString}>
                        <Image src={star} width={47} height={47} alt={"star"}/>
                        <span className={style.text}> ПИШЕМ САЙТЫ НА ЧИСТОМ КОДЕ </span>
                    </div>
                </div>

            </div>
        </Wrapper>
    );
};

export default RunningString;