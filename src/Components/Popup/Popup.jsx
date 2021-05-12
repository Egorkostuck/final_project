import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import classes from './../../Assets/styles/Popup/popup.module.sass';
import {useForm} from 'react-hook-form';
import {deleteCountInGoods, addCountInGoods} from './../../State/Action';
import { useHistory } from 'react-router-dom';

const Popup = ({setModal}) => {
    const {register, handleSubmit, errors} = useForm();
    const goods = useSelector(state => state.goodsReducer.goods);
    const dispatch = useDispatch();
    const [infoBuyer, setInfoBuyer] = useState({});
    const validators = {
        required: 'Заполните поле'
    }; 

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

    const location = useHistory();
    const onSubmit = (item) => {
        setInfoBuyer(item);
        location.push('/success');
        console.log({'заказ': {buyer: item, goods}});
    }

    return(
        <div className={classes.modalContainer} onClick={() => setModal(false)}>
            <div className={classes.modalBlock} onClick={(e) => e.stopPropagation()}>
                <div className={classes.formBlock}>
                    <h3>форма быстрого заказа</h3>
                    <form onSubmit={handleSubmit(onSubmit)}  className={classes.containerForm}>
                        <input className={classes.infoInput} type="text" name="name" placeholder="Имя" ref={register({...validators, minLength: {value: 2, message: 'Заполните поле'},maxLength: {value: 10, message: 'Не больше 10 символов'}, pattern:{value: /[A-Z]{2,10}/i,  message: 'только латиница'} })}/>               
                        <p className={classes.errors1}>{errors.name && errors.name.message}</p>
                        <input className={classes.infoInput} type="email" name="email" placeholder="email@example.com" ref={register({...validators, pattern:{value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,  message: 'Неверный адрес электронной почты'} })}/>               
                        <p className={classes.errors2}>{errors.email && errors.email.message}</p>
                        <input className={classes.infoInput} type="tel" name="mobile" placeholder="Номер телефона" ref={register({...validators, pattern:{value: /^([+]?[0-9\s-\(\)]{3,25})*$/i,  message: 'Пример: +375(29)111-11-11' } })}/>                
                        <p className={classes.errors3}>{errors.mobile && errors.mobile.message}</p>    
                    </form>
                    <p className={classes.text}>Отправьте заказ и мы Вам перезвоним. Специалист нашего интернет-магазина уточнит, где и когда будет удобно получить заказ.</p>
                    <p>Перед отправкой заказа, убедитесь в правильном заполнении данных.</p>
                </div>
                <div className={classes.goodBlock}>
                    <img src={goods.img} alt='image-goods'/>
                    <h5>{goods.name}</h5>
                    <div className={classes.countBlock}>
                        <p  className={classes.countText}>Количество</p>
                        <button  onClick={() => deleteItem(goods)} type='button'>-</button>
                        <div className={classes.count}>
                            <p>{goods.count}</p>
                        </div>
                        <button onClick={() => addItem(goods)} type='button'>+</button>
                    </div>
                    <button onClick={handleSubmit(onSubmit)} type='submit' form='dataUser' className={classes.buttonCall} disabled={(errors.name && errors.name.message) || (errors.email && errors.email.message) || (errors.password && errors.password.message)}>Отправить</button>
                    <p className={classes.notice}>Нажимая кнопку отправить вы даете согласие на обработку пресональных данных</p>
                </div>
                <div className={classes.buttonEsc}>
                    <i onClick={() => setModal(false)} className="fas fa-times"></i>
                </div>
            </div>
        </div>
    )
}

export default Popup;