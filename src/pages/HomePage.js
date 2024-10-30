import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../images/image1.JPG'; // Проверь путь
import ProductCard from './ProductCard'; // Импортируем компонент карточки товара
import '../styles/HomePage.css'; // Если файл в папке styles

const products = [
    {
        id: 1,
        name: 'Товар 1',
        description: 'Описание товара 1',
        price: 100,
        image: image1,
    },
    {
        id: 2,
        name: 'Товар 2',
        description: 'Описание товара 2',
        price: 150,
        image: image1, // Замените на другое изображение, если есть
    },
];

const HomePage = () => {
    return (
        <div>
            <h1>Название компании</h1>
            <div style={{ float: 'right' }}>
                <a href="https://wa.me/990909109" target="_blank" rel="noopener noreferrer">
                    Связь через WhatsApp
                </a>
            </div>
            <input type="text" placeholder="Поиск деталей" />

            {/* Карусель */}
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image1} // Используем только image1
                        alt="Первый слайд"
                    />
                    <Carousel.Caption>
                        <h3>Первый слайд</h3>
                        <p>Описание первого слайда.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="company-info">
    <h2>О нашей компании</h2>
    <p>Наша компания специализируется на продаже автозапчастей для различных моделей. Мы предлагаем только качественные товары с гарантией и быстрой доставкой.</p>
    <h3>Наши преимущества:</h3>
    <ul>
        <li>Высокое качество и проверенные товары</li>
        <li>Доступные цены</li>
        <li>Быстрая доставка</li>
        <li>Поддержка клиентов через WhatsApp</li>
    </ul>
</div>


            <h2>Рекомендуемые товары</h2>
            <div className="product-list">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
