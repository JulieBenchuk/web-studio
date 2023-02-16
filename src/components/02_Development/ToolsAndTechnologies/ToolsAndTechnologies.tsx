import React from 'react';
import Image from "next/image";
import style from "@/styles/components/toolsAndTechnologies.module.scss"
import Wrapper from "@/components/common/wrapper";
import spaceGif from "@/assets/gif/space.gif"

const ToolsAndTechnologies = () => {
    return (
        <Wrapper className={style.wrapper}>
            <div className={style.toolsInfoBlock}>
                <h4 className={style.titleRow}>Набор инструментов и технологий</h4>
                <div className={style.gifAndTextRow}>
                    <div className={style.gifBock}>
                        <img src={spaceGif.src} alt={"tools"} className={style.gif}/>
                    </div>
                    <div className={style.text}>На этапе разработки мы добавляем в проект большую часть интерактивных и
                        анимированных элементов, что позволяет получить работающие страницы и многократно протестировать
                        их.
                    </div>
                </div>

            </div>
            <div className={style.technologyBlock}>
                <div className={style.design}></div>
                <div className={style.frontend}></div>
                <div className={style.backend}></div>
            </div>

        </Wrapper>
    );
};

export default ToolsAndTechnologies;