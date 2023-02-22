import React, {useState} from 'react';
import style from "@/styles/components/questionnaireForm.module.scss"
import arrow from "@/assets/svg/arrowDown.svg"
import LinkBtn from "@/components/common/buttons/LinkBtn";

const SelectorItem: React.FC<{ title: string, buttons: Array<string> }> = ({title, buttons}) => {

    const [expandedMenu, setExpandedMenu] = useState(false)

    const onClickHandler = () => {
        setExpandedMenu(!expandedMenu)
    }

    return <>
        <div className={style.selectorItem} onClick={onClickHandler}>
            <h5 className={style.itemTitle}>{title}</h5>
            <img src={arrow.src} className={style.itemArrow} alt="questionnaire"/>
        </div>
        <div className={expandedMenu ? `${style.selectorItemExpanded}` : `${style.selectorItemHidden}`}>
            {expandedMenu && buttons.map((b) => <LinkBtn>{b}</LinkBtn>)}
        </div>
    </>
};

export default SelectorItem;