import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import classes from './../../../Assets/styles/Catalog/catalog.module.sass';
import iconCart from './../../../Assets/img/icons/icon-cart-white.svg';
import {addGoods, disableGoods, openGoods} from './../../../State/Action';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom';

const Mixers = ({successToast}) => {
    const mixerArr = useSelector(state => state.catalogReducer.mixer);
    const cartArr = useSelector(state => state.cartReducer.cart);
    const dispatch = useDispatch();
   
    const addGoodsInCart = (item) => {
        console.log(item);
        dispatch(addGoods(item));
        dispatch(disableGoods(item.id, 'mixer'));
        successToast('Товар добавлен в корзину');
    };

    useEffect((item) => {
        let stringState = JSON.stringify(cartArr);
        localStorage.setItem('cart', stringState);          
    }, [cartArr]);

    return(
        <div className={classes.catalogContainer}>
            {mixerArr.map((item) => (
                <div className={classes.catalogBlock}>
                    <NavLink to='/goods'>
                        <img onClick={() => dispatch(openGoods(item))} className={classes.sink} src={item.img} alt={`${item.name} image`}/>
                    </NavLink>
                    <NavLink to='/goods'>
                        <h5 onClick={() => dispatch(openGoods(item))} className={classes.name}>{item.name}</h5>
                    </NavLink>                    
                    <p className={classes.coast}>{`${item.coast} руб.`}</p>
                    <div>
                        {!item.inCart ? <div onClick={() => addGoodsInCart(item)} className={classes.button}>
                            <img src={iconCart} alt='иконка корзины' />
                            <p>В корзину</p>
                        </div> : ''}                        
                    </div>
                </div>
            ))}
            <ToastContainer
                newestOnTop={false}
                rtl={false}
                pauseOnFocusLoss
                className={classes.toast}
            />
        </div>
    )
}

export default Mixers;