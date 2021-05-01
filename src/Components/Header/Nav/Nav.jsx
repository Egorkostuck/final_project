import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './../../../Assets/styles/Header/Nav.module.sass';
import './../../../Assets/styles/Header/index.css';


const Nav = () => {
    return(
        <nav className = { classes.nav } >
            <NavLink to='/catalog-sink'>
                Мойки
            </NavLink>
            <NavLink to = '/catalog-mixers'>
                Смесители
            </NavLink>
            <NavLink to = '/catalog-plate'>
                Плиты
            </NavLink>
            <NavLink to = '/info'>
                Информация
            </NavLink>            
            <NavLink to = '/sign-in'>
                Войти в кабинет
            </NavLink>
            <NavLink to = '/sign-up'>
                Регистрация
            </NavLink>
        </nav>
    );
}

export default Nav;