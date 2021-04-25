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
            <NavLink to = '/mixers'>
                Смесители
            </NavLink>
            <NavLink to = '/accessories'>
                Аксессуары
            </NavLink>
            <NavLink to = '/kitchen_stoves'>
                Плиты
            </NavLink>
            <NavLink to = '/washbasins'>
                Умывальники
            </NavLink>
            <NavLink to = '/manhattan'>
                Умывальники
            </NavLink>
        </nav>
    );
}

export default Nav;