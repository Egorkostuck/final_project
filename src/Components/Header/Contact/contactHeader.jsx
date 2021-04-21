import React from 'react';
import classes from './../../../Assets/styles/Header/contactHeader.module.sass';

const ContactHeader = () => {
    return(
        <div className = {classes.contactHeaderContainer}>
            <div className = {classes.sityBlock}>
                <p>Минск</p>
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