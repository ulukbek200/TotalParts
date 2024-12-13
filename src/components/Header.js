// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapMarkerAlt, faPhone, faClock, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="header">
      <div className="top-bar">
        <div className="location">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <span>Кыргызстан - Бишкек</span>
        </div>
        <div className="phone">
          <FontAwesomeIcon icon={faPhone} />
          <span>+996 990 909 109</span>
        </div>
        <div className="hours">
          <FontAwesomeIcon icon={faClock} />
          <span>MON - SAT: 10:00 AM - 20:00 PM</span>
        </div>
        {/* <div className="cart">
          <Link to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span>Корзина</span>
            <span className="cart-count">5</span>
          </Link>
        </div> */}
      </div>

      <div className="header-content">
        <div className="logo-section">
          <img src={logo} alt="Логотип" className="logo-image" />
          <h5 className="site-name"><strong>Total</strong>Parts.kg</h5>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Введите товар" className="search-input" />
          <button className="search-button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About us</Link>
          <Link to="/catalog">Catalog</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
