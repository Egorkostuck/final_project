import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import iconCart from './../../Assets/img/icons/icon-cart-white.svg';
import classes from './../../Assets/styles/Goods/goods.module.sass';
import {addCountInGoods, deleteCountInGoods, addGoods} from './../../State/Action';
import {ToastContainer} from 'react-toastify';
import Popup from './../Popup/Popup';

const Goods = ({successToast}) => {
    const goods = useSelector(state => state.goodsReducer.goods);
    const dispatch = useDispatch();
    const [goodsInCart, setGoodsInCart] = useState(false);
    const [modal, setModal] = useState(false);
    
    const deleteItem = (item) => {
        if (item.count > 0) {
            dispatch(deleteCountInGoods(item.count));
        }
    }

    const addItem = (item) => {
        if (item.count < 99) {
            dispatch(addCountInGoods(item.count));
        }
    }

    const addInCart = (item) => {
        dispatch(addGoods(item));
        successToast('Товар успешно добавлен в корзину');
        setGoodsInCart(true);
    }

    useEffect(() => {
        localStorage.setItem('goods', JSON.stringify(goods));
    }, [goods.count]);

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
                        <p>{goods.count}</p>
                    </div>
                    <button onClick={() => addItem(goods)} type='button'>+</button>
                </div> 
                <div className={classes.buttonBlock}>
                    <button onClick={() => setModal(true)} type='button'>Купить в 1 клик</button>
                    <div onClick={() => addInCart(goods)} className={goodsInCart ? classes.imgButtonActive : classes.imgButton}>
                        <img className={classes.iconButton} src={iconCart} alt='icon-cart'/>
                    </div>
                </div>
                <ToastContainer
                newestOnTop={false}
                rtl={false}
                pauseOnFocusLoss
                className={classes.toast}
                />
            </div>
            {modal ? <Popup modal={modal} setModal={setModal}/> : ''}
        </div>
    )
}

export default Goods;