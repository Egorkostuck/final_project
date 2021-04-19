import React from 'react';
import './../../Assets/styles/Header/header.sass';
import Menu from './Menu/Menu';
import Logo from './Logo/Logo';

const Header = () => {
    return (
        <header className = 'header-container'>
            <Menu />
            <Logo />
        </header>
    );
}

export default Header;