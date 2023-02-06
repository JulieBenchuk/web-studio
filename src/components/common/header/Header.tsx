import React from 'react';
import Link from "next/link";
import style from '../../../styles/components/header.module.scss'

const Header: React.FC<{ isMainPage: boolean, currentPage: string }> = ({isMainPage, currentPage}) => {

    return (
        <header className={style.header}>
            <div className={style.row}>
                <div className={style.logoBlock}>
                    <img src='/Logo.svg' alt="silevans"/>
                </div>

                <div className={style.navBlock}>
                    <nav>
                        <Link href='/services'>Услуги</Link>
                        <Link href='/portfolio'> Портфолио</Link>
                    </nav>
                    <div className={style.callbackBtn}>Заказать звонок</div>
                </div>
            </div>
            {isMainPage && <span className={style.currentPage}>Главная &#8226; {currentPage}</span>}


        </header>
    );
};

export default Header;