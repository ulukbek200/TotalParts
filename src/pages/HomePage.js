import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { 
    FaCar, 
    FaTools, 
    FaWrench, 
    FaCarAlt, 
    FaLightbulb, 
    FaBatteryHalf, 
    FaOilCan, 
    FaTachometerAlt, 
    FaHeadphones, 
    FaStar, 
    FaCalendarAlt, 
    FaGlassWhiskey, 
    FaLock 
} from 'react-icons/fa';
import ProductSection from '../components/ProductSection';
import image1 from '../images/image1.JPG';
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'
import '../styles/HomePage.css';

const services = [
    { icon: <FaCar />, label: 'Оригинальные запчасти' },
    { icon: <FaTools />, label: 'Неоригинальные запчасти' },
    { icon: <FaWrench />, label: 'Запчасти для ТО' },
    { icon: <FaCarAlt />, label: 'Автомобили' },
    { icon: <FaLightbulb />, label: 'Автолампы' },
    { icon: <FaBatteryHalf />, label: 'Аккумуляторы' },
    { icon: <FaOilCan />, label: 'Автомасла' },
    { icon: <FaTachometerAlt />, label: 'Диски' },
    { icon: <FaHeadphones />, label: 'Автохимия' },
    { icon: <FaStar />, label: 'Автостекла' },
    { icon: <FaCalendarAlt />, label: 'Гарантия' },
    { icon: <FaGlassWhiskey />, label: 'Поставщикам' },
    { icon: <FaLock />, label: 'Безопасность' },
];

const HomePage = ({ addToCart, onAddProduct }) => {
    const [recommendedProducts, setRecommendedProducts] = useState([]);
    const [topSellingProducts, setTopSellingProducts] = useState([]);

    const handleAddProduct = (newProduct) => {
        if (newProduct.category === 'Рекомендуемые') {
            setRecommendedProducts((prev) => [...prev, newProduct]);
        } else if (newProduct.category === 'Топ продаж') {
            setTopSellingProducts((prev) => [...prev, newProduct]);
        } else {
            alert('Категория должна быть "Рекомендуемые" или "Топ продаж"');
        }
    };

    return (
        <div>
            {/* Карусель */}
            <Carousel className="custom-carousel">
                <Carousel.Item>
                    <img className="d-block w-100" src={image1} alt="Первый слайд" />
                    <Carousel.Caption>
                        <h3>Первый слайд</h3>
                        <p>Описание первого слайда.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src={image2} alt="Второй слайд" />
                    <Carousel.Caption>
                        <h3>Второй слайд</h3>
                        <p>Описание второго слайда.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src={image3} alt="Третий слайд" />
                    <Carousel.Caption>
                        <h3>Третий слайд</h3>
                        <p>Описание третьего слайда.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* Услуги */}
            <h2>Наши услуги</h2>
            <div className="button-container">
                {services.map((service, index) => (
                    <button
                        key={index}
                        className="custom-button"
                        onClick={() => console.log(`Кнопка ${service.label} была нажата`)}
                    >
                        {service.icon} {service.label}
                    </button>
                ))}
            </div>

            {/* Секции продуктов */}
            <h2>Рекомендуемые</h2>
            <ProductSection 
                products={recommendedProducts} 
                addToCart={addToCart} 
            />

            <h2>Топ продаж</h2>
            <ProductSection 
                products={topSellingProducts} 
                addToCart={addToCart} 
            />
        </div>
    );
};

export default HomePage;
