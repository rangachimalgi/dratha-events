import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import EnquiryButton from '../buttons/EnquireButton';

const Header = ({ onLoginClick, isAdmin }) => {
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

  // Highlight nav and logo when transparent
  const navHighlightClass = isHome && !scrolled
    ? 'text-white drop-shadow-lg'
    : 'text-global-5';

  return (
    <header className={headerClass}>
      <div className="max-w-7xl mx-auto px-4 py-7">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img src="/images/logo.png" alt="Dratha Logo" className={`h-16 w-auto shadow-lg ${navHighlightClass}`} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`${navHighlightClass} font-dm-sans font-medium text-base leading-5 capitalize hover:text-global-3 transition-colors`}
            >
              Home
            </Link>
            <Link 
              to="/babyshower" 
              className={`${navHighlightClass} font-dm-sans font-medium text-base leading-5 capitalize hover:text-global-3 transition-colors`}
            >
              Baby Shower
            </Link>
            <Link 
              to="/wedding" 
              className={`${navHighlightClass} font-dm-sans font-medium text-base leading-5 capitalize hover:text-global-3 transition-colors`}
            >
              Wedding
            </Link>
            <Link 
              to="/birthday" 
              className={`${navHighlightClass} font-dm-sans font-medium text-base leading-5 capitalize hover:text-global-3 transition-colors`}
            >
              Birthday
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
            {/* <Link 
              to="/packages" 
              className="text-global-5 font-dm-sans font-medium text-base leading-5 capitalize hover:text-global-3 transition-colors"
            >
              Packages
            </Link> */}
            <Link 
              to="/planhousewarming" 
              className={`${navHighlightClass} font-dm-sans font-medium text-base leading-5 capitalize hover:text-global-3 transition-colors`}
            >
              Plan your own Housewarming
            </Link>
            {/* <Link 
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
            </Link> */}
            {isAdmin && (
              <Link 
                to="/admin" 
                className="text-global-5 font-dm-sans font-medium text-base leading-5 capitalize hover:text-global-3 transition-colors border border-global-3 rounded px-4 py-2 ml-2"
              >
                Admin
              </Link>
            )}
            <div className="flex items-center space-x-2">
              <img 
                src="/images/img_icon.svg" 
                alt="User" 
                className="w-4 h-4"
              />
              <button
                onClick={onLoginClick}
                className="text-global-5 font-dm-sans font-medium text-base leading-5 hover:text-global-3 transition-colors focus:outline-none"
                type="button"
              >
                Sign up
              </button>
            </div>
          </nav>

          {/* Submit Listing Button */}
          <div className="hidden lg:block">
            <EnquiryButton />
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
                className={`${navHighlightClass} font-dm-sans font-medium text-base leading-5 capitalize hover:text-global-3 transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/babyshower" 
                className={`${navHighlightClass} font-dm-sans font-medium text-base leading-5 capitalize hover:text-global-3 transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                Baby Shower
              </Link>
              <Link 
                to="/wedding" 
                className={`${navHighlightClass} font-dm-sans font-medium text-base leading-5 capitalize hover:text-global-3 transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                Wedding
              </Link>
              <Link 
                to="/birthday" 
                className={`${navHighlightClass} font-dm-sans font-medium text-base leading-5 capitalize hover:text-global-3 transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                Birthday
              </Link>
              {/* <Link 
                to="/packages" 
                className="text-global-5 font-dm-sans font-medium text-base leading-5 capitalize hover:text-global-3 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Packages
              </Link> */}
              <Link 
                to="/planhousewarming" 
                className={`${navHighlightClass} font-dm-sans font-medium text-base leading-5 capitalize hover:text-global-3 transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                Plan your own Housewarming
              </Link>
              {/* <Link 
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
              </Link> */}
              {isAdmin && (
                <Link 
                  to="/admin" 
                  className="text-global-5 font-dm-sans font-medium text-base leading-5 capitalize hover:text-global-3 transition-colors border border-global-3 rounded px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Admin
                </Link>
              )}
              <button 
                onClick={onLoginClick}
                className="text-global-5 font-dm-sans font-medium text-base leading-5 hover:text-global-3 transition-colors focus:outline-none"
                type="button"
              >
                Sign up
              </button>
              <EnquiryButton />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;