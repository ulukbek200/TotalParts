import '../styles/Admin.css'; // Импорт стилей для административной панели 
import React, { useState } from 'react'; // Импорт React и хука useState для управления состоянием 
 
// Компонент Admin для административной панели 
function Admin() { 
    const [imageUrl, setImageUrl] = useState(''); // Состояние для хранения URL изображения 
    const [errorMessage, setErrorMessage] = useState(''); // Состояние для хранения сообщения об ошибке 
    const [productAvailable, setProductAvailable] = useState(true); // Состояние для чекбокса наличия продукта 
 
    // Функция для вставки изображения по URL 
    const insertImage = () => { 
        if (imageUrl) { 
            setErrorMessage(''); // Очистка сообщения об ошибке, если URL корректен 
        } else { 
            setErrorMessage('Please enter the correct URL of the image.'); // Сообщение об ошибке, если URL не введен 
        } 
    }; 
 
    // Функция для переключения состояния наличия продукта 
    const toggleStatus = () => { 
        setProductAvailable(!productAvailable); // Переключение состояния наличия 
    }; 
 
    return ( 
        <div> 
            <h1 className='adminName'>Total-Parts Admin Panel</h1> 
 
            {/* Ввод и добавление новой детали */} 
            <div className='introduction'> 
                <input className='search' type="search" placeholder='Search' /> 
                <button className='new_title'>New detail</button> 
            </div> 
 
            <div> 
                <label className='title_article'>Name of the new detail</label> 
                <input className='name' type="text" placeholder='Name' /> 
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
                        {productAvailable ? 'In stock' : 'Out of stock'} 
                    </span> 
                </label> 
            </div> 
 
            <div> 
                <label className='title_article'>Detail information</label> 
                <input className='name' type="text" placeholder='Text' /> 
            </div> 
 
            {/* Вставка изображения через ссылку */} 
            <div className="adminImage"> 
                <p className='title_article'>Inserting an image via a link</p> 
                <input   
                    className='name'  
                    type="text"  
                    placeholder="Enter the image URL"  
                    value={imageUrl}  
                    onChange={(e) => setImageUrl(e.target.value)}  
                /> 
                <button className='trOne' onClick={insertImage}> 
                    <p className='trOneText'>Insert an image</p> 
                </button> 
                <div className='instImage'> 
                    {imageUrl && <img src={imageUrl} alt="Your image will be here" style={{ maxWidth: '100%', height: 'auto' }} />} 
                    {errorMessage && <p className="error">{errorMessage}</p>} 
                </div> 
            </div> 
        </div> 
    ); 
} 
 
export default Admin; // Экспорт компонента Admin