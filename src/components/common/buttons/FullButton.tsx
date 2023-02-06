import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import style from '../../../styles/components/buttons/fullButton.module.scss'

const FullButton: React.FC<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>> = ({className, children, ...restProps}) => {

    const finalClass = className ? `${style.default} ${className}` : style.default

    return (
        <button className={finalClass}>{children}</button>
    );
};

export default FullButton;