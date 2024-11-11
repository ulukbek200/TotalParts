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
import CartPage from './pages/CartPage'; // Правильный импорт CartPage
import CheckoutPage from './pages/CheckoutPage'
import CatalogPage from './pages/CatalogPage';


const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
            {/* <Route path="/" element={<CartPage />} /> */}
        <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/original-parts" element={<OriginalPartsPage />} />
                <Route path="/bulbs" element={<BulbsPage />} />
                <Route path="/batteries" element={<BatteriesPage />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/cart" element={<CartPage />} /> {/* Добавил маршрут для CartPage */}
                <Route path="/catalog" element={<CatalogPage />} />

            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
