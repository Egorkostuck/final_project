import React, {useState} from 'react';
import './../../Assets/styles/Header/header.sass';
import Menu from './Menu/Menu';
import Logo from './Logo/Logo';
import CartIcon from './Cart/CartHeader';
import Nav from './Nav/Nav';
import ContactHeader from './Contact/contactHeader';
import NavMenu from './../Header/Menu/Nav-menu';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [open, setOpen] = useState(false);
    
    return (
        <header className = {open ? 'header-container-active' : 'header-container'}>
            <div className='header-section'>
                <div className = 'section-contact'>
                    <ContactHeader />
                </div>
                <div className = 'section-menu'>
                    <Menu  open={open} setOpen={setOpen}/>
                    <NavLink to="/">
                        <Logo setOpen={setOpen} />
                    </NavLink>
                    <CartIcon open={open} setOpen={setOpen} />
                </div>
                <div>
                    {open && <NavMenu setOpen={setOpen} />}
                </div>
                <div>
                    <Nav setOpen={setOpen}/>
                </div>
            </div>
        </header>
            
    );
}

export default Header;