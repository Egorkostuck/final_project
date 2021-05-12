import React, {useEffect, useState} from 'react';
import classes from './../../Assets/styles/Contact/Contact.module.sass';
import { useForm } from 'react-hook-form';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useSelector, useDispatch} from 'react-redux';
import {changeCity} from './../../State/Action';
import MapContainer from './Map';
import emailjs from 'emailjs-com';
import { NavLink } from 'react-router-dom';

const Contact = ({successToast}) => {
    const CONTACT = [
        {city: 'Минск', mobile: '+375(29)526-91-74', office: '+375(17)123-45-67', email: 'info@rrholding.by', address: 'Трюм', color: '$red'},
        {city: 'Москва', mobile: '+7 (495) 229-85-59', office: '+ 7 (495) 116-52-25', email: 'info@rrholding.ru', address: 'ЭКСПОСТРОЙ'}
    ];
    const stateContact = useSelector(state => state.contactReducer.contact);
    const dispatch =  useDispatch();
    const {register, handleSubmit, errors} = useForm();
    const validators = {
        required: 'Заполните поле'
    };

    const city = (name) => {
        let change = CONTACT.find(item => item.city === name);
        dispatch(changeCity(change));
    }

    const feedBack = (item, e) => {
        emailjs.send("service_qw82aqe","template_8xwzayf",{
            from_name: item.name,
            name: "Admin",
            email: item.email,
            text: item.text
        }, 'user_fTnN5ADGWjQU2M7Ny7cjV');
        successToast('Ваше письмо успешно отправлено!');
        e.target.reset();
    }

    useEffect(() => {
        localStorage.setItem('city', JSON.stringify(stateContact));
    },[stateContact]);

    return(        
        <div className={classes.contactContainer} >
            <div className={classes.contactSection}>
                <h3 className={classes.titleContact}>контакты</h3>
                <div className={classes.contactBlock}>
                    <div className={classes.leftBlock}>
                        <div className={classes.contactCity}>
                            <p onClick={() => city('Минск')} className={stateContact[0].city === 'Минск' && classes.colorActive}>Минск</p>
                            <p onClick={() => city('Москва')} className={stateContact[0].city === 'Москва' && classes.colorActive}>Москва</p>
                        </div>
                        <div className={classes.infoContact}>
                            <div className={classes.columnInfo}>
                                <div>
                                    <h5>Телефон</h5>
                                    <a href='tel: +375295269174'>{stateContact[0].mobile}</a>
                                    <p className={classes.comment}>мобильный</p>
                                    <a href='tel: +375295269174'>{stateContact[0].office}</a>
                                    <p className={classes.comment}>офис</p>
                                </div>
                                <div>
                                    <h5>Время работы</h5>
                                    <p>Пн-Пт: 10.00-19.00</p>                                
                                </div>
                            </div>
                            <div className={classes.columnInfo}>
                                <div>
                                    <h5>Электронная почта</h5>
                                    <p>{stateContact[0].email}</p>
                                    <p className={classes.comment}>Все письма внимательно прочитываются!</p>
                                </div>
                                <div>
                                    <h5>Адрес</h5>
                                    <p>Центр дизайна и интерьера <br /> "{stateContact[0].address}"</p>
                                    <p className={classes.comment}>Пн-Пт: с 10.00 до 20.00<br/>Сб-Вс: с 10.00 до 19.00</p>                              
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.feedBackContainer}>
                        <form id='fromContact' onSubmit={handleSubmit(feedBack)} className={classes.containerForm}>
                            <h3 className={classes.titleLogin}>Обратная связь</h3>
                            <input className={classes.inputCall} type="text" name="name" placeholder="Имя" ref={register({...validators, minLength: {value: 2, message: 'Заполните поле'},maxLength: {value: 10, message: 'Не более 10 символов'}, pattern:{value: /[A-ZА-Я]{2,10}/i,  message: 'от 2 до 10 символов: латиница либо кириллица'} })}/>
                            <p className={classes.errors1}>{errors.name && errors.name.message}</p>
                            <input className={classes.inputCall} required type="email" name="email" placeholder="email@example.com" ref={register({...validators, pattern:{value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,  message: 'Неверный адрес электронной почты'} })}/>               
                            <p className={classes.errors2}>{errors.email && errors.email.message}</p>
                            <textarea form='fromContact' className={classes.inputText} maxLength="340" type="text" name="text" placeholder="Ваше сообщение" ref={register({...validators, minLength: {value: 2, message: 'Не меньше 2 символов'},maxLength: {value: 340, message: 'Не больше 340 символов'}, pattern:{value: /[A-ZА-Я0-9._%+-]{2,340}/i,  message: 'от 2 до 340 символов: латиница, кириллица, числа'} })}/>
                            <p className={classes.errors3}>{errors.text && errors.text.message}</p>
                            <button type="submit" className={classes.buttonCall} disabled={(errors.email && errors.email.message) || (errors.password && errors.password.message)}>Отправить</button>
                            <p>Нажимая кнопку отправить вы даете согласие на обработку пресональных данных</p> 
                        </form>
                        <ToastContainer
                            newestOnTop={false}
                            rtl={false}
                            pauseOnFocusLoss
                            className={classes.toast}
                        />                  
                    </div>                        
                </div>                    
            </div>                
            <MapContainer/>  
        </div>
        
    )
}

export default Contact;