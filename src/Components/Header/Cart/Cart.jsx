import React from 'react';
import './../../../Assets/styles/Header/cart.sass';
import icon from './../../../Assets/img/icons/icon-cart-white.svg';

const Cart = () => {
    return (
        <div className = 'cart-container'>
            <img className = 'icon-cart' src = {icon} alt = 'icon-cart' />
        </div>
    );
}

export default Cart;