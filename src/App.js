// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'; // Импортируем футер
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import OriginalPartsPage from './pages/OriginalPartsPage';
import BulbsPage from './pages/BulbsPage';
import BatteriesPage from './pages/BatteriesPage';
import Admin from './pages/Admin';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/original-parts" element={<OriginalPartsPage />} />
                <Route path="/bulbs" element={<BulbsPage />} />
                <Route path="/batteries" element={<BatteriesPage />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
            <Footer /> {/* Добавляем футер здесь, чтобы он отображался на всех страницах */}
        </Router>
    );
};

export default App;
