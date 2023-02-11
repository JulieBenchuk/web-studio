import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import style from '../../../styles/components/buttons/buttons.module.scss'

const FullButton: React.FC<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>> = ({className, children, type, ...restProps}) => {

    const finalClass = className ? `${style.default} ${className}` : style.default

    return (
        <button className={finalClass} type={type}>{children}</button>
    );
};

export default FullButton;