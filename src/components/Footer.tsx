import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Trang Chủ', path: '/' },
    { name: 'Giới Thiệu', path: '/about' },
    { name: 'Khám Phá', path: '/explore' },
    { name: 'Gợi Ý', path: '/suggestions' },
    { name: 'Review', path: '/reviews' },
  ];

  const categories = [
    'Ẩm Thực',
    'Giải Trí', 
    'Check-in',
    'Văn Hóa',
    'Du Lịch Sinh Thái'
  ];

  const socialLinks = [
    { icon: 'bi-facebook', url: 'https://www.facebook.com/profile.php?id=61581860704562', color: '#1877f2', name: 'Facebook' },
    { icon: 'bi-instagram', url: '#', color: '#e4405f', name: 'Instagram' },
    { icon: 'bi-youtube', url: '#', color: '#ff0000', name: 'YouTube' },
    { icon: 'bi-tiktok', url: '#', color: '#000000', name: 'TikTok' }
  ];

  return (
    <footer className="position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #3b82f6 100%)' }}>
      {/* Wave decoration */}
      <div className="position-absolute top-0 start-0 w-100">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
          <path fill="#ffffff" fillOpacity="1" d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,74.7C1248,75,1344,53,1392,42.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>

      <div className="container py-5 mt-5">
        <div className="row">
          {/* Brand Section */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="d-flex align-items-center mb-3">
              <h4 className="fw-bold text-white mb-0">GoVibe</h4>
            </div>
            <p className="text-white mb-4 opacity-90">
              Cảm nhận không khí địa phương - Khám phá trải nghiệm ẩm thực và giải trí
            </p>
            <div className="d-flex gap-2 mb-3">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  className="btn btn-light btn-sm rounded-circle hover-lift"
                  style={{ width: '45px', height: '45px', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  title={social.name}
                >
                  <i className={`${social.icon} fs-5`} style={{ color: social.color }}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="fw-bold text-white mb-4 position-relative">
              Liên Kết
              <div className="position-absolute bottom-0 start-0 bg-warning" style={{ width: '40px', height: '3px' }}></div>
            </h5>
            <ul className="list-unstyled">
              {quickLinks.map((link, index) => (
                <li key={index} className="mb-3">
                  <Link
                    to={link.path}
                    className="text-white text-decoration-none d-flex align-items-center opacity-75 hover-link"
                    style={{ transition: 'all 0.3s ease' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = '1';
                      e.currentTarget.style.paddingLeft = '10px';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '0.75';
                      e.currentTarget.style.paddingLeft = '0';
                    }}
                  >
                    <i className="bi bi-chevron-right me-2"></i>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="fw-bold text-white mb-4 position-relative">
              Danh Mục
              <div className="position-absolute bottom-0 start-0 bg-warning" style={{ width: '40px', height: '3px' }}></div>
            </h5>
            <ul className="list-unstyled">
              {categories.map((category, index) => (
                <li key={index} className="mb-3">
                  <Link
                    to="/explore"
                    className="text-white text-decoration-none d-flex align-items-center opacity-75 hover-link"
                    style={{ transition: 'all 0.3s ease' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = '1';
                      e.currentTarget.style.paddingLeft = '10px';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '0.75';
                      e.currentTarget.style.paddingLeft = '0';
                    }}
                  >
                    <i className="bi bi-chevron-right me-2"></i>
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="fw-bold text-white mb-4 position-relative">
              Liên Hệ
              <div className="position-absolute bottom-0 start-0 bg-warning" style={{ width: '40px', height: '3px' }}></div>
            </h5>
            <div className="mb-3 d-flex align-items-start">
              <div className="bg-warning bg-opacity-25 rounded-circle p-2 me-3">
                <i className="bi bi-envelope-fill text-warning"></i>
              </div>
              <div>
                <small className="text-white opacity-75 d-block">Email</small>
                <span className="text-white fw-semibold">contact@GoVibe.vn</span>
              </div>
            </div>
            <div className="mb-3 d-flex align-items-start">
              <div className="bg-warning bg-opacity-25 rounded-circle p-2 me-3">
                <i className="bi bi-telephone-fill text-warning"></i>
              </div>
              <div>
                <small className="text-white opacity-75 d-block">Hotline</small>
                <span className="text-white fw-semibold">+84 123 456 789</span>
              </div>
            </div>
            <div className="mb-4 d-flex align-items-start">
              <div className="bg-warning bg-opacity-25 rounded-circle p-2 me-3">
                <i className="bi bi-geo-alt-fill text-warning"></i>
              </div>
              <div>
                <small className="text-white opacity-75 d-block">Địa chỉ</small>
                <span className="text-white fw-semibold">Cần Thơ, Việt Nam</span>
              </div>
            </div>
            <div className="input-group">
              <input 
                type="email" 
                className="form-control border-0" 
                placeholder="Email của bạn..." 
                style={{ borderRadius: '50px 0 0 50px' }}
              />
              <button className="btn btn-warning fw-semibold px-4" style={{ borderRadius: '0 50px 50px 0' }}>
                <i className="bi bi-send-fill"></i>
              </button>
            </div>
            <small className="text-white opacity-75 d-block mt-2">
              Đăng ký nhận tin tức và ưu đãi mới nhất
            </small>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-top border-white border-opacity-25">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <p className="text-white mb-0 opacity-90">
                © 2025 GoVibe. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="text-white mb-0 opacity-90">
                Made with <i className="bi bi-heart-fill text-danger"></i> for Vietnam Tourism
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      {/* <div className="position-absolute bottom-0 end-0 opacity-10" style={{ fontSize: '15rem' }}>
        <i className="bi bi-geo-alt-fill text-white"></i>
      </div> */}
    </footer>
  );
};

export default Footer;