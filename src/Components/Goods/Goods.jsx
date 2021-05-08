import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import iconCart from './../../Assets/img/icons/icon-cart-white.svg';
import classes from './../../Assets/styles/Goods/goods.module.sass';
import {addCountInGoods, deleteCountInGoods} from './../../State/Action';

const Goods = () => {
    const goods = useSelector(state => state.goodsReducer.goods),
        dispatch = useDispatch();
    debugger
    const deleteItem = (item) => {
        if (item.count > 0) {
            dispatch(deleteCountInGoods(item));
            debugger
        }
    }

    const addItem = (item) => {
        if (item.count < 99) {
            dispatch(addCountInGoods(item));
        }
    }

    useEffect(() => {
        localStorage.setItem('goods', JSON.stringify(goods));
    }, [goods]);

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
                    <p>Количество</p>
                    <button  onClick={() => deleteItem(goods)} type='button'>-</button>
                    <div className={classes.count}>
                        <p>{goods.count}</p>
                    </div>
                    <button onClick={() => addItem(goods)} type='button'>+</button>
                </div> 
                <div>
                    <button type='button'>Купить в 1 клик</button>
                    <div>
                        <img src={iconCart} alt='icon-cart'/>
                        <p>В корзину</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Goods;