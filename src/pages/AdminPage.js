import React, { useState } from 'react';
import Admin from './Admin';  // Компонент админ-панели
import AdminLogin from './AdminLogin';  // Компонент авторизации

const AdminPage = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = (isLoggedIn) => {
        setIsAuthenticated(isLoggedIn);
    };

    return (
        <div>
            {!isAuthenticated ? (
                <AdminLogin onLogin={handleLogin} />
            ) : (
                <Admin onAddProduct={(newProduct) => console.log(newProduct)} isAuthenticated={isAuthenticated} />
            )}
        </div>
    );
};

export default AdminPage;
