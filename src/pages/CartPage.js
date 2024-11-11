// src/pages/CartPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate
import CartPageStyles from '../styles/CartPage.css';

const CartPage = () => {
    const navigate = useNavigate(); // Инициализируем navigate

    // Пример данных товаров в корзине
    const cartItems = [
        { id: 1, name: 'Product 1', price: 500, quantity: 1, imageUrl: 'image1.jpg' },
        { id: 2, name: 'Product 2', price: 1200, quantity: 2, imageUrl: 'image2.jpg' },
    ];

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    // Функция для обработки нажатия на кнопку "Оформить заказ"
    const handleCheckout = () => {
        navigate('/checkout'); // Переход на страницу оформления заказа
    };

    return (
        <div className="cart-page">
            <h2>Корзина</h2>
            <div className="cart-items">
                {cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                        <img src={item.imageUrl} alt={item.name} className="item-image" />
                        <div className="item-details">
                            <h3>{item.name}</h3>
                            <p>Цена: {item.price} сом</p>
                            <div className="quantity-control">
                                <button>-</button>
                                <span>{item.quantity}</span>
                                <button>+</button>
                            </div>
                        </div>
                        <p className="item-total">Итого: {item.price * item.quantity} сом</p>
                    </div>
                ))}
            </div>
            <div className="cart-summary">
                <h3>Общая стоимость: {totalPrice} сом</h3>
                <button onClick={handleCheckout} className="checkout-button">Оформить заказ</button>
            </div>
        </div>
    );
};

export default CartPage;

