import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/mainPage/MainPage';
import NotFoundPage from './components/notFoundPage/NotFoundPage';

const Navigation = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<MainPage />}></Route>            
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </Router>
  );
};

export default Navigation;