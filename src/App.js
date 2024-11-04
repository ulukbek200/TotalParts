// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // Импортируем заголовок
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage'; // Страница "О нас"
import OriginalPartsPage from './pages/OriginalPartsPage'; // Страница "Оригинальные запчасти"
import BulbsPage from './pages/BulbsPage'; // Страница "Лампочки"
import BatteriesPage from './pages/BatteriesPage'; // Страница "Аккумуляторы"
import Admin from './pages/Admin.js'; 

const App = () => {
    return (
        <Router>
            <Header /> {/* Заголовок должен вызываться только здесь */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/original-parts" element={<OriginalPartsPage />} />
                <Route path="/bulbs" element={<BulbsPage />} />
                <Route path="/batteries" element={<BatteriesPage />} />
                <Route path="/admin" element={<Admin />} /> 
                {/* Добавь другие маршруты для страниц товаров, контактов и т.д. */}
            </Routes>
        </Router>
    );
};

export default App;
