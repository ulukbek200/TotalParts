// src/pages/ProductDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { productId } = useParams(); // Получаем ID товара из маршрута

    // Здесь можешь получить данные товара (например, из API или стейта)
    // Для примера создадим список товаров
    const products = [
        { id: '1', title: 'Mobil SUPER 3000 X1 5W-40, 1 л.', description: 'Описание товара 1', price: 5690 },
        { id: '2', title: 'Шины зимние', description: 'Описание товара 2', price: 5690 },
        { id: '3', title: 'Тормозные диски', description: 'Описание товара 3', price: 5690 },
    ];

    const product = products.find((p) => p.id === productId);

    if (!product) {
        return <h2>Товар не найден</h2>;
    }

    return (
        <div>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>Цена: {product.price} руб.</p>
        </div>
    );
};

export default ProductDetails;
