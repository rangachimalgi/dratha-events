import React, { useEffect, useState } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { useLocation } from 'react-router-dom';
import Login from '../../pages/Auth/Login';

const MainLayout = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

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
      <Header onLoginClick={() => setLoginOpen(true)} isAdmin={isAdmin} />
      <main className={mainClass}>{children}</main>
      <Footer />
      <Login 
        open={loginOpen} 
        onClose={() => setLoginOpen(false)} 
        onSignUp={() => alert('Sign Up clicked!')}
        onLoginSuccess={() => { setIsAdmin(true); setLoginOpen(false); }}
      />
    </div>
  );
};

export default MainLayout;
