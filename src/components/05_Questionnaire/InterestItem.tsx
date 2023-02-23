import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useState} from 'react';
import style from "@/styles/components/checkbox/checkbox.module.scss"

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type InterestItemPropsType = DefaultInputPropsType & {
    onChangeChecked?: (checked: boolean) => void
}
const InterestItem: React.FC<InterestItemPropsType> = ({
                                                           type,
                                                           onChange, onChangeChecked,
                                                           className,
                                                           children,
                                                           ...restProps
                                                       }) => {

    const [checked, setChecked] = useState(false)

    const finalInputClassName = `${style.checkboxBtn} ${className ? className : ''}`


    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.currentTarget.checked)
    }

    return (
        <label className={finalInputClassName}>
            <input
                type={'checkbox'}
                onChange={onChangeCallback}
                checked={checked}

                {...restProps}
            />
            {children && <span>{children}</span>}
        </label>
    );
};

export default InterestItem;