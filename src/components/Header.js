import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  // Обработчик для скроллинга
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Убираем обработчик при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <div className="top-bar">
        <div className="location">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
          <span>Кыргызстан - Бишкек</span>
        </div>
        <div className="hours">
          <FontAwesomeIcon icon={faClock} className="icon" />
          <span>MON - SAT: 10:00 AM - 20:00 PM</span>
        </div>
        <div className="social-links">
          <a 
            href="https://wa.me/996990909109" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="icon" />
          </a>
          <a 
            href="https://www.instagram.com/2702ooll" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link"
          >
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </a>
        </div>
      </div>

      <div className="header-content">
        <div className="logo-section">
          <Link to="/">
            <img src={logo} alt="Логотип" className="logo-image" />
          </Link>
          <h5 className="site-name"><strong>Total</strong>Parts.kg</h5>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Введите товар" className="search-input" />
          <button className="search-button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <nav className="nav-links">
          <Link to="/">Главная</Link>
          <Link to="/about">О нас</Link>
          <Link to="/catalog">Каталог</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
