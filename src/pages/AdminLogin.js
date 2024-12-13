import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const correctPassword = 'yourPassword'; // Убедитесь, что это правильный пароль

    const handleLogin = () => {
        console.log('Attempting login with password:', password); // Лог для отладки
        if (password === correctPassword) {
            // Сохраняем информацию об авторизации
            localStorage.setItem('isAuthenticated', 'true');
            console.log('Login successful, redirecting to /admin');
            navigate('/admin'); // Перенаправление на страницу администратора
        } else {
            console.log('Incorrect password'); // Лог для отладки
            alert('Неверный пароль');
        }
    };

    return (
        <div>
            <h2>Админ Логин</h2>
            <input
                type="password"
                placeholder="Введите пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Войти</button>
        </div>
    );
};

export default AdminLogin;
