import React, {useState,useEffect} from 'react';
import classes from './../../Assets/styles/Ordering/order.module.sass';
import './../../Assets/styles/Ordering/order.css';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import {useForm} from 'react-hook-form';
import emailjs from 'emailjs-com';
import TextField from '@material-ui/core/TextField';
import {ToastContainer} from 'react-toastify';
import { useHistory } from 'react-router-dom';

const Ordering = ({successToast}) => {
    const [delivery, setDelivery] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [inputValue, setInputValue] = React.useState('');
    const [infoBuyer, setInfoBuyer] = useState({});
    const [value, setValue] = React.useState('Individual');
    const [value2, setValue2] = React.useState('Metro');
    const [address, setAddress] = React.useState('nemiga');
    const checkObj = JSON.parse(localStorage.getItem('check'));
    const [chequeChange, setChequeChange] = useState(checkObj);


    const INFOORDER = {
        typeorder:  value,
        infoBuyer: infoBuyer,
        address: address,
        delivery: delivery,
        inputValue: inputValue,
        chequeChange: chequeChange
    }
    console.log(INFOORDER);

    const validators = {
        required: 'Заполните поле'
    };  

    //тип лица (юр, физ)
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    console.log(value);

    //адресс магазина
    const addressChange = (event) => {
        setAddress(event.target.value);
    };
    console.log(address);

    //доставка
    const deliveryState = (state) => {
        setDelivery(state);
        if (!delivery) {
            chequeChange.newSum += 500;
            setChequeChange(chequeChange);
        } else {
            chequeChange.newSum -= 500;
            setChequeChange(chequeChange);
        }
    }

    // промо код
    let promoCoast = 0;
    const handleChangeInput = (event) => {
        setInputValue(event.target.value);
        if(inputValue === 'весна') {
            chequeChange.newSum = chequeChange.newSum * 0.9;
        }
        setChequeChange(chequeChange);
    }

    //info buyer
    const location = useHistory();
    const onSubmit = (item) => {
        setInfoBuyer(item);
        successToast('Ваш заказ успешно принят! Мы с вами свяжемся для подтверждения заказа!');
        location.push('/success');
        console.log(item);
    }
    console.log(errors);
    

    useEffect(() => {
        let stringCheck = JSON.stringify(chequeChange);
        localStorage.setItem('check', stringCheck);
    }, [chequeChange]);
    console.log(promoCoast);

    console.log(delivery)

    return (
        <div className={classes.orderSection}>
            <h3>Оформление заказа</h3>
            <div className={classes.contentOrder}>
                <div className={classes.orderContainer}>
                    <div className={classes.typeBuyer}>
                        <h5>Тип плательщика</h5>
                        <FormControl  component="fieldset">
                            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}  row>
                                <FormControlLabel name="gender1" value="Individual" control={<Radio />} label="Физическое лицо" />
                                <FormControlLabel name="gender1" value="legal" control={<Radio />} label="Юридическое лицо" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div className={classes.infoBuyer}>
                        <h5>Информация о покупателе</h5>
                        <form className={classes.infoForm} onSubmit={handleSubmit(onSubmit)}>
                            <input className={classes.infoInput} type="text" name="name" placeholder="ФИО" ref={register({...validators, minLength: {value: 2, message: 'Не менее 2 символов'},maxLength: {value: 25, message: 'Не более 25 символов'}, pattern:{value: /[A-ZА-Я]{2,25}/i,  message: 'от 2 до 25 символов: латиница, кириллица'} })}/>               
                            <p className={classes.errors1}>{errors.name && errors.name.message}</p>
                            <input className={classes.infoInput} type="email" name="email" placeholder="email@example.com" ref={register({...validators, pattern:{value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,  message: 'Неверный адрес электронной почты'} })}/>               
                            <p className={classes.errors2}>{errors.email && errors.email.message}</p>
                            <input className={classes.infoInput} type="tel" name="mobile" placeholder="Номер телефона" ref={register({...validators, pattern:{value: /^([+]?[0-9\s-\(\)]{3,25})*$/i,  message: 'Пример: +375(29)111-11-11' } })}/>                
                            <p className={classes.errors3}>{errors.mobile && errors.mobile.message}</p>  
                            <input className={classes.infoInput} type="text" name="address" placeholder="Адрес доставки" ref={register({...validators, minLength: {value: 2, message: 'Не менее 2 символов'},maxLength: {value: 50, message: 'Не более 50 символов'} })}/>               
                            <p className={classes.errors4}>{errors.address && errors.address.message}</p>
                        </form>
                        <h5>Магазин который вас обслуживает</h5>
                        {!delivery ? <FormControl component="fieldset">
                            <RadioGroup aria-label="address" name="address1" value={value2}  onChange={addressChange} row>
                                <FormControlLabel onChange={() => {setValue2('pushkinskaya')}} name='address1' value="pushkinskaya" control={<Radio />} label="ст.м. Пушкинская" />
                                <FormControlLabel onChange={() => {setValue2('nemiga')}} name='address1' value="nemiga" control={<Radio />} label="ст.м. Немига" />
                            </RadioGroup>
                        </FormControl> : <p>Выберите форму доставки!</p>}
                    </div>
                    <div className={classes.deliveryBlock}>
                        <h5>Форма доставки</h5>
                        <div onClick={() => deliveryState(true)} className={delivery ? classes.deliveryActive : classes.delivery}>
                            <div className={classes.textDelivery}>
                                <p>Доставка курьером</p>
                                <p>заказ по выбранному<br/>адресу</p>
                            </div>
                            <div className={classes.coastDelivery}>
                                <p>500р.</p>
                            </div>
                        </div>
                        <div onClick={() => deliveryState(false)} className={ delivery ? classes.delivery : classes.deliveryActive}>
                            <div className={classes.textDelivery}>
                                <p>Самовывоз</p>
                                <p>Можно забрать ежедневно с 10:00 — 18:00</p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.moreInfoBlock}>
                        <h5>Дополнительно</h5>
                        <form className={classes.textFieldForm} noValidate autoComplete="off">
                           <TextField value={inputValue} onChange={handleChangeInput} id="standard-basic" className={classes.textField} placeholder="Дополнительная информация или промо"/>
                        </form>
                    </div>
                </div>
                <div className={classes.checkContainer}>
                    <div className={classes.checkContent}>
                        <h5>Ваша корзина</h5>
                        <div className={classes.borderCheck}>
                            <div className={classes.flexBlock}>
                                <p >{`Товары (${chequeChange.quantity})`}</p>
                                <p className={classes.checkCoast}>{`${chequeChange.sum} руб.`}</p>   
                            </div>
                            <div className={classes.flexBlock}>
                                <p>Скидка</p>
                                <p className={classes.checkDiscount}>{`${chequeChange.percent}%`}</p>   
                            </div>
                            <div className={classes.flexBlock}>
                                <p>Промо</p> 
                                <p>{inputValue === 'весна' ? '10%' : ''}</p> 
                            </div>
                        </div>
                        <div className={classes.deliveryBlock}>
                            <p>Доставка</p> 
                            <p>{delivery ? '500 руб.' : '0 руб.'}</p> 
                        </div>
                        <div className={classes.newSum}>
                            <h5>Итого</h5> 
                            <p>{chequeChange.newSum}</p> 
                        </div>
                        <button onClick={handleSubmit(onSubmit)} type='submit' form='dataUser' className={classes.buy}>Оплатить</button>
                        <p className={classes.action}>Нажимая кнопку отправить вы даете согласие на обработку пресональных данных</p>                                     
                    </div>               
                </div>
            </div>
            <ToastContainer
                newestOnTop={false}
                rtl={false}
                pauseOnFocusLoss
                className={classes.toast}
            />     
        </div>
        
    )
}

export default Ordering;