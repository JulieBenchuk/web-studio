import React from 'react';
import Link from "next/link";

const Header = () => {
    return (
        <header>
            <nav>
                <Link href='/services'>Услуги</Link>
                <Link href='/portfolio'>Портфолио</Link>
            </nav>

        </header>
    );
};

export default Header;