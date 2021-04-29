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
        required: 'The field can not be empty'
    };

    const onSubmit = (newUser) => {      
        const addNewUser = () => {
            console.log(newUser)
            USERS.push(newUser);
            dispatch(addUser(newUser));
            successToast('Вы успешно зарегистрированы!');
            sendEmail(newUser);
        };  
        if(arrUser !== 0) {
            arrUser.find(item => (item.name === newUser.name || item.email === newUser.email)) ? errorToast('Такие имя или пароль уже существуют') : addNewUser();
        } else {
            addNewUser();      
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
            <NavLink to={'/sign-in'}>
                <div className={styles.containerButtonSignUp}>
                    <button className={styles.buttonSignUp}>Sign in</button>
                </div> 
            </NavLink>
            <form onSubmit={handleSubmit(onSubmit)}  className={styles.containerForm}>
                <h3 className={styles.titleLoginUp}>Sign Up</h3>
                <input className={styles.inputLogin} type="text" name="name" placeholder="Name" ref={register({...validators, minLength: {value: 2, message: 'The field cannot be empty'},maxLength: {value: 10, message: 'No more than 10 characters'}, pattern:{value: /[A-Z]{2,10}/i,  message: 'only Latin'} })}/>               
                <p className={styles.errors}>{errors.name && errors.name.message}</p>
                <input className={styles.inputLogin} type="email" name="email" placeholder="email@example.com" ref={register({...validators, pattern:{value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,  message: 'Invalid email address'} })}/>               
                <p className={styles.errors}>{errors.email && errors.email.message}</p>
                <input className={styles.inputLogin} type="password" name="password" placeholder="password" ref={register({...validators, pattern:{value: /^[A-Z0-9_-]{8,12}$/i,  message: '8 to 12 characters: Latin, numbers, underscore and hyphen'} })}/>                
                <p className={styles.errors}>{errors.password && errors.password.message}  </p>  
                <button type="submit" className={styles.buttonLogin} disabled={(errors.name && errors.name.message) || (errors.email && errors.email.message) || (errors.password && errors.password.message)}>Sign up</button>
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