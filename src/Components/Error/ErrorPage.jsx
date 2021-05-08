import React from 'react';
import errorImg from './../../Assets/img/error/Subtract.png';
import classes from './../../Assets/styles/Error/error.module.sass';
import { NavLink } from 'react-router-dom';


const ErrorPage = () => {
    return(
        <div className={classes.errorContainer}>
            <div className={classes.errorBlock}>
                <img src={errorImg} alt='image error'/>
                <h3>страница<br/>не существует</h3>
                <span>ошибка 404</span>
            </div>
            <div className={classes.errorInfo}>
                <p>Запрашиваемая вами страница была удалена либо никогда<br/>не существовала. Извините за неудобства.</p>                
                <NavLink to='/'>
                    <p>Вернуться на главную</p>
                </NavLink>            
            </div>
        </div>
    )
}

export default ErrorPage;