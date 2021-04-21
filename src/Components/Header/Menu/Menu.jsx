import React, {useState} from 'react';
import './../../../Assets/styles/Header/menuBurger.sass';
import burger from './../../../Assets/img/icons/icon-menu-white.svg';
import iconX from './../../../Assets/img/icons/icon-esc.svg';
import Nav from './../Nav/Nav';
import NavMenu from './Nav-menu';

const Menu = () => {
    const [open, setOpen] = useState(false);
    return(
        <section>
            <div className = 'container-menu-burger'>
                <div onClick = {() => setOpen(!open)}>
                    <div className = 'icon-burger'>{open ? <img src={iconX} /> : <img src={burger} />} </div>
                </div>
                
                <span className = 'text-menu'>Меню</span>
            </div>
            {open && <NavMenu />}
        </section>
    );
}

export default Menu;