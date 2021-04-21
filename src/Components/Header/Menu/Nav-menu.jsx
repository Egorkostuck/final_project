import React from 'react';
import { NavLink } from 'react-bootstrap';
import classes from './../../../Assets/styles/Header/navMenu.module.sass';
const NavMenu = () => {
    return (
        <nav className = {classes.navBlock}>
            <NavLink to = {'/sale'}>
                Распродажа
            </NavLink>
            <NavLink to = {'/contact'}>
                Контакты
            </NavLink>
            <NavLink to = {'/catalog'}>
                Каталог
            </NavLink>
            <NavLink to = {'/sign_in'}>
                Войти в личный кабинет
            </NavLink>
        </nav>
    )
}

export default NavMenu;