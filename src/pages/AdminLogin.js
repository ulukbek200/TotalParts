import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const correctPassword = 'Ulukbek'; // Замените на ваш пароль
        if (password === correctPassword) {
            localStorage.setItem('isAdminAuthenticated', 'true'); // Устанавливаем флаг
            navigate('/admin'); // Перенаправляем в админ-панель
        } else {
            alert('Неверный пароль!');
        }
    };

    return (
        <div>
            <h2>Авторизация Админа</h2>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Введите пароль"
            />
            <button onClick={handleLogin}>Войти</button>
        </div>
    );
};

export default AdminLogin;
