import React from 'react';
import styles from './../../Assets/styles/SignUp/SignUp.module.sass';
import {NavLink} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useSelector} from 'react-redux'


const SignIn = ({successToast, errorToast}) => {
    const {register, handleSubmit, errors} = useForm();
    const dataUsers = useSelector(state => state.userReducer.users);
    const validators = {
        required: 'Заполните поле'
    };

    const signIn = (value) => {
        dataUsers.find(item => item.email === value.email && item.password === value.password) ? successToast('Вход успешно завершен!') :  errorToast('Неверный логин или пароль!');
    };

    return(
        <div>
            <form onSubmit={handleSubmit(signIn)} className={styles.containerForm}>
                <h3 className={styles.titleLogin}>Вход</h3>
                <input className={styles.inputLogin} type="email" name="email" placeholder="email@example.com" ref={register({...validators, pattern:{value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,  message: 'Неверный адресс электронной почты'} })}/>               
                <p className={styles.errors4}>{errors.email && errors.email.message}</p>
                <input className={styles.inputLogin} type="password" name="password" placeholder="Введите пароль" ref={register({...validators, pattern:{value: /^[A-Z0-9_-]{8,12}$/i,  message: 'от 8 до 12 символов: латиница, числа, подчеркивание, дефис'} })}/>                
                <p className={styles.errors5}>{errors.password && errors.password.message}  </p> 
                <button className={styles.buttonLogin} disabled={(errors.email && errors.email.message) || (errors.password && errors.password.message)}>Войти</button>  
                <NavLink to='/sign-up'>
                    <p className={styles.linkTo}>Еще нет аккаунта?</p>
                </NavLink>
                <ToastContainer
                    newestOnTop={false}
                    rtl={false}
                    pauseOnFocusLoss
                    className={styles.toast}
                />
            </form>
        </div>
    )
}

export default SignIn;