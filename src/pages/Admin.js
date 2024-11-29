import React, { useState } from 'react';
import '../styles/Admin.css';

const Admin = ({ onAddProduct }) => {
    const [productName, setProductName] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [productAvailable, setProductAvailable] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const handleAddProduct = () => {
        if (productName && productCategory) {
            const newProduct = {
                id: Date.now(), // Уникальный идентификатор
                name: productName,
                category: productCategory,
                description: productDescription,
                imageUrl: imageUrl,
                available: productAvailable,
            };

            onAddProduct(newProduct); // Передача данных в App.js
            alert('Продукт добавлен успешно!');

            // Сброс полей
            setProductName('');
            setProductCategory('');
            setProductDescription('');
            setImageUrl('');
            setProductAvailable(true);
            setErrorMessage('');
        } else {
            setErrorMessage('Введите название и выберите категорию!');
        }
    };

    return (
        <div>
            <h1 className="adminName">Админ Панель</h1>
            <input
                type="text"
                placeholder="Название детали"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
            />
            <select
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
            >
                <option value="">Выберите категорию</option>
                <option value="Аккумуляторы">Аккумуляторы</option>
                <option value="Лампочки">Лампочки</option>
                <option value="Радиаторы">Радиаторы</option>
                <option value="Глушители">Глушители</option>
                <option value="Бамперы">Бамперы</option>
                <option value="Сцепление">Сцепление</option>
                <option value="Амортизаторы">Амортизаторы</option>
                <option value="Тормоза">Тормоза</option>
                <option value="Подвеска">Подвеска</option>
                <option value="Электрика">Электрика</option>
                <option value="Шины">Шины</option>
                <option value="Диски">Диски</option>
                <option value="Фильтры">Фильтры</option>
                <option value="Масла">Масла</option>

                




            </select>
            <input
                type="text"
                placeholder="Описание"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
            />
            <input
                type="text"
                placeholder="URL изображения"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
            />
            <button onClick={handleAddProduct}>Добавить продукт</button>
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
};

export default Admin;
