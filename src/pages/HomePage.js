import React from 'react';
import { Carousel } from 'react-bootstrap';
import {
    FaCar,
    FaTools,
    FaOilCan,
    FaBatteryHalf,
    FaLightbulb,
    FaWrench,
    FaTachometerAlt,
    FaCarAlt,
    FaHeadphones,
    FaGlassWhiskey,
    FaLock,
    FaStar,
    FaCalendarAlt,
} from 'react-icons/fa';
import image1 from '../images/image1.JPG';
import '../styles/HomePage.css';
import ProductSection from '../components/ProductSection'; // Импортируем ProductSection

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

const HomePage = () => {
    return (
        <div>
            <Carousel className="custom-carousel">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="Первый слайд"
                    />
                    <Carousel.Caption>
                        <h3>Первый слайд</h3>
                        <p>Описание первого слайда.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <h2>Наши услуги</h2>
            <div className="button-container">
                {services.map((service, index) => (
                    <button key={index} className="custom-button">
                        {service.icon} {service.label}
                    </button>
                ))}
            </div>

            {/* Добавляем ProductSection ниже */}
            <ProductSection />
        </div>
    );
};

export default HomePage;
