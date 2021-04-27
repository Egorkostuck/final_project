import React, {useEffect} from 'react';
import Swiper from './../Swiper/Swiper';
import classes from './../../Assets/styles/Dashboard/dashboard.module.sass';
import styles from './../../Assets/styles/Catalog/catalog.module.sass';
import { NavLink } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import sinks from './../../Assets/img/catalogue/sinks.png';
import mixers from './../../Assets/img/catalogue/mixers.png';
import accessories from './../../Assets/img/catalogue/accessories.png';
import kitchen from './../../Assets/img/catalogue/kitchen_stoves.png';
import washbasins from './../../Assets/img/catalogue/washbasins.png';
import tableTop from './../../Assets/img/catalogue/tabletops.png';
import img1 from './../../Assets/img/popular_product/img_1.png';
import img2 from './../../Assets/img/popular_product/img_2.png';
import img3 from './../../Assets/img/popular_product/img_3.png';
import img4 from './../../Assets/img/popular_product/img_4.png';
import img5 from './../../Assets/img/popular_product/img_5.png';
import img6 from './../../Assets/img/popular_product/img_6.png';
import icon from './../../Assets/img/icons/catalogue.svg';
import iconCart from './../../Assets/img/icons/icon-cart-white.svg';
import {addGoods} from './../../State/Action';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = ({successToast}) => {
    const CATALOG = [
        {img: sinks, name: 'Мойки', path: '/catalog-sink', alt: 'Каталог моек'},
        {img: mixers, name: 'Смесители', path:'/catalog-mixers', alt: 'Каталог смесителей'},
        {img: accessories, name: 'Аксессуары', path:'/catalog-accessories', alt: 'Каталог аксессуаров'},
        {img: kitchen, name: 'Плиты', path:'/catalog-plate', alt: 'Каталог плит'},
        {img: washbasins, name: 'Умывальники', path:'/catalog-washbasins', alt: 'Каталог умывальников'},
        {img: tableTop, name: 'Столешницы', path:'/catalog-table_top', alt: 'Каталог столешниц'}
    ];
    const arrPop = useSelector(state => state.catalogReducer.popular),
        cartArr = useSelector(state => state.cartReducer.cart),
        dispatch = useDispatch();
   
    const addGoodsInCart = (item) => {
        console.log(item);
        dispatch(addGoods(item));
        successToast('Товар добавлен в корзину');
    };

    useEffect((item) => {
        let stringState = JSON.stringify(cartArr);
        localStorage.setItem('cart', stringState);          
    }, [cartArr]);

    
    return(
        <div className={classes.dashBoardSection}>
            <Swiper />
            <div className={classes.dashBoardContainer}>
                <h4 id='#catalog'>Каталог</h4>
                <div className={classes.catalogDashBoard}>
                    {CATALOG.map((item, index) => (
                        <div key={index} className={classes.blockCatalog}>
                            <img className={classes.catalogImg} src={item.img} alt={item.alt} />
                            <p className={classes.blockText}>{item.name}</p>
                            <NavLink to={item.path}>
                                <div className={classes.button}>
                                <img src={icon} alt='перейти в каталог' />
                                <p>Перейти в каталог</p>
                                </div>
                            </NavLink>
                        </div>                    
                    ))}
                </div>
            </div>
            <div className={classes.dashBoardPopularContainer}>
                <h4>Популярные товары</h4>
                <div className={classes.catalogContainer}>
                    {arrPop.map((item) => (
                        <div className={classes.catalogBlock}>
                            <img className={classes.sink} src={item.img} alt={`${item.name} image`}/>
                            <h5 className={classes.name}>{item.name}</h5>
                            <p className={classes.coast}>{`${item.coast} руб.`}</p>
                            <div>
                                <div onClick={() => addGoodsInCart(item)} className={classes.button}>
                                    <img src={iconCart} alt='иконка корзины' />
                                    <p>В корзину</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <ToastContainer
                        newestOnTop={false}
                        rtl={false}
                        pauseOnFocusLoss
                        className={styles.toast}
                    />
                </div>
            </div>
            <div className={classes.aboutCompanyContainer}>
                <h4>О компании</h4>
                <div className={classes.aboutCompanyBlock}>
                    <p>Добро пожаловать на сайт Компании Reginox Reef Holding(ООО «РеджиноксРиф   Холдинг») — единственного и официального   представителя производителя сантехнической продукции для кухни и ванной комнаты Reginox (Нидерланды).</p>
                    
                    <p>Основной специализацией нашей компании являются розничные и оптовые продажи кухонной сантехники по всей России. Мы предлагаем кухонные мойки из нержавеющей стали и гранитного композита,  смесители для кухни, а также оригинальную продукцию от Reginox:</p>

                    <ul>
                        <li><span>умывальники</span></li>
                        <li><span>окрашенные мойки</span></li>
                        <li><span>системы газовых кконфорок</span></li>
                        <li><span>многофункциональные кухонные комплексы</span></li>
                    </ul>

                    <p>Более 25 лет назад компания RRHolding представила на российском рынке кухонные мойки Reginox из нержавеющей стали, приятно удивившие покупателей отличным качеством, многообразием моделей и современным дизайном. Продукция Reginox входит в постоянный ассортимент ряда крупных фабрик-производителей мебели, введена в предложение крупнейших продавцов мебельной фурнитуры и комплектующих, и представлена вомножестве кухонных салонов по всей России. За годы нашей работы мы заключили контракты в сферах: </p>

                    <ul>
                        <li><span>авиастроение</span></li>
                        <li><span>вагоностроение</span></li>
                        <li><span>судостроение</span></li>
                        <li><span>здравоохранение</span></li>
                        <li><span>предприятия общественного питания</span></li>
                        <li><span>иные учреждения сферы обслуживания и др.</span></li>
                    </ul>

                    <h5>наши преимущества</h5>  
                    <ul>
                        <li><span>многолетний   опыт, профессиональный подход, надежное партнерство и отличная репутация на рынке</span></li>
                        <li><span>высококачественный европейский товар и гарантия производителя, соответствие всем международным и российским стандартами требованиям</span></li>
                        <li><span>постоянное наличие на складе Москвы и Санкт-Петербурга(официальное представительство ООО «Ревестал»), а также возможность изготовления под индивидуальный заказ</span></li>
                        <li><span>работа с розничными покупателями, с мелкооптовыми и крупнооптовыми заказчиками, сотрудничество с каждым покупателем или бизнширокий ассортимент и различные модификации, позволяющие реализоватьпроекты в различных сферах- доставка в любую точку России</span></li>
                    </ul> 
                    <p>Благодаря многолетнему и плодотворному тандему RRHolding и Reginox, сегодня мы имеем большое количество бизнес-партнеров, в том числе и за пределами РФ, с которыми поддерживаем и развиваем взаимовыгодные отношения, приобрели популярность среди потребителей, и сохранили за собой статус компании, предлагающей на рынке России продукцию со «стальной репутацией». Мы предлагаем лучшее качество от европейского завода-производителя (завод   расположен   в   Нидерландах,   город   Rijssen) и пожизненную гарантию на продукцию из нержавеющей стали!</p>    
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
