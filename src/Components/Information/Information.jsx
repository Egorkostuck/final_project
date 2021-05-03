import React from 'react';
import buyers from './../../Assets/img/information/buyers.png';
import partners from './../../Assets/img/information/partners.png';
import {NavLink} from 'react-router-dom';
import eye from './../../Assets/img/icons/icon-eye-white.png';
import classes from './../../Assets/styles/Information/information.module.sass';

const Information = () => {
    return (
        <div className={classes.informationSection}>
            <h3>Информация</h3>
            <div className={classes.informationContainer}>
                <span>«Реджинокс Риф Холдинг» является эксклюзивным представителем в<br/>России нидерландской Компании «REGINOX».</span>
                <div className={classes.informationContent}>
                    <div className={classes.informationBlock}>
                        <img src={buyers} alt='image buyers info' />
                        <p>Для розничных<br/>покупателей</p>
                        <NavLink to='/info-buyer'>
                            <div className={classes.button}>
                                <img className={classes.iconEye} src={eye} alt='icon-eye' />
                                <p>Смотреть</p>
                            </div>
                        </NavLink>
                    </div>
                    <div className={classes.informationBlock}>
                        <img src={partners} alt='image partners info' />
                        <p>Для партнеров</p>
                        <NavLink to='/info-partners'>
                            <div className={classes.button}>
                                <img className={classes.iconEye} src={eye} alt='icon-eye' />
                                <p>Смотреть</p>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information;