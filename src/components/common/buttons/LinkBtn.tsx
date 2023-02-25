import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import style from '../../../styles/components/buttons/buttons.module.scss';
import * as Scroll from 'react-scroll';

const LinkBtn: React.FC<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>> = ({
                               children,
                               onClick,
                               className
                           }) => {

    const finalClass = className ? `${style.LinkBtn} ${className}` : style.LinkBtn

    const onCallMeBackClickHandler = () => {
        if (children === "Заказать звонок") {
            Scroll.scroller.scrollTo('callMeBack', {
                duration: 500,
                smooth: true,
                offset: 0,
            })

        }
    }

    return (
        <button className={finalClass} onClick={onClick ? onClick : onCallMeBackClickHandler}>
            {children}
        </button>
    );
};

export default LinkBtn;