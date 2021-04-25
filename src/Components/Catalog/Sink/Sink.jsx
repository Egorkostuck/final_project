import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import classes from './../../../Assets/styles/Catalog/catalog.module.sass';
import iconCart from './../../../Assets/img/icons/icon-cart-white.svg';
import {addGoods} from './../../../State/Action';

const Sink = () => {
    const sinkArr = useSelector(state => state.catalogReducer.sink);
    const cartArr = useSelector(state => state.cartReducer.cart);
    const dispatch = useDispatch();

    const addGoodsInCart = (item) => {
        console.log(item);
        dispatch(addGoods(item));
    };

    useEffect((item) => {
        let stringState = JSON.stringify([...cartArr, item]);
        localStorage.setItem('cart', stringState);          
    }, [cartArr]);

    console.log(cartArr);
    return(
        <div className={classes.catalogContainer}>
            {sinkArr.map((item) => (
                <div className={classes.catalogBlock}>
                    <img className={classes.sink} src={item.img} alt={`${item.name} image`}/>
                    <h5 className={classes.name}>{item.name}</h5>
                    <p className={classes.coast}>{`${item.coast} руб.`}</p>
                    <div>
                        <div onClick={() => addGoodsInCart(item)} className={classes.button}>
                            <img src={iconCart} alt='иконка корзины' />
                            <p>В корзину</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Sink;
