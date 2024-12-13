import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo23 from '../images/logo23.jpg'; // Add logo import
import '../styles/AdminLogin.css'; // Import the CSS for the login page

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const correctUsername = 'admin'; // Correct username
    const correctPassword = 'yourPassword'; // Correct password

    const handleLogin = () => {
        console.log('Attempting login with username:', username, 'and password:', password); // Log for debugging

        if (username === correctUsername && password === correctPassword) {
            // Save authentication information
            localStorage.setItem('isAuthenticated', 'true');
            console.log('Login successful, redirecting to /admin');
            navigate('/admin'); // Redirect to admin page
        } else {
            console.log('Incorrect username or password'); // Log for debugging
            alert('Неверное имя пользователя или пароль');
        }
    };

    return (
        <div className="login-container">
            <div className="logo-container">
                <img src={Logo23} alt="Company Logo" className="logo" /> {/* Display logo */}
            </div>
            <div className="login-form">
                <h2>Админ Логин</h2>
                <input
                    type="text"
                    placeholder="Введите имя пользователя"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Введите пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleLogin}>Войти</button>
            </div>
        </div>
    );
};

export default AdminLogin;

