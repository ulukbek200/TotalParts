// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapMarkerAlt, faPhone, faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <img src={logo} alt="Логотип" className="logo-image" />
          <h5 className="site-name">totalparts.kg</h5>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Введите товар" className="search-input" />
          <button className="search-button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <div className="contact-info">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <span>Кыргызстан - Бишкек</span>
          <FontAwesomeIcon icon={faPhone} style={{ marginLeft: '15px' }} />
          <span>+996 990 909 109</span>
        </div>
      </div>

      <div className="nav-container">
        <button className="categories-button">
          <FontAwesomeIcon icon={faBars} style={{ marginRight: '5px' }} />
          Все категории
        </button>
        <ul className="nav-links">
          <li><Link to="/">Дом</Link></li>
          <li><Link to="/about">О нас</Link></li>
          <li><Link to="/original-parts">Оригинальные запчасти</Link></li>
          <li><Link to="/lights">Лампочки</Link></li>
          <li><Link to="/batteries">Аккумуляторы</Link></li>
        </ul>
        <div className="cart">
          <Link to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: '5px' }} />
            Корзина
            <span className="cart-count" style={{ marginLeft: '5px', color: 'red' }}>5</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
