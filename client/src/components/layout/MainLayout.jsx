import React, { useEffect, useState } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { useLocation } from 'react-router-dom';

const MainLayout = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  // Only add top padding if not home, or if home and scrolled
  const mainClass = `flex-grow mb-8 ${!isHome || scrolled ? 'pt-12' : ''}`;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className={mainClass}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
