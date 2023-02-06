import React from 'react';
import Link from "next/link";
import style from '../../../styles/components/header.module.scss'

const Header: React.FC<{ isMainPage: boolean, currentPage: string }> = ({isMainPage, currentPage}) => {
    const headerStyle = isMainPage ? style.header : `${style.header} ${style.headerMain}`

    return (
        <header className={headerStyle}>
            <div className={style.logoBlock}>
                <div className={style.logo}>
                    <img src='/Logo.svg' alt="silevans"/>
                </div>
                <span className={style.currentPage}>Главная <span>&#8226;</span> {currentPage}</span>
            </div>

            <div className={style.navBlock}>
                <nav className={style.navLinks}>
                    <Link href='/services'>Услуги</Link>
                    <Link href='/portfolio'> Портфолио</Link>
                </nav>
                <div className={style.callbackBtn}>Заказать звонок</div>
            </div>

        </header>
    );
};

export default Header;