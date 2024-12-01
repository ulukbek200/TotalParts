import React from 'react';
import '../styles/ProductSection.css'; // Стили для секции продуктов

const ProductSection = ({ products, addToCart }) => {
    if (!products || products.length === 0) {
        return <p>Пока нет добавленных продуктов.</p>;
    }

    return (
        <div className="product-section">
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <img src={product.imageUrl} alt={product.name} className="product-image" />
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>Цена: {product.price} ₽</p>
                    <button onClick={() => addToCart(product)}>Добавить в корзину</button>
                </div>
            ))}
        </div>
    );
};

export default ProductSection;


