import React from 'react';
import classes from './../../../Assets/styles/Header/contactHeader.module.sass';

const ContactHeader = () => {
    return(
        <div className = {classes.contactHeaderContainer}>
            <div className = {classes.sityBlock}>
                <p>
                    <select size='1' className={classes.select} name='sity[]'>
                        <option value='Minsk' >Минск</option>
                        <option value='Moskow'>Москва</option>
                        <option value='Grodno'>Гродно</option>
                    </select>
                </p>
                <p>Обратный звонок</p>
            </div>
            <div className = {classes.numberBlock}>
                <p>Пн-Вс 10-19</p>
                <a href = 'tel: +375295269174'>+375(29)526-91-74</a>
            </div>
        </div>
    );
}

export default ContactHeader;