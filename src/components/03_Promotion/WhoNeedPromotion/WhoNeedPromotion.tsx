import React from 'react';
import Wrapper from "@/components/common/wrapper";
import style from "@/styles/components/whoNeedPromotion.module.scss"
import SmallTitle from "@/components/common/Titles/SmallTitle";
import FullButton from "@/components/common/buttons/FullButton";

const WhoNeedPromotion = () => {
    return (
        <Wrapper className={style.wrapper}>

            <SmallTitle className={style.title}>Кому нужно продвижение?</SmallTitle>

            <div className={style.content}>

                <div className={style.topPart}>
                    <div className={style.topText}> Интернет можно сравнить с воскресной ярмаркой, на которой тысячи
                        продавцов наперебой предлагают свои товары и услуги.
                    </div>
                    <div className={style.girlImg}>girlImg</div>
                </div>

                <div className={style.nextPart}>

                    <div className={style.textBlock}>
                        <span className={style.first}>В случае с цифровой торговлей такое место тоже есть — оно называется «топ поисковой выдачи». </span>
                        <span className={style.second}>Все они знают: для того, чтобы торговля была успешной, нужно занять место, вокруг которого всегда толпятся покупатели.</span>
                        <span className={style.third}>Мы знаем, как продвинуть ваш сайт в топ, привлечь покупателей и повысить продажи!</span>
                    </div>

                    <div className={style.buttonBlock}>
                        <span className={style.buttonDescription}>Заполните анкету, чтобы получить бесплатную консультацию</span>
                        <FullButton>Заполнить анкету</FullButton>
                    </div>

                </div>

            </div>
        </Wrapper>
    );
};

export default WhoNeedPromotion;