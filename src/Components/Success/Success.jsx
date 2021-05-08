import React from 'react';
import { NavLink } from 'react-router-dom';
import successImage from './../../Assets/img/success/success.png';
import classes from './../../Assets/styles/Success/success.module.sass';

const Success = () => {
    return(
        <div className={classes.successContainer}>
            <h3>ваш заказ успешно<br/>оформлен!</h3>
            <div className={classes.successBlock}>
                <img src={successImage} alt='image-crown'/>
                <p>В случае обмена/возврата товара надлежащего качества мы гарантируем Вам соблюдение прав покупателя, предусмотренных Федеральным законом «О защите прав потребителей», если Вы обратитесь с соответствующими требованиями в течение четырнадцати дней со дня покупки, не считая день покупки. </p>
                <NavLink to='/'>
                    <span>Вернуться на главную</span>
                </NavLink>
                
            </div>
        </div>
    )
}

export default Success;