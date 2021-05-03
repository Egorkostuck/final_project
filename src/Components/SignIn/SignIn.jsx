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
        required: 'The field can not be empty '
    };

    const signIn = (value) => {
        dataUsers.find(item => item.email === value.email && item.password === value.password) ? successToast('Login completed successfully!') :  errorToast('Wrong login or password!');
    };

    return(
        <div>
            <form onSubmit={handleSubmit(signIn)} className={styles.containerForm}>
                <h3 className={styles.titleLogin}>Вход</h3>
                <input className={styles.inputLogin} type="email" name="email" placeholder="email@example.com" ref={register({...validators, pattern:{value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,  message: 'Invalid email address'} })}/>               
                <p className={styles.errors4}>{errors.email && errors.email.message}</p>
                <input className={styles.inputLogin} type="password" name="password" placeholder="Введите пароль" ref={register({...validators, pattern:{value: /^[A-Z0-9_-]{8,12}$/i,  message: '8 to 12 characters: Latin, numbers, underscore and hyphen'} })}/>                
                <p className={styles.errors5}>{errors.password && errors.password.message}  </p> 
                <button className={styles.buttonLogin} disabled={(errors.email && errors.email.message) || (errors.password && errors.password.message)}>Войти</button>  
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