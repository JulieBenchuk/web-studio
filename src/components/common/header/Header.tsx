import React from 'react';
import Link from "next/link";
import style from '../../../styles/components/header.module.scss'
import FullButton from "../buttons/FullButton";
import headerStyle from "@/styles/components/header.module.scss";
import Wrapper from "@/components/common/wrapper";

const Header: React.FC<{ isMainPage: boolean, currentPage: string }> = ({isMainPage, currentPage}) => {

    return (
        <Wrapper className={headerStyle.wrapper}>
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
                <FullButton className={style.button}>Заполнить анкету</FullButton>
            </header>
        </Wrapper>
    );
};

export default Header;