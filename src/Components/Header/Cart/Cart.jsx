import React from 'react';
import './../../../Assets/styles/Header/cart.sass';
import icon from './../../../Assets/img/icons/icon-cart-white.svg';
import { NavLink } from 'react-router-dom';

const Cart = () => {
    return (
        <NavLink to='/cart'>
            <div className = 'cart-container'>
                <img className = 'icon-cart' src = {icon} alt = 'icon-cart' />
            </div>
        </NavLink>        
    );
}

export default Cart;