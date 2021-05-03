import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import classes from './../../Assets/styles/Footer/footer.module.sass';
import { NavLink } from 'react-router-dom';
import terSteege from './../../Assets/img/logo/logo_TSG.png';
import holdings from './../../Assets/img/logo/PRHolding_logo.png';
import image from './../../Assets/img/logo/logo_block.png';
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
    let DATACOMPANY = [
        {tittle: 'Почему мы', path: '/why-are-we'},
        {tittle: 'Каталоги', path: '/'},
        {tittle: 'Контакты', path: '/contact'}
    ];
    let DATACATALOG = [
        {tittle: 'Мойки', path: '/catalog-sink'},
        {tittle: 'Смесители', path: '/catalog-mixer'},
        {tittle: 'Плиты', path: '/catalog-plate'}
    ];
    let DATABRANDS = [
        {tittle: 'Reginox', path: '/reginox'},
        {tittle: 'Rodi', path: '/rodi'},
        {tittle: 'Status', path: '/status'}
    ];
    return (
        <footer className = {classes.footerContainer}>
            <div className = {classes.accordionContainer}>
                <Accordion className = {classes.accordionBlock}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                        <Typography className={classes.heading}>О компании</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {DATACOMPANY.map((item, index) => (
                                <NavLink className = {classes.itemLink} key = {index} to = {item.path}>
                                    <p>{item.tittle}</p>
                                </NavLink>
                            ))}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className = {classes.accordionBlock}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                        <Typography className={classes.heading}>Каталог</Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                        <Typography>
                            {DATACATALOG.map((item, index) => (
                                <NavLink className = {classes.itemLink} key = {index} to = {item.path}>
                                    <p>{item.tittle}</p>
                                </NavLink>
                            ))}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className = {classes.accordionBlock}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                        <Typography className={classes.heading}>Бренды</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {DATABRANDS.map((item, index) => (
                                <NavLink exact className = {classes.itemLink} key = {index} to = {item.path}>
                                    <p>{item.tittle}</p>
                                </NavLink>
                            ))}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className = {classes.socialNetworksSection}>
                <div className = {classes.socialContainer}>
                    <div className = {classes.corporationBlock}>
                        <img src = {terSteege} alt = 'Ter steege groep image' />
                        <img src = {holdings} alt = 'RP image' />
                    </div>
                    <div className = {classes.socialBlock}>
                        <a href = 'https://ru-ru.facebook.com' target = '_blank'><i className = "fab fa-facebook-f"></i></a>
                        <a href = 'https://twitter.com' target = '_blank'><i className = "fab fa-twitter"></i></a>
                        <a href = 'https://vk.com' target = '_blank'><i className = "fab fa-vk"></i></a>
                        <a href = 'https://www.instagram.com' target = '_blank'><i className = "fab fa-instagram"></i></a>
                    </div>
                    <img src = {image} alt = 'image' />
                </div>
            </div>
            <div className = {classes.privacyPolicySection}>
                <div>
                    <a href = 'https://yandex.ru/legal/confidential' target = '_blank'>Политика конфиденциальности</a>
                </div>
                <div>
                    <p>2020 © Reginox-shop</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;