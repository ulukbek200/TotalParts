// src/pages/CategoryPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import BatteriesPage from './BatteriesPage';
// Импорт других страниц категорий

const CategoryPage = () => {
    const { category } = useParams();

    switch (category) {
        case 'аккумуляторы':
            return <BatteriesPage />;
        // Добавь другие категории
        default:
            return <div>Категория не найдена</div>;
    }
};

export default CategoryPage;
