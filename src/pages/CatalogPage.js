// src/pages/CatalogPage.js
import React from 'react';
import '../styles/CatalogPage.css';


const categories = [
    'Аккумуляторы', 'Лампочки', 'Датчики', 'Радиаторы', 
    'Глушители', 'Бамперы', 'Сцепление','Аккумуляторы', 'Лампочки', 'Датчики', 'Радиаторы', 
    'Глушители', 'Бамперы', 'Сцепление','Сцепление'
];

const manufacturers = [
    { letter: 'A', brands: ['ABARTH', 'Alfa Romeo', 'Audi'] },
    { letter: 'B', brands: ['BMW Motorrad', 'BMW', 'Baw', 'Buick'] },
    { letter: 'F', brands: ['FAW', 'Fiat Professional', 'Fiat', 'Ford'] },
    { letter: 'f', brands: ['ABARTH', 'Alfa Romeo', 'Audi'] },
    { letter: 'j', brands: ['BMW Motorrad', 'BMW', 'Baw', 'Buick'] },
    { letter: 'e', brands: ['FAW', 'Fiat Professional', 'Fiat', 'Ford'] },
    { letter: 'j', brands: ['BMW Motorrad', 'BMW', 'Baw', 'Buick'] },
    { letter: 'e', brands: ['FAW', 'Fiat Professional', 'Fiat', 'Ford'] },
    // Добавьте остальные бренды по аналогии
];

const CatalogPage = () => {
    return (
        <div className="catalog-page">
            <h2>Поиск по каталогу:</h2>
            <div className="category-grid">
                {categories.map((category, index) => (
                    <div key={index} className="category-item">
                        {category}
                    </div>
                ))}
            </div>

            <h2>Поиск модели по каталогу производителя:</h2>
            <div className="manufacturer-grid">
                {manufacturers.map((manufacturer, index) => (
                    <div key={index} className="manufacturer-item">
                        <h3>{manufacturer.letter}</h3>
                        <ul>
                            {manufacturer.brands.map((brand, brandIndex) => (
                                <li key={brandIndex}>{brand}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CatalogPage;
