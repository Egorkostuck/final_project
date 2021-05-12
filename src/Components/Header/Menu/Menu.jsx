import React from 'react';
import './../../../Assets/styles/Header/menuBurger.sass';
import burger from './../../../Assets/img/icons/icon-menu-white.svg';
import iconX from './../../../Assets/img/icons/icon-esc.svg';

const Menu = ({open, setOpen}) => {
    return(
        <section>
            <div className = 'container-menu-burger'>
                <div onClick = {() => setOpen(!open)}>
                    <div className = 'icon-burger'>{open ? <img src={iconX} /> : <img src={burger} />} </div>
                </div>                
                <span className = 'text-menu'>Меню</span>
            </div>            
        </section>
    );
}

export default Menu;