import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './../../../Assets/styles/Header/Nav.module.sass';
import './../../../Assets/styles/Header/index.css';


const Nav = ({setOpen}) => {
    return(
        <nav className = { classes.nav } >
            <NavLink onClick={() => setOpen(false)} to='/catalog-sink'>
                Мойки
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to = '/catalog-mixers'>
                Смесители
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to = '/catalog-plate'>
                Плиты
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to = '/info'>
                Информация
            </NavLink>            
            <NavLink onClick={() => setOpen(false)} to = '/sign-in'>
                Войти в кабинет
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to = '/sign-up'>
                Регистрация
            </NavLink>
        </nav>
    );
}

export default Nav;