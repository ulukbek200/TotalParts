import React from 'react';

const CartPage = ({ cart, total, updateCartQuantity, removeFromCart }) => {
  return (
    <div>
      <h1>Корзина</h1>
      {cart.length === 0 ? (
        <p>Ваша корзина пуста.</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.image} alt={product.title} />
              <p>{product.title}</p>
              <p>{product.price} сом</p>
              <input
                type="number"
                value={product.quantity}
                min="1"
                onChange={(e) =>
                  updateCartQuantity(product.id, Number(e.target.value))
                }
              />
              <button onClick={() => removeFromCart(product.id)}>Удалить</button>
            </div>
          ))}
          <p>Итого: {total} сом</p>
        </div>
      )}
    </div>
  );
};

export default CartPage;
