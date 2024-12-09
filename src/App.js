import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Admin from './pages/Admin'; // Админ панель
import AdminLogin from './pages/AdminLogin'; // Страница ввода пароля
import CartPage from './pages/CartPage';
import CatalogPage from './pages/CatalogPage';
import CategoryPage from './pages/CategoryPage';
import ProductDetails from './pages/ProductDetails';
import RecommendedPage from './pages/RecommendedPage';

const App = () => {
    // Загрузка сохранённых продуктов
    const loadProducts = () => {
        const savedProducts = localStorage.getItem('products');
        return savedProducts ? JSON.parse(savedProducts) : [];
    };

    // Загрузка сохранённой корзины
    const loadCart = () => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    };

    const [products, setProducts] = useState(loadProducts);
    const [cart, setCart] = useState(loadCart);

    // Фильтрация продуктов по категориям
    const recommendedProducts = products.filter(
        (product) => product.category === 'Рекомендуемые'
    );

    const topSellingProducts = products.filter(
        (product) => product.category === 'Топ продаж'
    );

    // Сохранение продуктов в localStorage
    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products));
    }, [products]);

    // Сохранение корзины в localStorage
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const handleAddProduct = (product) => {
        setProducts((prevProducts) => [...prevProducts, product]);
    };

    // Добавление товара в корзину
    const addToCart = (product) => {
        const existingProduct = cart.find((item) => item.id === product.id);
        if (existingProduct) {
            setCart((prevCart) =>
                prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
        }
    };

    // Обновление количества товара в корзине
    const updateCartQuantity = (productId, quantity) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId ? { ...item, quantity: quantity } : item
            )
        );
    };

    // Удаление товара из корзины
    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    // Подсчёт общей стоимости корзины
    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    // Проверка, авторизован ли пользователь
    const isAdminAuthenticated = localStorage.getItem('isAdminAuthenticated') === 'true';

    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <HomePage
                                products={products}
                                addToCart={addToCart}
                                recommendedProducts={recommendedProducts}
                                topSellingProducts={topSellingProducts}
                            />
                        }
                    />
                    <Route path="/about" element={<AboutPage />} />
                    {/* Страница ввода пароля */}
                    <Route path="/admin-login" element={<AdminLogin />} />
                    {/* Админ панель */}
                    <Route
                        path="/admin"
                        element={
                            isAdminAuthenticated ? (
                                <Admin onAddProduct={handleAddProduct} />
                            ) : (
                                <Navigate to="/admin-login" />
                            )
                        }
                    />
                    <Route
                        path="/cart"
                        element={
                            <CartPage
                                cart={cart}
                                total={calculateTotal()}
                                updateCartQuantity={updateCartQuantity}
                                removeFromCart={removeFromCart}
                            />
                        }
                    />
                    <Route path="/catalog" element={<CatalogPage products={products} />} />
                    <Route
                        path="/catalog/:category"
                        element={<CategoryPage products={products} />}
                    />
                    <Route
                        path="/product/:productId"
                        element={<ProductDetails products={products} />}
                    />
                    <Route
                        path="/recommended"
                        element={<RecommendedPage products={recommendedProducts} />}
                    />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
