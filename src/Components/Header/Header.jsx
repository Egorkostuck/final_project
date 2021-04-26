import React, {useEffect, useState} from 'react';
import './../../Assets/styles/Header/header.sass';
import Menu from './Menu/Menu';
import Logo from './Logo/Logo';
import CartIcon from './Cart/CartHeader';
import Nav from './Nav/Nav';
import ContactHeader from './Contact/contactHeader';
// import { useSelector, useDispatch } from 'react-redux';
// import {open, close} from './../../State/Action';
// import {connect} from 'react-redux'
// import { open, close } from './../../State/Action';
import NavMenu from './../Header/Menu/Nav-menu';

const Header = () => {
    // const open1 = useSelector(state => state.menuReducer.open);
    // const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    // useEffect(() => {
    //     dispatch(open1(true));
    //     },[]
    // );
    // console.log(open1);
    return (
        <header className = 'header-container'>
            <div className='header-section'>
                <div className = 'section-contact'>
                    <ContactHeader />
                </div>
                <div className = 'section-menu'>
                    <Menu  open={open} setOpen={setOpen}/>
                    <Logo />
                    <CartIcon />
                </div>
                <div>
                    {open && <NavMenu />}
                </div>
                <div>
                    <Nav />
                </div>
            </div>
        </header>
            
    );
}

// const mapStateToProps = (state) => {
//     return {
//         open: state.menuReducer.open
//     }
// }
// const mapDispatchToProps = {
//     open,
//     close,
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Header)
export default Header;