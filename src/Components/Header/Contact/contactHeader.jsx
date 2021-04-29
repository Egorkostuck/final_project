import React, {useState} from 'react';
import classes from './../../../Assets/styles/Header/contactHeader.module.sass';
import {NavLink} from 'react-router-dom';
// import {useSelector, useDispatch} from 'react-redux';
// import {changeCity} from './../../../State/Action';

const ContactHeader = () => {
    // const [city, setCity] = useState('Минск');
    // const stateContact = useSelector(state => state.contactReducer.contact),
    //     dispatch = useDispatch();
    
    // console.log(stateContact);
    // dispatch(changeCity('Минск'));
    // const switchCity = (event) => {
    //     console.log(event.currentTarget.value)
    //     dispatch(changeCity(event.currentTarget.value));
    // }
    // console.log(stateContact + 'contact');
    return(
        <div className = {classes.contactHeaderContainer}>
            <div className = {classes.sityBlock}>
                <p>
                    <select   size='1' className={classes.select} name='sity[]'>
                        <option value='Минск' >Минск</option>
                        <option value='Москва'>Москва</option>
                    </select>
                </p>
                <NavLink to='/contact'>
                    <p>Обратный звонок</p>
                </NavLink>                
            </div>
            <div className = {classes.numberBlock}>
                <p>Пн-Вс 10-19</p>
                <a href = 'tel: +375295269174'>+375(29)526-91-74</a>
            </div>
        </div>
    );
}
// onChange={switchCity}
export default ContactHeader;