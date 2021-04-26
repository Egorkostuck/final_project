import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {deleteGoods, deleteCount, addCount} from './../../State/Action';
import styles from './../../Assets/styles/Cart/cart.module.sass';


const Cart = () => {
    const CARTARR = useSelector(state => state.cartReducer.cart);
    const dispatch = useDispatch();
    let sum = 0,
        percent = 0,
        quantity = 0;

    console.log(CARTARR);

    const deleteGoodsInCart = (item) => {
        dispatch(deleteGoods(item));        
    }

    const deleteCountGoods = (item) => {
        if(item.count > 0){
            dispatch(deleteCount(item));
        }        
    }

    const addCountGoods = (item) => {
        if(item.count <= 99){
            dispatch(addCount(item));
        }        
    }

    const sumInCart = () => {
        sum = CARTARR.reduce((accumulator, currentValue) => (+accumulator) + (+currentValue.coast * currentValue.count), 0);
        return sum;
    }

    const quantityGoods = () => {
        quantity = CARTARR.reduce((accumulator,currentValue) => accumulator + currentValue.count, 0);
        return quantity;
    }

    const discount = () => {
        if( 2 <= quantity &&  quantity < 4 ) {
            percent = 10;
        } else if (quantity >= 4) {
            percent = 30;
        } else {
            percent = 0;
        }
        return percent;
    }

    const newSum = () => {
        let newSum = (sum - ((sum*percent)/100));
        return newSum;
    }

    useEffect(() => {
        let stringState = JSON.stringify(CARTARR);
        localStorage.setItem('cart', stringState);
    }, [CARTARR]);

    return(
        <div className={styles.cartContainer}>
            <h3>корзина</h3>
            <div className={styles.cartBlock}>
                <div>
                    {CARTARR.map((item, index) => (
                        <div key={index} className={styles.goods}>
                            <img src={item.img} alt={`${item.name} image`} />
                            <div>
                                <h5 className={styles.name}>{item.name}</h5>
                                <p className={styles.coast}>{`${item.coast} руб.`}</p>
                            </div>
                            <div className={styles.countContainer}> 
                                <div className={styles.icon}>
                                    <i onClick={() => deleteGoodsInCart(item.id)} className="fas fa-times"></i>
                                </div>                              
                                                                
                                <div className={styles.countBlock}>
                                    <button  onClick={() => deleteCountGoods(item)} type='button'>-</button>
                                    <div className={styles.count}>
                                        <p>{item.count}</p>
                                    </div>
                                    <button onClick={() => addCountGoods(item)} type='button'>+</button>
                                </div>
                                
                            </div>
                        </div>
                    ))}
                </div>                
                <div className={styles.checkContainer}>
                    <div className={styles.checkContent}>
                        <h5>Ваша корзина</h5>
                        <div className={styles.borderCheck}>
                            <div className={styles.flexBlock}>
                                <p >{`Товары (${quantityGoods()})`}</p>
                                <p className={styles.checkCoast}>{`${sumInCart()} руб.`}</p>   
                            </div>
                            <div className={styles.flexBlock}>
                                <p>Скидка</p>
                                <p className={styles.checkDiscount}>{`${discount()}%`}</p>   
                            </div>
                        </div>
                        <div className={styles.newSum}>
                            <h5>Итого</h5> 
                            <p>{newSum()}</p> 
                        </div>
                    </div>                    
                </div>
            </div>            
        </div>
    )
}

export default Cart;