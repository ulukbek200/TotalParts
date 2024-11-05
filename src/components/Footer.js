// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Первая колонка */}
        <div className="footer-column">
          <h4>Меню компании</h4>
          <ul>
            <li><Link to="/company-info">Реквизиты и информация</Link></li>
            <li><Link to="/news">Новости</Link></li>
            <li><Link to="/careers">Вакансии</Link></li>
            <li><Link to="/suppliers">Поставщикам</Link></li>
            <li><Link to="/contact">Контакты</Link></li>
            <li>Кыргызстан - Бишкек</li> {/* Нет необходимости в ссылке */}
          </ul>
        </div>

        {/* Вторая колонка */}
        <div className="footer-column">
          <h4>Каталоги</h4>
          <ul>
            <li><Link to="/original-parts">Оригинальные запчасти</Link></li>
            <li><Link to="/batteries">Аккумуляторы</Link></li>
            <li><Link to="/sale">Распродажа</Link></li>
          </ul>
        </div>

        {/* Третья колонка */}
        <div className="footer-column">
          <h4>Помощь</h4>
          <ul>
            <li><Link to="/faq">Часто задаваемые вопросы</Link></li>
            <li><Link to="/payment">Оплата заказа</Link></li>
            <li><Link to="/delivery">Доставка заказа</Link></li>
            <li><Link to="/forgot-password">Забыл пароль</Link></li>
          </ul>
        </div>

        {/* Четвёртая колонка */}
        <div className="footer-column">
          <h4>Товары и бренды</h4>
          <ul>
            <li><Link to="/brands">Список брендов</Link></li>
            <li><Link to="/popular-products">Популярные товары</Link></li>
            <li><Link to="/stock-availability">Наличие на складах</Link></li>
          </ul>
        </div>
      </div>

      {/* Нижняя часть футера */}
      <div className="footer-bottom">
        <p>@TOTALPARTS312</p>
        <div className="footer-links">
          <Link to="/payment-methods">Принимаем к оплате</Link>
          <Link to="/offer">Оферта</Link>
          <Link to="/privacy">Конфиденциальность</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
