import React, {useState, MouseEvent} from 'react';
import style from "@/styles/components/questionnaireForm.module.scss"
import arrow from "@/assets/svg/arrowDown.svg"
import InterestItem from "@/components/05_Questionnaire/InterestItem";

type SelectorItemPropsType = {
    title: string,
    buttons?: Array<string>,
    background: { background: string },
    onMessageActiveHandler: () => void
}
const SelectorItem: React.FC<SelectorItemPropsType> = ({
                                                           title,
                                                           buttons,
                                                           background,
                                                           onMessageActiveHandler
                                                       }) => {

    const [expandedMenu, setExpandedMenu] = useState(false)
    const [checked, setChecked] = useState(false)

    const onChangeCheckHandler = () => {
        setChecked(checked)
    }

    const onMenuClickHandler = () => {
        if (title === "Другое") {
            onMessageActiveHandler()
        } else {
            setExpandedMenu(!expandedMenu)
        }
    }

    const onButtonClickHandler = (b: string, e: MouseEvent<HTMLInputElement>) => {
        e.preventDefault()
        console.log(b)

    }

    return <>
        <div className={expandedMenu ? style.selectorItemActive : style.selectorItem} onClick={onMenuClickHandler}
             style={background}>
            <h5 className={style.itemTitle}>{title}</h5>
            <img src={arrow.src} className={expandedMenu ? style.itemArrowExpanded : style.itemArrow}
                 alt="questionnaire"/>
        </div>
        <div className={expandedMenu ? `${style.selectorItemExpanded}` : `${style.selectorItemHidden}`}>
            {expandedMenu && buttons && buttons.map((b) => <InterestItem checked={checked}
                                                                         onChange={onChangeCheckHandler}
                                                                         onClick={(e) => onButtonClickHandler(b, e)}>{b}</InterestItem>)}
        </div>
        <div>
        </div>
    </>
};

export default SelectorItem;