import React, { useState } from 'react';
import '../styles/Admin.css';
import Logo23 from '../images/logo23.jpg'; // Use the imported logo here

const Admin = ({ onAddProduct }) => {
    const [productName, setProductName] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productAvailable, setProductAvailable] = useState(true);
    const [formErrors, setFormErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleAddProduct = () => {
        const errors = {
            productName: '',
            productCategory: '',
            productPrice: '',
            imageUrl: '',
        };

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

        onAddProduct(newProduct);

        setProductName('');
        setProductCategory('');
        setProductDescription('');
        setImageUrl('');
        setProductPrice('');
        setProductAvailable(true);
        setFormErrors({});
        setSuccessMessage('Продукт добавлен успешно!');

        setTimeout(() => setSuccessMessage(''), 3000);
    };

    return (
        <div className="admin-container">
            <div className="logo-container">
                <img src={Logo23} alt="Company Logo" className="logo" /> {/* Use Logo23 here */}
            </div>
            <div className="admin-panel">
                <h1>Админ Панель</h1>
                {successMessage && <p className="success">{successMessage}</p>}
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
                    <option value="Топ продаж">Топ продаж</option>
                    <option value="Аккумуляторы">Аккумуляторы</option>
                    <option value="Лампочки">Лампочки</option>
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
            </div>
        </div>
    );
};

export default Admin;
