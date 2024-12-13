import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = ({ products }) => {
    const { productId } = useParams(); // Получаем ID товара из маршрута

    // Приводим productId к числу и ищем товар по ID
    const product = products.find((p) => p.id === parseInt(productId));

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
