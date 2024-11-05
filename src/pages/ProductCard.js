// ProductCard.js
import React from 'react';
import { FaShoppingCart, FaStar } from 'react-icons/fa';
import '../styles/ProductCard.css';

const ProductCard = ({ image, title, rating, price }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-info">
        <h4>{title}</h4>
        <div className="product-rating">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} color={i < rating ? '#FFD700' : '#e4e5e9'} />
          ))}
          <span className="rating-number">{rating}.0 (51)</span>
        </div>
        <p className="product-price">{price} сом</p>
        <button className="add-to-cart">
          <FaShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
