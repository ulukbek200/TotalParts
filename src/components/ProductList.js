import React from 'react';

const ProductList = ({ products }) => {
    return (
        <div>
            <h2>Список продуктов</h2>
            <div className="product-list">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.imageUrl} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.category}</p>
                        <p>{product.description}</p>
                        <p>{product.available ? 'Доступен' : 'Недоступен'}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
