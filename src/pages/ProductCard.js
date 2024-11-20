import React from 'react';
import { useNavigate } from 'react-router-dom'; // Для перехода по маршрутам
import { FaShoppingCart, FaStar } from 'react-icons/fa';
import '../styles/ProductCard.css';

const ProductCard = ({ id, image, title, rating, price }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${id}`); // Переход на страницу товара по ID
  };

  return (
    <div className="product-card" onClick={handleCardClick}>
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
        <button
          className="add-to-cart"
          onClick={(e) => {
            e.stopPropagation(); // Останавливаем событие, чтобы не вызывался `handleCardClick`
            console.log(`Товар с ID ${id} добавлен в корзину`);
          }}
        >
          <FaShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
