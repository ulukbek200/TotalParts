import React, { useState } from 'react';
import '../styles/Admin.css'; // Импорт стилей

function Admin() {
    const [productName, setProductName] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [productAvailable, setProductAvailable] = useState(true);

    const insertImage = () => {
        if (imageUrl) {
            setErrorMessage('');
        } else {
            setErrorMessage('Please enter the correct URL of the image.');
        }
    };

    const toggleStatus = () => {
        setProductAvailable(!productAvailable);
    };

    const handleAddProduct = () => {
        if (productName && productCategory) {
            // Здесь нужно добавить код для отправки данных на сервер или добавления продукта в базу данных
            console.log({
                name: productName,
                category: productCategory,
                description: productDescription,
                imageUrl: imageUrl,
                available: productAvailable,
            });
            setErrorMessage(''); // Очистка сообщения об ошибке
            alert('Продукт добавлен успешно!');
        } else {
            setErrorMessage('Введите название и выберите категорию для продукта.');
        }
    };

    return (
        <div>
            <h1 className="adminName">Админ Панель Total-Parts</h1>

            {/* Добавление новой детали */}
            <div className="introduction">
                <input
                    className="search"
                    type="search"
                    placeholder="Поиск"
                />
                <button className="new_title">Добавить деталь</button>
            </div>

            <div>
                <label className="title_article">Название детали</label>
                <input
                    className="name"
                    type="text"
                    placeholder="Название"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                />
            </div>

            <div>
                <label className="title_article">Категория детали</label>
                <select
                    className="name"
                    value={productCategory}
                    onChange={(e) => setProductCategory(e.target.value)}
                >
                    <option value="">Выберите категорию</option>
                    <option value="Аккумуляторы">Аккумуляторы</option>
                    <option value="Лампочки">Лампочки</option>
                    <option value="Датчики">Датчики</option>
                    <option value="Радиаторы">Радиаторы</option>
                    {/* Добавьте остальные категории */}
                </select>
            </div>

            <div>
                <label className="title_article">Описание детали</label>
                <input
                    className="name"
                    type="text"
                    placeholder="Описание"
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                />
            </div>

            {/* Вставка изображения через ссылку */}
            <div className="adminImage">
                <p className="title_article">Вставить изображение по ссылке</p>
                <input
                    className="name"
                    type="text"
                    placeholder="Введите URL изображения"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                />
                <button className="trOne" onClick={insertImage}>
                    <p className="trOneText">Вставить изображение</p>
                </button>
                <div className="instImage">
                    {imageUrl && <img src={imageUrl} alt="Ваше изображение" style={{ maxWidth: '100%', height: 'auto' }} />}
                    {errorMessage && <p className="error">{errorMessage}</p>}
                </div>
            </div>

            {/* Статус наличия продукта */}
            <div className="product">
                <label className="status-label">
                    <input
                        type="checkbox"
                        className="status-checkbox"
                        onChange={toggleStatus}
                        checked={productAvailable}
                    />
                    <span className="status-text">
                        {productAvailable ? 'В наличии' : 'Нет в наличии'}
                    </span>
                </label>
            </div>

            {/* Кнопка добавления продукта */}
            <button className="tr" onClick={handleAddProduct}>
                <p className="plus">+</p>
                <span>Добавить продукт</span>
            </button>
        </div>
    );
}

export default Admin;
