import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import {useSelector} from 'react-redux';
import './../../../Assets/styles/Header/cartIcon.sass';
import icon from './../../../Assets/img/icons/icon-cart-white.svg';
import iconFull from './../../../Assets/img/icons/icon_cart_full.svg';


const CartIcon = ({setOpen}) => {
    const stateCart = useSelector(state => state.cartReducer.cart);
    console.log(stateCart.length);
    const [cart, setCart] = useState(false);

    useEffect(() => {
        if(stateCart.length > 0 && stateCart[0] !== null) {
            setCart(true);
        } else {
            setCart(false);
        }
    }, [stateCart]);
    
    return (
        <NavLink to='/cart'>
            <div className = 'cart-container'>
                {cart ? <img onClick={() => setOpen(false)} className = 'icon-cart' src = {iconFull} title = {`В корзине находится ${stateCart.length} товаров`} alt='icon-cart'/> : <img className = 'icon-cart' onClick={() => setOpen(false)} src = {icon} title = {`В корзине находится ${stateCart.length} товаров`} alt='icon-cart'/>}
            </div>
        </NavLink>        
    );
}

export default CartIcon;