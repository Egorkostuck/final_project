import React, {useEffect} from 'react'
import styles from './../../Assets/styles/SignUp/SignUp.module.sass';
import {NavLink} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {addUser} from './../../State/Action';
import {useSelector, useDispatch} from 'react-redux';
import emailjs from 'emailjs-com';

const SignUp = ({successToast, errorToast}) => {
    const {register, handleSubmit, errors} = useForm();
    const arrUser = useSelector(state => state.userReducer.users),
        dispatch = useDispatch();
    let USERS = [];

    const validators = {
        required: 'Заполните поле'
    };

    const onSubmit = (newUser, e) => {      
        const addNewUser = () => {
            console.log(newUser)
            USERS.push(newUser);
            dispatch(addUser(newUser));
            successToast('Вы успешно зарегистрированы!');
            sendEmail(newUser); 
        };  
        if(arrUser !== 0) {
            arrUser.find(item => (item.name === newUser.name || item.email === newUser.email)) ? errorToast('Такое имя или пароль уже существуют') : addNewUser();
            e.target.reset();
        } else {
            addNewUser();
            e.target.reset();     
        } 
    };

    useEffect(() => {
        let strigArr = JSON.stringify(arrUser);
        localStorage.setItem('users', strigArr);
    },[arrUser]);

    const sendEmail = (newUser) => {    
        emailjs.send("service_qw82aqe","template_8xwzayf",{
            from_name: newUser.name,
            name: "Admin",
            email: newUser.email,
            text: 'Add new user'
        }, 'user_fTnN5ADGWjQU2M7Ny7cjV');
    };

    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}  className={styles.containerForm}>
                <h3 className={styles.titleLoginUp}>Регистрация</h3>
                <input className={styles.inputLogin} type="text" name="name" placeholder="Имя" ref={register({...validators, minLength: {value: 2, message: 'Заполните поле'},maxLength: {value: 10, message: 'Не больше 10 символов'}, pattern:{value: /[A-Z]{2,10}/i,  message: 'только латиница'} })}/>               
                <p className={styles.errors1}>{errors.name && errors.name.message}</p>
                <input className={styles.inputLogin} type="email" name="email" placeholder="email@example.com" ref={register({...validators, pattern:{value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,  message: 'Неверный адрес электронной почты'} })}/>               
                <p className={styles.errors2}>{errors.email && errors.email.message}</p>
                <input className={styles.inputLogin} type="password" name="password" placeholder="Придумайте пароль" ref={register({...validators, pattern:{value: /^[A-Z0-9_-]{8,12}$/i,  message: 'от 8 до 12 символов: латиница, числа, подчеркивание, дефис'} })}/>                
                <p className={styles.errors3}>{errors.password && errors.password.message}  </p>  
                <button type="submit" className={styles.buttonLoginUp} disabled={(errors.name && errors.name.message) || (errors.email && errors.email.message) || (errors.password && errors.password.message)}>Зарегистрироваться</button>
                <NavLink to='/sign-in'>
                    <p className={styles.linkTo}>Уже зарегистрированы?</p>
                </NavLink>
            </form>
            <ToastContainer
                newestOnTop={false}
                rtl={false}
                pauseOnFocusLoss
                className={styles.toast}
            />
        </div>
    )
}

export default SignUp;