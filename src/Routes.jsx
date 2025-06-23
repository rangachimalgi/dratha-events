import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Packages from './pages/Packages/Packages';
import MainLayout from './components/layout/MainLayout';

const AppRoutes = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRoutes;
