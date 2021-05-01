import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './../../../Assets/styles/Header/navMenu.module.sass';
const NavMenu = ({setOpen}) => {
    const close = () => {
        setOpen(false);
    }
    return (
        <nav className = {classes.navBlock}>
            <NavLink onClick={() => close()} to='/contact'>
                <p>Контакты</p>
            </NavLink>
            <NavLink onClick={() => close()} to='/#block-catalog'>
                <p>Каталог</p>
            </NavLink>
            <NavLink onClick={() => close()} to='/info'>
                <p>Информация</p>
            </NavLink>
            <NavLink onClick={() => close()} to='/sign-up'>
                <p>Регистрация</p>
            </NavLink>
            <NavLink to='/sign-in'>
                <p onClick={() => close()}>Войти в личный кабинет</p>
            </NavLink>
        </nav>
    )
}

export default NavMenu;