import React from 'react';
import './../../Assets/styles/Header/header.sass';
import Menu from './Menu/Menu';
import Logo from './Logo/Logo';
import Cart from './Cart/Cart';
import Nav from './Nav/Nav';

const Header = () => {
    return (
        <header className = 'header-container'>
            <section className = 'section-menu'>
                <Menu />
                <Logo />
                <Cart />
            </section>
            <section>
                <Nav />
            </section>
        </header>
    );
}

export default Header;