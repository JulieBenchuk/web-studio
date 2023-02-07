import React from 'react';
import Link from "next/link";
import Image from "next/image";
import style from '../../../styles/components/header.module.scss'
import headerStyle from "@/styles/components/header.module.scss";
import Wrapper from "@/components/common/wrapper";
import LinkBtn from "@/components/common/buttons/LinkBtn";

const Header: React.FC<{ isMainPage: boolean, currentPage: string }> = ({isMainPage, currentPage}) => {

    return (
        <Wrapper className={headerStyle.wrapper}>
            <header className={style.header}>
                <div className={style.row}>
                    <div className={style.logoBlock}>
                        <Image src='/Logo.svg' alt="silevans" width={180} height={31} priority={true}/>
                    </div>

                    <div className={style.navBlock}>
                        <nav>
                            <Link href='/services'>Услуги</Link>
                            <Link href='/portfolio'> Портфолио</Link>
                        </nav>
                        <LinkBtn>Заказать звонок</LinkBtn>
                    </div>
                </div>
                {isMainPage && <span className={style.currentPage}>Главная &#8226; {currentPage}</span>}
            </header>
        </Wrapper>
    );
};

export default Header;