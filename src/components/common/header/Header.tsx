import React from 'react';
import Link from "next/link";
import style from '../../../styles/components/header.module.scss'

const Header: React.FC<{ className?: string, currentPage: string }> = ({className, currentPage}) => {
    const finalClass = className ? `${style.header} ${className}` : style.header

    return (
        <header className={finalClass}>
            <div className={style.logo}>Silevans</div>
            <span className={style.currentPage}>Главная <span>&#8226;</span> {currentPage}</span>
            <div className={style.navBlock}>
                <nav className={style.navLinks}>
                    <Link href='/services'>Услуги</Link>
                    <Link href='/portfolio'>Портфолио</Link>
                </nav>
                <div className={style.callbackBtn}>Заказать звонок</div>
            </div>

        </header>
    );
};

export default Header;