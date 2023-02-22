import React from 'react';
import Link from "next/link";
import logo from '../../../assets/svg/Logo.svg'
import style from '../../../styles/components/header.module.scss'
import Wrapper from "@/components/common/wrapper";
import LinkBtn from "@/components/common/buttons/LinkBtn";
import {useRouter} from "next/router";

const Header: React.FC<{ isMainPage: boolean, currentPage: string }> = ({isMainPage, currentPage}) => {

    const router = useRouter()
    return (
        <Wrapper className={style.wrapper}>
            <header className={style.header}>
                <div className={style.row}>
                    <div className={style.logoBlock}>
                        <img src={logo.src} alt="silevans" width={180} height={31}/>
                    </div>

                    <div className={style.navBlock}>
                        <nav className={style.navLinks}>
                            <div className={style.servicesLink}><Link href='#'>Услуги</Link></div>
                            <div className={style.portfolioLink}><Link href='/portfolio'>Портфолио</Link></div>
                        </nav>
                        <LinkBtn className={style.buttonCallback}>Заказать звонок</LinkBtn>

                    </div>
                </div>
                {!isMainPage && <span className={style.currentPage}>
                    <span className={style.mainPageLink} onClick={() => {
                        router.push('/')
                    }}>Главная</span> <span className={style.currentPageName}> &#8226; {currentPage}</span>
                </span>}
            </header>
        </Wrapper>
    );
};

export default Header;