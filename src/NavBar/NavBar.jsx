import React from 'react';
import './NavBar.css';
import logo from './img/logo.svg';
import order from './img/order.svg';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='header'>
            <Link to={`/soico/home/`}><img src={logo} alt='logo'/></Link>

            <Link to={`/soico/about/`}>Про нас</Link>
            <Link to={`/soico/catalog/`}>Каталог</Link>
            <Link to={`/soico/aromas/`}>Аромати</Link>
            <Link to={`/soico/discounts/`}>Акції</Link>
            <Link to={`/soico/self-make/`}>Створи сам</Link>
            <Link to={`/soico/shipping/`}>Доставка і оплата</Link>
            <Link to={`/soico/faq/`}>FAQ</Link>

            <Link to={`/soico/login/`}>Увійти</Link>
            <Link to={`/soico/order/`}><img src={order} alt='order'/></Link>
        </div>
    );
};

export default NavBar;