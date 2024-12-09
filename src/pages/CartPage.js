import React from 'react';

const CartPage = ({ cart, total, updateCartQuantity, removeFromCart }) => {
    return (
        <div>
            <h2>Корзина</h2>
            {cart.length === 0 ? (
                <p>Корзина пуста</p>
            ) : (
                <div>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id}>
                                {item.name} - {item.price} сом
                                <input
                                    type="number"
                                    value={item.quantity}
                                    onChange={(e) =>
                                        updateCartQuantity(item.id, parseInt(e.target.value))
                                    }
                                />
                                <button onClick={() => removeFromCart(item.id)}>Удалить</button>
                            </li>
                        ))}
                    </ul>
                    <h3>Общая стоимость: {total} сом</h3>
                </div>
            )}
        </div>
    );
};

export default CartPage;
