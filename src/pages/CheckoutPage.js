// src/pages/CheckoutPage.js
import React from 'react';
import CheckoutPageStyles from '../styles/CheckoutPage.css'; // Импортируем стили

const CheckoutPage = () => {
    return (
        <div className="checkout-page">
            <h2>Оформление заказа</h2>
            <div className="checkout-section">
                <h3>Данные покупателя</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Имя</label>
                        <input type="text" id="name" placeholder="Введите ваше имя" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Электронная почта</label>
                        <input type="email" id="email" placeholder="Введите ваш email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Телефон</label>
                        <input type="tel" id="phone" placeholder="Введите ваш телефон" />
                    </div>
                </form>
            </div>

            <div className="checkout-section">
                <h3>Адрес доставки</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="address">Адрес</label>
                        <input type="text" id="address" placeholder="Введите ваш адрес" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">Город</label>
                        <input type="text" id="city" placeholder="Введите город" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="postalCode">Почтовый индекс</label>
                        <input type="text" id="postalCode" placeholder="Введите почтовый индекс" />
                    </div>
                </form>
            </div>

            <div className="checkout-section">
                <h3>Способ оплаты</h3>
                <form>
                    <div className="form-group">
                        <label>
                            <input type="radio" name="payment" /> Оплата картой
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            <input type="radio" name="payment" /> Наложенный платеж
                        </label>
                    </div>
                </form>
            </div>

            <div className="checkout-summary">
                <h3>Итого: 3200 сом</h3>
                <button className="submit-button">Подтвердить заказ</button>
            </div>
        </div>
    );
};

export default CheckoutPage;


// import CatalogPage from '../styles/CatalogPage.css'