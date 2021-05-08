import React from 'react';
import {useSelector} from 'react-redux';
import iconCart from './../../Assets/img/icons/icon-cart-white.svg';

const Goods = () => {
    const goods = useSelector(state => state.goodsReducer.goods);
    return(
        <div>
            <img src={goods.img} alt='image-goods'/>
            <div>
                <h3>{goods.name}</h3>
                <div>
                    <p>Производитель: Reginox</p>
                    <p>Артикул: {goods.id}</p>
                </div>                
                <span>{goods.coast} руб.</span>
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