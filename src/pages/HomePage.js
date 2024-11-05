import React from 'react';
import { Carousel } from 'react-bootstrap';
import { FaCar, FaTools, FaOilCan, FaBatteryHalf, FaLightbulb, FaWrench, FaTachometerAlt, FaCarAlt, FaHeadphones, FaGlassWhiskey, FaLock, FaStar, FaCalendarAlt } from 'react-icons/fa';
import image1 from '../images/image1.JPG';
import '../styles/HomePage.css';
import ProductSection from '../components/ProductSection'; // Импортируем ProductSection

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
                <button className="custom-button"><FaCar /> Оригинальные запчасти</button>
                <button className="custom-button"><FaTools /> Неоригинальные запчасти</button>
                <button className="custom-button"><FaWrench /> Запчасти для ТО</button>
                <button className="custom-button"><FaCarAlt /> Автомобили</button>
                <button className="custom-button"><FaLightbulb /> Автолампы</button>
                <button className="custom-button"><FaBatteryHalf /> Аккумуляторы</button>
                <button className="custom-button"><FaOilCan /> Автомасла</button>
                <button className="custom-button"><FaTachometerAlt /> Диски</button>
                <button className="custom-button"><FaHeadphones /> Автохимия</button>
                <button className="custom-button"><FaStar /> Автостекла</button>
                <button className="custom-button"><FaCalendarAlt /> Гарантия</button>
                <button className="custom-button"><FaGlassWhiskey /> Поставщикам</button>
                <button className="custom-button"><FaLock /> Безопасность</button>
            </div>

            {/* Добавляем ProductSection ниже */}
            <ProductSection />
        </div>
    );
};

export default HomePage;
