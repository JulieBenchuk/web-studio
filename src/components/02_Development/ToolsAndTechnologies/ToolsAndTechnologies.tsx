import React from 'react';
import Wrapper from "@/components/common/wrapper";
import FilteredTools from "@/components/02_Development/ToolsAndTechnologies/FilteredTools";
import GearsList from "@/components/02_Development/ToolsAndTechnologies/GearsList";
import style from "@/styles/components/toolsAndTechnologies.module.scss"
import spaceGif from "@/assets/gif/space.gif"
import {toolItems} from "@/components/02_Development/ToolsAndTechnologies/ToolItems";


const ToolsAndTechnologies = () => {
    return (
        <Wrapper className={style.wrapper}>
            <div className={style.toolsInfoBlock}>
                <div className={style.gifBlockForMobile}>
                    <img src={spaceGif.src} alt={"tools"} className={style.gifForMobile}/>
                </div>
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
                            return <FilteredTools title={i.title} img={i.img}/>
                        })}

                    </div>
                </div>
                <div className={style.frontend}>
                    <div className={style.frontTitle}>FRONT-END</div>
                    <div className={style.frontBlock}>

                        {toolItems.filter(i => i.id > 2 && i.id < 12).map((i) => {
                            return <FilteredTools title={i.title} img={i.img}/>
                        })}

                    </div>
                </div>
                <div className={style.backend}>
                    <div className={style.backTitle}>BACK-END</div>
                    <div className={style.backBlock}>

                        {toolItems.filter(i => i.id > 11 && i.id < 15).map((i) => {
                            return <FilteredTools title={i.title} img={i.img}/>
                        })}

                    </div>
                </div>
                <GearsList/>
            </div>
        </Wrapper>
    );
};

export default ToolsAndTechnologies;