import React from 'react';
import Wrapper from "@/components/common/wrapper";
import FullButton from "@/components/common/buttons/FullButton";
import style from '../../styles/components/stageSlider.module.scss'

const StagesSlider: React.FC = () => {
    return (
        <Wrapper>
            <div className={style.stars}>
                <div className={style.pulse}>
                    <div className={style.pulse_item}>1</div>
                </div>
                <div className={style.content}>
                    <h5 className={style.titleBlock}>
                        Этапы работы
                    </h5>
                    <h3 className={style.title}>
                        Обсуждение проекта
                    </h3>
                    <p className={style.description}>
                        Уточняем что вы хотите получить в результате работы, какая задача стоит перед нашей командой?
                    </p>
                    <FullButton>Заполнить Анкету</FullButton>
                </div>
            </div>
        </Wrapper>
    );
};

export default StagesSlider;