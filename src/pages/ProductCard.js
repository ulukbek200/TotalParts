import React from 'react';
import '../styles/ProductCard.css'; // Убедитесь, что путь совпадает с вашим проектом

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Цена: {product.price} сом</p>
      <button onClick={() => addToCart(product)}>Добавить в корзину</button>
    </div>
  );
};

export default ProductCard;

