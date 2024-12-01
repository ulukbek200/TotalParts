import React, { useState } from 'react';
import '../styles/Admin.css';

const Admin = ({ onAddProduct }) => {
    const [productName, setProductName] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productAvailable, setProductAvailable] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [formErrors, setFormErrors] = useState({
        productName: '',
        productCategory: '',
        productPrice: '',
        imageUrl: '',
    });

    const clearForm = () => {
        setProductName('');
        setProductCategory('');
        setProductDescription('');
        setImageUrl('');
        setProductPrice('');
        setProductAvailable(true);
        setFormErrors({
            productName: '',
            productCategory: '',
            productPrice: '',
            imageUrl: '',
        });
    };

    const handleAddProduct = () => {
        const errors = {
            productName: '',
            productCategory: '',
            productPrice: '',
            imageUrl: '',
        };

        // Валидация полей
        if (!productName) {
            errors.productName = 'Название не может быть пустым';
        }
        if (!productCategory) {
            errors.productCategory = 'Выберите категорию';
        }
        if (!productPrice || parseFloat(productPrice) <= 0) {
            errors.productPrice = 'Цена должна быть больше 0';
        }
        if (imageUrl && !/^https?:\/\/.+/i.test(imageUrl)) {
            errors.imageUrl = 'Введите корректный URL';
        }
        

        if (Object.values(errors).some((error) => error)) {
            setFormErrors(errors);
            return;
        }

        const newProduct = {
            id: Date.now(),
            name: productName,
            category: productCategory,
            description: productDescription,
            imageUrl: imageUrl,
            price: parseFloat(productPrice),
            available: productAvailable,
        };

        onAddProduct(newProduct); // Вызываем переданную функцию для добавления продукта
        alert('Продукт добавлен успешно!');
        clearForm();
    };

    return (
        <div className="admin-container">
            <h1>Админ Панель</h1>
            <input
                type="text"
                placeholder="Название детали"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
            />
            {formErrors.productName && <p className="error">{formErrors.productName}</p>}
            <select
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
            >
                <option value="">Выберите категорию</option>
                <option value="Рекомендуемые">Рекомендуемые</option>
                <option value="Топ продаж">Топ продаж</option> {/* Исправлено на корректное имя категории */}
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
            {formErrors.productCategory && <p className="error">{formErrors.productCategory}</p>}
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
            {formErrors.imageUrl && <p className="error">{formErrors.imageUrl}</p>}
            <input
                type="number"
                placeholder="Цена"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
            />
            {formErrors.productPrice && <p className="error">{formErrors.productPrice}</p>}
            <button onClick={handleAddProduct}>Добавить продукт</button>
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
};

export default Admin;
