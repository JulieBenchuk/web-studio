import React from 'react';
import styles from '../../../styles/components/footer.module.scss'
import Link from "next/link";
import Wrapper from "@/components/common/wrapper";
import Image from 'next/image'
import logo from '@/assets/svg/Logo.svg'
import FullButton from "@/components/common/buttons/FullButton";
import {useRouter} from "next/router";

export const Footer: React.FC = () => {

    const router = useRouter()

    const onTelegramClickHandler = () => {
        router.push('https://t.me/julie_benchuk')
    }

    return (
        <footer>
            <Wrapper className={styles.wrapper}>
                <div className={styles.contacts}>
                    <div className={styles.logo}>
                        <Image src={logo} alt={"silevans logo"}/>
                    </div>
                    <Link href={'tel:+375445590660'}>+375 44 559 06 60</Link>
                    <div className={styles.buttonsBlock}>
                        <FullButton onClick={onTelegramClickHandler}>Telegram</FullButton>
                        <FullButton>Заполнить анкету</FullButton>
                    </div>
                    <div className={styles.date}>Ⓒ {new Date().getFullYear()} Silevans. Все права защищены</div>
                </div>
                <div className={styles.allServices}>
                    <div className={styles.services1}>
                        <Link href={'#'}>Услуги</Link>
                        <Link href={'#'}>Разработка</Link>
                        <Link href={'#'}>Продвижение</Link>
                        <Link href={'#'}>Дизайн</Link>
                    </div>
                    <div className={styles.services2}>
                        <Link href={'#'}>Портфолио</Link>
                        <Link href={'#'}>Бриф</Link>
                        <Link href={'#'}>Вакансии</Link>
                    </div>
                    <div className={styles.date}>Ⓒ {new Date().getFullYear()} Silevans. Все права защищены</div>
                </div>
            </Wrapper>
        </footer>
    );
};