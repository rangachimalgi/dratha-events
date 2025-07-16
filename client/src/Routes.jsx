import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Packages from './pages/Packages/Packages';
import MainLayout from './components/layout/MainLayout';
import PackageDetails from './pages/Packages/PackageDetails';
import { HouseWarming } from './pages/HouseWarming/HouseWarming';
import AdminPanel from './admin/AdminPanel';
import ProtectedRoute from './components/routes/ProtectedRoute';
import BabyShower from './pages/BabyShower';
import Wedding from './pages/Wedding';
import Birthday from './pages/Birthday';

const AppRoutes = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          <Route path='/package-details' element={<PackageDetails />} />
          <Route path='/package-details/:id' element={<PackageDetails />} />
          <Route path='/planhousewarming' element={<HouseWarming />} />
          <Route path='/babyshower' element={<BabyShower />} />
          <Route path='/wedding' element={<Wedding />} />
          <Route path='/birthday' element={<Birthday />} />
         {/* Protected Admin Route */}
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute>
                <AdminPanel />
              </ProtectedRoute>
            } 
          />
        </Routes> 
      </MainLayout>
    </Router>
  );
};

export default AppRoutes;
