import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Admin from './pages/Admin';
import AdminLogin from './pages/AdminLogin';
import CartPage from './pages/CartPage';
import CatalogPage from './pages/CatalogPage';
import CategoryPage from './pages/CategoryPage';
import ProductDetails from './pages/ProductDetails';
import RecommendedPage from './pages/RecommendedPage';
import DevelopersPage from './pages/DevelopersPage';

const AppContent = () => {
    const location = useLocation();
    const hideHeaderFooter = location.pathname === '/developers';

    // Состояние авторизации
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Функция для загрузки продуктов из localStorage
    const loadProductsFromStorage = () => {
        const savedProducts = localStorage.getItem('products');
        return savedProducts ? JSON.parse(savedProducts) : [];
    };

    // Состояние продуктов
    const [products, setProducts] = useState(loadProductsFromStorage());

    useEffect(() => {
        // Проверка из localStorage на успешную авторизацию
        const userAuthStatus = localStorage.getItem('isAuthenticated') === 'true';
        console.log('Authentication status:', userAuthStatus); // Лог для отладки
        setIsAuthenticated(userAuthStatus);
    }, []);

    const handleLogin = () => {
        // Обновление состояния авторизации и сохранение в localStorage
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', 'true');
        console.log('User logged in'); // Лог для отладки
    };

    const handleLogout = () => {
        // Логаут пользователя, удаление из localStorage
        setIsAuthenticated(false);
        localStorage.setItem('isAuthenticated', 'false');
        console.log('User logged out'); // Лог для отладки
    };

    // Функция для добавления продукта
    const handleAddProduct = (newProduct) => {
        const updatedProducts = [...products, newProduct];
        setProducts(updatedProducts);
        // Сохраняем обновленный список продуктов в localStorage
        localStorage.setItem('products', JSON.stringify(updatedProducts));
    };

    return (
        <>
            {!hideHeaderFooter && <Header onLogout={handleLogout} isAuthenticated={isAuthenticated} />} {/* Передаем состояние авторизации в Header */}
            <main>
                <Routes>
                    <Route path="/" element={<HomePage products={products} />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/admin-login" element={<AdminLogin onLogin={handleLogin} />} />
                    <Route
                        path="/admin"
                        element={isAuthenticated ? <Admin onAddProduct={handleAddProduct} products={products} /> : <Navigate to="/admin-login" />}
                    />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/catalog" element={<CatalogPage />} />
                    <Route path="/catalog/:category" element={<CategoryPage products={products} />} /> {/* Передаем продукты в CategoryPage */}
                    <Route path="/product/:productId" element={<ProductDetails products={products} />} />
                    <Route path="/recommended" element={<RecommendedPage />} />
                    <Route path="/developers" element={<DevelopersPage />} />
                </Routes>
            </main>
            {!hideHeaderFooter && <Footer />} {/* Скрываем Footer, если нужно */}
        </>
    );
};

const App = () => (
    <Router>
        <AppContent />
    </Router>
);

export default App;
