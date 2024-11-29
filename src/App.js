import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import OriginalPartsPage from './pages/OriginalPartsPage';
import BulbsPage from './pages/BulbsPage';
import BatteriesPage from './pages/BatteriesPage';
import Admin from './pages/Admin';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import CatalogPage from './pages/CatalogPage';
import CategoryPage from './pages/CategoryPage';
import ProductDetails from './pages/ProductDetails';

const App = () => {
    // Загружаем продукты из localStorage при монтировании компонента
    const loadProducts = () => {
        const savedProducts = localStorage.getItem('products');
        return savedProducts ? JSON.parse(savedProducts) : [];
    };

    const [products, setProducts] = useState(loadProducts);

    // Функция для добавления продукта
    const handleAddProduct = (product) => {
        const updatedProducts = [...products, product];
        setProducts(updatedProducts);

        // Сохраняем обновленные продукты в localStorage
        localStorage.setItem('products', JSON.stringify(updatedProducts));
    };

    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage products={products} />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/original-parts" element={<OriginalPartsPage />} />
                    <Route path="/bulbs" element={<BulbsPage />} />
                    <Route path="/аккумуляторы" element={<BatteriesPage />} />
                    <Route
                        path="/admin"
                        element={<Admin onAddProduct={handleAddProduct} />}
                    />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/catalog" element={<CatalogPage products={products} />} />
                    <Route
                        path="/catalog/:category"
                        element={<CategoryPage products={products} />}
                    />
                    <Route path="/product/:productId" element={<ProductDetails products={products} />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
