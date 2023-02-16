import React from 'react';
import style from "@/styles/components/toolsAndTechnologies.module.scss"
import Wrapper from "@/components/common/wrapper";
import spaceGif from "@/assets/gif/space.gif"
import {toolItems} from "@/components/02_Development/ToolsAndTechnologies/ToolItems";


const ToolsAndTechnologies = () => {
    return (
        <Wrapper className={style.wrapper}>
            <div className={style.gifBlockForMobile}>
                <img src={spaceGif.src} alt={"tools"} className={style.gifForMobile}/>
            </div>
            <div className={style.toolsInfoBlock}>
                <h4 className={style.titleRow}>Набор инструментов <span>и технологий</span></h4>
                <div className={style.gifAndTextRow}>
                    <div className={style.gifBlock}>
                        <img src={spaceGif.src} alt={"tools"}/>
                    </div>
                    <div className={style.text}>На этапе разработки мы добавляем в проект большую часть интерактивных и
                        анимированных элементов, что позволяет получить работающие страницы и многократно протестировать
                        их.
                    </div>
                </div>

            </div>
            <div className={style.technologyBlock}>
                <div className={style.design}>
                    <div className={style.designTitle}>Дизайн и проектирование</div>
                    <div className={style.designBlock}>
                        {toolItems.filter(i => i.id > 0 && i.id < 3).map((i) => {
                            return <div className={style.toolItem}>
                                <div className={style.toolIcon}>
                                    <img src={i.img} alt="icon"/>
                                </div>
                                <div className={style.toolName}>{i.title}</div>
                            </div>
                        })}

                    </div>
                </div>
                <div className={style.frontend}>
                    <div className={style.frontTitle}>FRONT-END</div>
                    <div className={style.frontBlock}>
                        {toolItems.filter(i => i.id > 2 && i.id < 12).map((i) => {
                            return <div className={style.toolItem}>
                                <div className={style.toolIcon}>
                                    <img src={i.img} alt="icon"/>
                                </div>
                                <div className={style.toolName}>{i.title}</div>
                            </div>
                        })}

                    </div>
                </div>
                <div className={style.backend}>
                    <div className={style.backTitle}>BACK-END</div>
                    <div className={style.backBlock}>
                        {toolItems.filter(i => i.id > 11 && i.id < 15).map((i) => {
                            return <div className={style.toolItem}>
                                <div className={style.toolIcon}>
                                    <img src={i.img} alt="icon"/>
                                </div>
                                <div className={style.toolName}>{i.title}</div>
                            </div>
                        })}

                    </div>
                </div>
            </div>

        </Wrapper>
    );
};

export default ToolsAndTechnologies;