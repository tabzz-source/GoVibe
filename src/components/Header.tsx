import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Trang Chủ', path: '/', icon: 'bi-house-fill' },
    { name: 'Giới Thiệu', path: '/about', icon: 'bi-info-circle-fill' },
    { name: 'Khám Phá', path: '/explore', icon: 'bi-compass-fill' },
    { name: 'Gợi Ý', path: '/suggestions', icon: 'bi-lightbulb-fill' },
    { name: 'Review', path: '/reviews', icon: 'bi-star-fill' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`navbar navbar-expand-lg navbar-light sticky-top transition-all ${isScrolled ? 'shadow-lg py-2' : 'shadow-sm py-3'}`}
         style={{ 
           transition: 'all 0.3s ease',
           background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)'
         }}>
      <div className="container">
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
          <div className="position-relative">
            {/* <div className="rounded-circle p-2 me-2" 
                 style={{ background: 'linear-gradient(135deg, #1e40af 0%, #60a5fa 100%)' }}> */}
              <img 
                src="/logo-dulich.png" 
                alt="Du Lịch Việt Logo" 
                style={{ width: '50x', height: '50px', objectFit: 'contain' }}
                onError={(e) => {
                  // Fallback nếu logo không load được
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallbackIcon = document.createElement('i');
                  fallbackIcon.className = 'bi bi-airplane-engines text-white fs-4';
                  target.parentNode?.appendChild(fallbackIcon);
                }}
              />
            {/* </div> */}
          </div>
          <span className="gradient-text fs-3">GoVibe</span>
        </Link>
        
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <li className="nav-item mx-1" key={item.path}>
                  <Link
                    className={`nav-link px-3 py-2 rounded-pill fw-semibold position-relative`}
                    style={{
                      background: active 
                        ? 'linear-gradient(135deg, #1e40af 0%, #60a5fa 100%)'
                        : 'transparent',
                      color: active ? '#ffffff' : '#4b5563',
                      transition: 'all 0.3s ease'
                    }}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <i className={`${item.icon} me-2`}></i>
                    {item.name}
                    {active && (
                      <span className="position-absolute top-0 start-100 translate-middle p-1 bg-warning border border-light rounded-circle">
                        <span className="visually-hidden">Active page</span>
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;