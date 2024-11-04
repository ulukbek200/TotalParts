// src/components/CategoryLinks.js
import React from 'react';
import '../styles/CategoryLinks.css';

const categories = [
    { name: 'Оригинальные запчасти', count: 730 },
    { name: 'Кузовные запчасти', count: 730 },
    // Добавьте остальные категории
];

const CategoryLinks = () => (
    <div className="category-links">
        {categories.map((category, index) => (
            <div key={index} className="category-item">
                <span>{category.name}</span>
                <span>{category.count} товаров</span>
            </div>
        ))}
    </div>
);

export default CategoryLinks;
