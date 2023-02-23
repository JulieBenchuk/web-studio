import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';
import style from "@/styles/components/checkbox/checkbox.module.scss"

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type InterestItemPropsType = DefaultInputPropsType & {
    onChangeChecked?: (checked: boolean) => void
}
const InterestItem: React.FC<InterestItemPropsType> = ({
                                                           type,
                                                           onChange, onChangeChecked,
                                                           className,
                                                           children, checked,
                                                           ...restProps
                                                       }) => {

    const finalInputClassName = `${style.checkboxBtn} ${className ? className : ''}`

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeChecked && onChangeChecked(e.currentTarget.checked)
    }

    return (
        <div className={finalInputClassName}>
            <input
                type={'checkbox'}
                onChange={onChangeCallback}

                {...restProps}
            />
            {children && <span>{children}</span>}
        </div>
    );
};

export default InterestItem;