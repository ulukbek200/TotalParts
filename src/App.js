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

    return (
        <>
            {!hideHeaderFooter && <Header />}
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/admin-login" element={<AdminLogin />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/catalog" element={<CatalogPage />} />
                    <Route path="/catalog/:category" element={<CategoryPage />} />
                    <Route path="/product/:productId" element={<ProductDetails />} />
                    <Route path="/recommended" element={<RecommendedPage />} />
                    <Route path="/developers" element={<DevelopersPage />} />
                </Routes>
            </main>
            {!hideHeaderFooter && <Footer />}
        </>
    );
};

const App = () => (
    <Router>
        <AppContent />
    </Router>
);

export default App;
