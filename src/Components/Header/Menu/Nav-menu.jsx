import React from 'react';
import { NavLink } from 'react-bootstrap';
import classes from './../../../Assets/styles/Header/navMenu.module.sass';
const NavMenu = () => {
    return (
        <nav className = {classes.navBlock}>
            <NavLink to = {'/sale'}>
                <p>Распродажа</p>
            </NavLink>
            <NavLink to = {'/contact'}>
                <p>Контакты</p>
            </NavLink>
            <NavLink to = {'/catalog'}>
                <p>Каталог</p>
            </NavLink>
            <NavLink to = {'/sign_in'}>
                <p>Войти в личный кабинет</p>
            </NavLink>
        </nav>
    )
}

export default NavMenu;