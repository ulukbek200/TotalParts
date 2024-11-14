// src/pages/CatalogPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/CatalogPage.css';

const categories = [
    'Аккумуляторы', 'Лампочки', 'Датчики', 'Радиаторы', 
    'Глушители', 'Бамперы', 'Сцепление', 'Амортизаторы',
    'Тормоза', 'Подвеска', 'Электрика', 'Фары', 
    'Шины', 'Диски', 'Фильтры', 'Масла',   'Аккумуляторы', 'Лампочки', 'Датчики', 'Радиаторы',  'Фары'
];

const manufacturers = [
    { letter: 'A', brands: ['ABARTH', 'Acura', 'Alfa Romeo', 'Aston Martin', 'Audi'] },
    { letter: 'B', brands: ['Bentley', 'BMW', 'BMW Motorrad', 'Buick'] },
    { letter: 'C', brands: ['Cadillac', 'Chevrolet', 'Chrysler', 'Citroën'] },
    { letter: 'D', brands: ['Dacia', 'Daewoo', 'Daihatsu', 'Dodge'] },
    { letter: 'F', brands: ['FAW', 'Ferrari', 'Fiat', 'Ford'] },
    { letter: 'H', brands: ['Honda', 'Hyundai', 'Hummer'] },
    { letter: 'J', brands: ['Jaguar', 'Jeep'] },
    { letter: 'K', brands: ['Kia', 'Koenigsegg'] },
    { letter: 'L', brands: ['Lada', 'Lamborghini', 'Lancia', 'Land Rover', 'Lexus'] },
    { letter: 'M', brands: ['Maserati', 'Mazda', 'McLaren', 'Mercedes-Benz', 'MINI', 'Mitsubishi'] },
    { letter: 'N', brands: ['Nissan', 'Noble'] },
    { letter: 'O', brands: ['Opel'] },
    { letter: 'P', brands: ['Peugeot', 'Porsche'] },
    { letter: 'R', brands: ['Renault', 'Rolls-Royce'] },
    { letter: 'S', brands: ['Saab', 'Seat', 'Skoda', 'Subaru', 'Suzuki'] },
    { letter: 'T', brands: ['Tesla', 'Toyota'] },
    { letter: 'V', brands: ['Volkswagen', 'Volvo'] }
];

const CatalogPage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const filteredManufacturers = manufacturers.map((manufacturer) => ({
        ...manufacturer,
        brands: manufacturer.brands.filter(brand => 
            brand.toLowerCase().includes(searchTerm)
        ),
    })).filter(manufacturer => manufacturer.brands.length > 0);

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

            <div className="search-container">
                <input 
                    type="text" 
                    placeholder="Поиск бренда..." 
                    className="brand-search-input" 
                    onChange={handleSearch}
                />
            </div>

            <div className="manufacturer-grid">
                {filteredManufacturers.map((manufacturer, index) => (
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
        </div> // Закрывающий тег для корневого div
    );
};

export default CatalogPage;
