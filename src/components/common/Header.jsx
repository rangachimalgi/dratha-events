import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../ui/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let dropdownTimeout;
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownEnter = () => {
    clearTimeout(dropdownTimeout);
    setIsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200); // 200ms delay
  };

  // Header style logic: transparent on home (unless scrolled), solid on all other pages
  const headerClass = isHome && !scrolled
    ? 'absolute top-0 left-0 w-full z-50 bg-transparent'
    : 'fixed top-0 left-0 w-full z-50 bg-global-1 shadow-lg';

  return (
    <header className={headerClass}>
      <div className="max-w-7xl mx-auto px-4 py-7">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/images/img_logosvg_fill.svg" 
              alt="BoxCar Logo" 
              className="h-7 w-27"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-global-5 font-dm-sans font-medium text-base leading-5 capitalize hover:text-global-3 transition-colors"
            >
              Home
            </Link>
            {/* <div 
              className="relative"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <Link 
                to="/packages" 
                className="text-global-5 font-dm-sans font-medium text-base leading-5 capitalize hover:text-global-3 transition-colors"
              >
                Packages
              </Link>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                  <Link to="/packages/wedding" className="block px-4 py-2 text-gray-700 hover:text-global-3 hover:bg-gray-100">Wedding</Link>
                  <Link to="/packages/birthday" className="block px-4 py-2 text-gray-700 hover:text-global-3 hover:bg-gray-100">Birthday</Link>
                  <Link to="/packages/corporate" className="block px-4 py-2 text-gray-700 hover:text-global-3 hover:bg-gray-100">Corporate Event</Link>
                  <Link to="/packages/anniversary" className="block px-4 py-2 text-gray-700 hover:text-global-3 hover:bg-gray-100">Anniversary</Link>
                </div>
              )}
            </div> */}
            <Link 
              to="/packages" 
              className="text-global-5 font-dm-sans font-medium text-base leading-5 capitalize hover:text-global-3 transition-colors"
            >
              Packages
            </Link>
            <Link 
              to="/blog" 
              className="text-global-5 font-dm-sans font-medium text-base leading-5 capitalize hover:text-global-3 transition-colors"
            >
              Blog
            </Link>
            <Link 
              to="/about" 
              className="text-global-5 font-dm-sans font-medium text-base leading-5 capitalize hover:text-global-3 transition-colors"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-global-5 font-dm-sans font-medium text-base leading-5 capitalize hover:text-global-3 transition-colors"
            >
              Contact
            </Link>
            <div className="flex items-center space-x-2">
              <img 
                src="/images/img_icon.svg" 
                alt="User" 
                className="w-4 h-4"
              />
              <Link 
                to="/signin" 
                className="text-global-5 font-dm-sans font-medium text-base leading-5 hover:text-global-3 transition-colors"
              >
                Sign in
              </Link>
            </div>
          </nav>

          {/* Submit Listing Button */}
          <div className="hidden lg:block">
            <Button 
              variant="primary" 
              size="md"
              className="bg-global-10 text-global-1 border-global-10 hover:bg-global-3 rounded-full px-6 py-3"
            >
              Enquire Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden text-global-5 p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-global-1 rounded-lg p-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-global-5 font-dm-sans font-medium text-base leading-5 capitalize hover:text-global-3 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/packages" 
                className="text-global-5 font-dm-sans font-medium text-base leading-5 capitalize hover:text-global-3 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Packages
              </Link>
              <Link 
                to="/blog" 
                className="text-global-5 font-dm-sans font-medium text-base leading-5 capitalize hover:text-global-3 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/about" 
                className="text-global-5 font-dm-sans font-medium text-base leading-5 capitalize hover:text-global-3 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-global-5 font-dm-sans font-medium text-base leading-5 capitalize hover:text-global-3 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/signin" 
                className="text-global-5 font-dm-sans font-medium text-base leading-5 hover:text-global-3 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign in
              </Link>
              <Button 
                variant="primary" 
                size="md"
                className="bg-global-10 text-global-1 border-global-10 hover:bg-gray-100 rounded-full"
              >
                Submit Listing
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;