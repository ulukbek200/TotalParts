import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryPage = ({ products = [] }) => {
    const { category } = useParams();

    // Проверяем, что products — это массив
    const filteredProducts = products
        ? products.filter(
            (product) =>
                product.category?.toLowerCase() === category?.toLowerCase()
        )
        : [];

    return (
        <div>
            <h2>Категория: {category}</h2>
            <div className="product-list">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div key={product.id} className="product-card">
                            <img src={product.imageUrl} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>{product.available ? 'Доступен' : 'Недоступен'}</p>
                        </div>
                    ))
                ) : (
                    <p>Продукты не найдены в этой категории.</p>
                )}
            </div>
        </div>
    );
};

export default CategoryPage;
