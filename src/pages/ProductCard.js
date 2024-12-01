import React from 'react';
import { FaShoppingCart, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../styles/ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
  const { id, image, title, rating, price } = product; // Распаковка объекта product
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${id}`); // Переход на страницу товара по ID
  };

  // Обработчик, если изображение не загружается
  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/200'; // Поставим заглушку на место несуществующего изображения
  };

  return (
    <div className="product-card" onClick={handleCardClick}>
      <img
        src={image}
        alt={title}
        className="product-image"
        onError={handleImageError} // Обработка ошибки изображения
      />
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
            addToCart(product);
          }}
        >
          <FaShoppingCart />
        </button>
      </div>
    </div>
  );
};
// Правильный экспорт по умолчанию
export default ProductCard;
