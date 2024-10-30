import React from 'react';
import '../styles/ProductCard.css'; // Если файл в папке styles


const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{`Цена: ${product.price} сомов`}</p>
            <button className="add-to-cart">Добавить в корзину</button>
        </div>
    );
};

export default ProductCard;
