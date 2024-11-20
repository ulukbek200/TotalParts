// src/App.js
import React from 'react';
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
import CategoryPage from './pages/CategoryPage'; // Импортируем CategoryPage
import ProductDetails from './pages/ProductDetails';

const App = () => {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/original-parts" element={<OriginalPartsPage />} />
                    <Route path="/bulbs" element={<BulbsPage />} />
                    <Route path="/аккумуляторы" element={<BatteriesPage />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/catalog" element={<CatalogPage />} />
                    <Route path="/catalog/:category" element={<CategoryPage />} />
                    <Route path="/product/:productId" element={<ProductDetails />} />

                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
