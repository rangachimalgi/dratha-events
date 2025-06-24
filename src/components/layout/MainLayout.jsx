import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow mb-8 pt-12">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
