import React from 'react';
import './../../../Assets/styles/Header/menuBurger.sass';
import burger from './../../../Assets/img/icons/icon-menu-white.svg';

const Menu = () => {
    return(
        <div className = 'container-menu-burger'>
            <img className = 'icon-burger' src = {burger} alt='menu'/>
            <span className = 'text-menu'>Меню</span>
        </div>
    );
}

export default Menu;