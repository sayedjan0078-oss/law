import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="logo">
          <div className="logo-icon">
            <i className="fas fa-balance-scale"></i>
          </div>
          <div className="logo-text">Sterling <span>&</span> Associates</div>
        </Link>

        <ul className="nav-links">
          <li><Link to="/" className={isActive('/')}>Home</Link></li>
          <li><Link to="/about" className={isActive('/about')}>About</Link></li>
          <li><Link to="/practice-areas" className={isActive('/practice-areas')}>Practice Areas</Link></li>
          <li><Link to="/attorneys" className={isActive('/attorneys')}>Attorneys</Link></li>
          <li><Link to="/testimonials" className={isActive('/testimonials')}>Testimonials</Link></li>
          <li><Link to="/contact" className={isActive('/contact')}>Contact</Link></li>
        </ul>

        <div className="nav-right">
          <a href="tel:+12125551234" className="nav-phone">
            <i className="fas fa-phone-alt"></i>
            (212) 555-1234
          </a>
          <ThemeToggle />
          <div className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{
          background: 'var(--nav-bg)',
          borderBottom: '1px solid var(--border-color)',
          padding: '20px',
          animation: 'slideDown 0.3s ease'
        }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <li><Link to="/" onClick={() => setMobileOpen(false)} className={isActive('/')}>Home</Link></li>
            <li><Link to="/about" onClick={() => setMobileOpen(false)} className={isActive('/about')}>About</Link></li>
            <li><Link to="/practice-areas" onClick={() => setMobileOpen(false)} className={isActive('/practice-areas')}>Practice Areas</Link></li>
            <li><Link to="/attorneys" onClick={() => setMobileOpen(false)} className={isActive('/attorneys')}>Attorneys</Link></li>
            <li><Link to="/testimonials" onClick={() => setMobileOpen(false)} className={isActive('/testimonials')}>Testimonials</Link></li>
            <li><Link to="/contact" onClick={() => setMobileOpen(false)} className={isActive('/contact')}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;