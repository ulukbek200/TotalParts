// src/pages/CatalogPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CatalogPage.css';

const categories = [
    'Аккумуляторы', 'Лампочки', 'Датчики', 'Радиаторы', 
    'Глушители', 'Бамперы', 'Сцепление', 'Амортизаторы',
    'Аккумуляторы', 'Лампочки', 'Датчики', 'Радиаторы', 
    'Глушители', 'Бамперы', 'Сцепление', 'Амортизаторы', 'Сцепление', 'Амортизаторы'
];

const manufacturers = [
    { letter: 'A', brands: ['ABARTH', 'Alfa Romeo', 'Audi'] },
    { letter: 'B', brands: ['BMW Motorrad', 'BMW', 'Baw', 'Buick'] },
    { letter: 'F', brands: ['FAW', 'Fiat Professional', 'Fiat', 'Ford'] }
];

const CatalogPage = () => {
    return (
        <div className="catalog-page">
            <h2>Поиск по каталогу:</h2>
            <div className="category-grid">
                {categories.map((category, index) => (
                    <Link 
                        to={`/catalog/${category.toLowerCase()}`} 
                        key={index} 
                        className="category-item"
                    >
                        {category}
                    </Link>
                ))}
            </div>

            <h2>Поиск модели по каталогу производителя:</h2>
            <div className="manufacturer-grid">
                {manufacturers.map((manufacturer, index) => (
                    <div key={index} className="manufacturer-item">
                        <h3>{manufacturer.letter}</h3>
                        <ul>
                            {manufacturer.brands.map((brand, brandIndex) => (
                                <li key={brandIndex} className="brand-item">
                                    {brand}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CatalogPage;
