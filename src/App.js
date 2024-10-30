import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.js';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/* Добавь другие маршруты для страниц товаров, контактов и т.д. */}
            </Routes>
        </Router>
    );
};

export default App;
