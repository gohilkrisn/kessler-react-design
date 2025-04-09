
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="z-50">
          <div className="flex flex-col">
            <h1 className={`font-kessler text-2xl transition-colors duration-300 ${isScrolled || isMobileMenuOpen ? 'text-psdj-charcoal' : 'text-white'}`}>PSDJ</h1>
            <span className={`text-xs uppercase tracking-widest transition-colors duration-300 ${isScrolled || isMobileMenuOpen ? 'text-psdj-accent' : 'text-white'}`}>Interior Architecture</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-10">
            <li>
              <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''} ${isScrolled ? 'text-psdj-charcoal' : 'text-white'}`}>Home</Link>
            </li>
            <li>
              <Link to="/work" className={`nav-link ${location.pathname === '/work' ? 'active' : ''} ${isScrolled ? 'text-psdj-charcoal' : 'text-white'}`}>Our Work</Link>
            </li>
            <li>
              <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''} ${isScrolled ? 'text-psdj-charcoal' : 'text-white'}`}>About</Link>
            </li>
            <li>
              <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''} ${isScrolled ? 'text-psdj-charcoal' : 'text-white'}`}>Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <X className={`w-6 h-6 ${isScrolled ? 'text-psdj-charcoal' : 'text-psdj-charcoal'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? 'text-psdj-charcoal' : 'text-white'}`} />
          )}
        </button>

        {/* Mobile Navigation Overlay */}
        <div className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="h-full flex flex-col justify-center items-center">
            <nav className="text-center">
              <ul className="space-y-8">
                <li>
                  <Link to="/" className={`text-2xl nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
                </li>
                <li>
                  <Link to="/work" className={`text-2xl nav-link ${location.pathname === '/work' ? 'active' : ''}`}>Our Work</Link>
                </li>
                <li>
                  <Link to="/about" className={`text-2xl nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
                </li>
                <li>
                  <Link to="/contact" className={`text-2xl nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
