import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import iconCart from './../../Assets/img/icons/icon-cart-white.svg';
import classes from './../../Assets/styles/Goods/goods.module.sass';
import {addCountInGoods, deleteCountInGoods, addGoods} from './../../State/Action';
import { useHistory } from 'react-router-dom';

const Goods = ({successToast}) => {
    const goods = useSelector(state => state.goodsReducer.goods);
    const countGoods = useSelector(state => state.goodsReducer.goods.count);
    const dispatch = useDispatch();
    const [goodsInCart, setGoodsInCart] = useState(false);
    const [counter, setCounter] = useState(countGoods);

    const deleteItem = (item) => {
        if (item.count > 0) {
            dispatch(deleteCountInGoods(item));
        }
    }

    const addItem = () => {
        setCounter((prev) => prev + 1);
        dispatch(addCountInGoods(counter));
        // if (item.count < 99) {
        //     dispatch(addCountInGoods(item));
        // }
    }

    const location = useHistory();
    const buyOneClick = (item) => {
        dispatch(addGoods(item));
        location.push('/order');
    }

    const addInCart = (item) => {
        dispatch(addGoods(item));
        successToast('Товар успешно добавлен в корзину');
        setGoodsInCart(true);
    }

    useEffect(() => {
        localStorage.setItem('goods', JSON.stringify(goods));
    }, [countGoods]);

    return(
        <div className={classes.goodsContainer}>
            <img src={goods.img} alt='image-goods'/>
            <div className={classes.goodsInfo}>
                <h3>{goods.name}</h3>
                <div className={classes.manufacturer}>
                    <p>Производитель: Reginox</p>
                    <p>Артикул: {goods.id}</p>
                </div>                
                <span>{goods.coast} руб.</span>
                <div className={classes.countBlock}>
                    <p  className={classes.countText}>Количество</p>
                    <button  onClick={() => deleteItem(goods)} type='button'>-</button>
                    <div className={classes.count}>
                        <p>{counter}</p>
                    </div>
                    <button onClick={() => addItem(goods)} type='button'>+</button>
                </div> 
                <div className={classes.buttonBlock}>
                    <button onClick={() => buyOneClick(goods)} type='button'>Купить в 1 клик</button>
                    <div onClick={() => addInCart(goods)} className={goodsInCart ? classes.imgButton : classes.imgButton}>
                        <img className={classes.iconButton} src={iconCart} alt='icon-cart'/>
                        <p className={classes.textInCart}>В корзину</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Goods;