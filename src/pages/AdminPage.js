import React, { useState } from 'react';
import Admin from '../pages/Admin';

const AdminPage = () => {
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
            <h1>Админ-панель</h1>
            <Admin onAddProduct={handleAddProduct} />
        </div>
    );
};

export default AdminPage;
