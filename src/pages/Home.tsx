import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showComboModal, setShowComboModal] = useState(false);

  const carouselImages = [
    {
      url: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=1920&h=800&fit=crop',
      title: 'Vịnh Hạ Long',
      subtitle: 'Kỳ quan thiên nhiên thế giới',
      location: 'Quảng Ninh'
    },
    {
      url: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1920&h=800&fit=crop',
      title: 'Thành Phố Hồ Chí Minh',
      subtitle: 'Thành phố không ngủ',
      location: 'TP.HCM'
    },
    {
      url: 'https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=1920&h=800&fit=crop',
      title: 'Phố Cổ Hội An',
      subtitle: 'Di sản văn hóa UNESCO',
      location: 'Quảng Nam'
    },
    {
      url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=800&fit=crop',
      title: 'Đảo Phú Quốc',
      subtitle: 'Thiên đường nghỉ dưỡng',
      location: 'Kiên Giang'
    },
    {
      url: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1920&h=800&fit=crop&q=80',
      title: 'Cầu Vàng Đà Nẵng',
      subtitle: 'Kiến trúc độc đáo nhất VN',
      location: 'Đà Nẵng'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);
  const featuredCategories = [
    {
      title: 'Ẩm Thực',
      count: '500+ địa điểm',
      icon: 'bi-cup-straw',
      color: 'bg-gradient-to-br from-red-400 to-red-600',
      description: 'Khám phá ẩm thực đa dạng từ Bắc đến Nam',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop'
    },
    {
      title: 'Giải Trí',
      count: '300+ địa điểm',
      icon: 'bi-music-note-beamed',
      color: 'bg-gradient-to-br from-purple-400 to-purple-600',
      description: 'Trải nghiệm giải trí sôi động',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop'
    },
    {
      title: 'Check-in',
      count: '200+ địa điểm',
      icon: 'bi-camera',
      color: 'bg-gradient-to-br from-pink-400 to-pink-600',
      description: 'Những điểm check-in siêu đẹp',
      image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=400&h=300&fit=crop'
    },
    {
      title: 'Văn Hóa',
      count: '150+ địa điểm',
      icon: 'bi-building',
      color: 'bg-gradient-to-br from-orange-400 to-orange-600',
      description: 'Tìm hiểu văn hóa đậm đà bản sắc',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&h=300&fit=crop'
    }
  ];

  const comboSuggestions = [
    {
      id: 1,
      title: 'Combo Ẩm thực + Check-in Hà Nội',
      description: 'Nhà hàng view đẹp kết hợp điểm chụp hình nghệ thuật',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop',
      tag: 'HOT',
      price: '850.000đ',
      location: 'Hà Nội',
      duration: '1 ngày',
      activities: ['Phở Gia Truyền Bát Đàn', 'Hồ Hoàn Kiếm & Đền Ngọc Sơn', 'Bún Chả Obama']
    },
    {
      id: 2,
      title: 'Combo Ăn + Giải trí TP.HCM',
      description: 'Quán ăn ngon gần rạp chiếu phim và khu vui chơi',
      image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=250&fit=crop',
      tag: 'NEW',
      price: '1.200.000đ',
      location: 'TP.HCM',
      duration: '1 ngày',
      activities: ['Chợ Bến Thành', 'Rạp CGV Nguyễn Huệ', 'Cơm tấm Sướng']
    },
    {
      id: 3,
      title: 'Combo Cafe + Văn hóa Đà Lạt',
      description: 'Quán cafe yên tĩnh gần bảo tàng và triển lãm',
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=250&fit=crop',
      tag: 'TREND',
      price: '650.000đ',
      location: 'Đà Lạt',
      duration: '1 ngày',
      activities: ['Cà phê Mê Linh', 'Bảo tàng Đà Lạt', 'Bánh tráng nướng']
    },
    {
      id: 4,
      title: 'Combo Biển + Hải sản Nha Trang',
      description: 'Tắm biển và thưởng thức hải sản tươi sống',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=250&fit=crop',
      tag: 'HOT',
      price: '950.000đ',
      location: 'Nha Trang',
      duration: '1 ngày',
      activities: ['Bãi biển Nha Trang', 'Nhà hàng hải sản Gia Sinh', 'Tháp Ponagar']
    },
    {
      id: 5,
      title: 'Combo Phố cổ + Đèn lồng Hội An',
      description: 'Khám phá phố cổ và thưởng thức đặc sản địa phương',
      image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400&h=250&fit=crop',
      tag: 'NEW',
      price: '750.000đ',
      location: 'Hội An',
      duration: '1 ngày',
      activities: ['Phố cổ Hội An', 'Cao lầu Thành', 'Chùa Cầu Nhật Bản']
    },
    {
      id: 6,
      title: 'Combo Vịnh + Hải sản Hạ Long',
      description: 'Du thuyền vịnh Hạ Long và bữa tối trên thuyền',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=400&h=250&fit=crop',
      tag: 'TREND',
      price: '1.500.000đ',
      location: 'Quảng Ninh',
      duration: '2 ngày 1 đêm',
      activities: ['Du thuyền vịnh Hạ Long', 'Hang Sửng Sốt', 'Buffet hải sản']
    },
    {
      id: 7,
      title: 'Combo Núi + Cafe Sapa',
      description: 'Trekking và thưởng thức cafe núi đặc biệt',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop',
      tag: 'HOT',
      price: '800.000đ',
      location: 'Sapa',
      duration: '1 ngày',
      activities: ['Fansipan', 'Cà phê Arabica Sapa', 'Chợ tình Sapa']
    },
    {
      id: 8,
      title: 'Combo Đảo + Resort Phú Quốc',
      description: 'Nghỉ dưỡng và ẩm thực biển đảo',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=250&fit=crop',
      tag: 'NEW',
      price: '2.200.000đ',
      location: 'Phú Quốc',
      duration: '2 ngày 1 đêm',
      activities: ['Cable car Hòn Thơm', 'Chợ đêm Dinh Cậu', 'Resort 5 sao']
    },
    {
      id: 9,
      title: 'Combo Hang động + BBQ Phong Nha',
      description: 'Khám phá hang động và tiệc nướng ngoài trời',
      image: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=400&h=250&fit=crop',
      tag: 'TREND',
      price: '700.000đ',
      location: 'Quảng Bình',
      duration: '1 ngày',
      activities: ['Hang Phong Nha', 'BBQ bên sông Chày', 'Zipline Phong Nha']
    },
    {
      id: 10,
      title: 'Combo Cố đô + Chay Huế',
      description: 'Tham quan cố đô và thưởng thức ẩm thực cung đình',
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=400&h=250&fit=crop',
      tag: 'HOT',
      price: '600.000đ',
      location: 'Huế',
      duration: '1 ngày',
      activities: ['Đại Nội Huế', 'Bún bò Huế', 'Chùa Thiên Mụ']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Carousel Section */}
      <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to={index}
              className={index === activeSlide ? 'active' : ''}
              aria-current={index === activeSlide ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setActiveSlide(index)}
            ></button>
          ))}
        </div>
        
        <div className="carousel-inner">
          {carouselImages.map((image, index) => (
            <div key={index} className={`carousel-item ${index === activeSlide ? 'active' : ''}`}>
              <img
                src={image.url}
                className="d-block w-100"
                alt={image.title}
                style={{ 
                  height: '600px',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
              <div className="position-absolute top-0 start-0 w-100 h-100" 
                   style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))' }}></div>
              
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center h-100" style={{ top: 0, bottom: 0 }}>
                <div className="animate-slide-up">
                  <span className="badge bg-warning text-dark px-4 py-2 mb-3 fs-6">
                    <i className="bi bi-geo-alt-fill me-2"></i>
                    {image.location}
                  </span>
                  <h1 className="display-2 fw-bold text-white mb-3 text-shadow">
                    {image.title}
                  </h1>
                  <p className="lead text-white mb-4 fs-4">{image.subtitle}</p>
                  <div className="d-flex gap-3 justify-content-center">
                    <Link to="/explore" className="btn btn-warning btn-lg px-5 py-3 fw-semibold shadow-lg hover-lift">
                      <i className="bi bi-compass me-2"></i>
                      Khám Phá Ngay
                    </Link>
                    <Link to="/suggestions" className="btn btn-outline-light btn-lg px-5 py-3 fw-semibold hover-lift">
                      <i className="bi bi-lightbulb me-2"></i>
                      Nhận Gợi Ý
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Search Section */}
      <div className="py-5" style={{ background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%)', marginTop: '-50px', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
                <div className="card-body p-4">
                  <div className="row g-3 align-items-center">
                    <div className="col-md-3">
                      <div className="position-relative">
                        <i className="bi bi-geo-alt position-absolute top-50 start-0 translate-middle-y ms-3 text-ocean-blue"></i>
                        <select className="form-select form-select-lg ps-5 border-0" style={{ backgroundColor: '#f8f9fa' }}>
                          <option>Chọn địa điểm</option>
                          <option>Hà Nội</option>
                          <option>TP.HCM</option>
                          <option>Đà Nẵng</option>
                          <option>Nha Trang</option>
                          <option>Phú Quốc</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="position-relative">
                        <i className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>
                        <input
                          type="text"
                          className="form-control form-control-lg ps-5 border-0"
                          placeholder="Tìm kiếm địa điểm, món ăn, hoạt động..."
                          style={{ backgroundColor: '#f8f9fa' }}
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <button className="btn btn-ocean-blue btn-lg w-100 fw-semibold shadow hover-lift">
                        <i className="bi bi-search me-2"></i>
                        Tìm Kiếm
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Categories */}
      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <span className="badge bg-ocean-blue bg-opacity-10 text-ocean-blue px-4 py-2 mb-3">
              <i className="bi bi-stars me-2"></i>
              Danh Mục Phổ Biến
            </span>
            <h2 className="fw-bold text-ocean-dark mb-3">Sẵn sàng khám phá?</h2>
            <p className="text-muted lead">Tham gia Govibe để nhận gợi ý cá nhân hóa và khám phá những trải nghiệm tuyệt vời</p>
          </div>
        </div>
        
        <div className="row g-4">
          {featuredCategories.map((category, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="card h-100 border-0 shadow-sm hover-lift cursor-pointer card-stack position-relative overflow-hidden">
                {/* Ảnh nền danh mục */}
                <div className="position-relative" style={{ height: '200px', overflow: 'hidden' }}>
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-100 h-100"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                  />
                  <div className="position-absolute top-0 start-0 w-100 h-100" 
                       style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))' }}>
                  </div>
                  {/* Icon */}
                  <div className="position-absolute top-50 start-50 translate-middle">
                    <div className={`rounded-circle d-inline-flex align-items-center justify-content-center position-relative ${category.color}`} 
                         style={{ width: '90px', height: '90px' }}>
                      <div className="position-absolute w-100 h-100 rounded-circle pulse-glow"></div>
                      <i className={`${category.icon} text-white position-relative`} style={{ fontSize: '2.5rem' }}></i>
                    </div>
                  </div>
                </div>
                
                <div className={`position-absolute top-0 start-0 w-100 h-2 ${category.color}`}></div>
                <div className="card-body p-4 text-center">
                  <h4 className="fw-bold text-ocean-dark mb-2">{category.title}</h4>
                  <p className="text-ocean-blue fw-semibold mb-2 fs-5">{category.count}</p>
                  <p className="text-muted small mb-3">{category.description}</p>
                  <Link to="/explore" className="btn btn-outline-ocean-blue btn-sm px-4 hover-glow">
                    <i className="bi bi-arrow-right me-2"></i>
                    Khám Phá
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Combo Suggestions */}
      <div className="py-5" style={{ background: 'linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%)' }}>
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <span className="badge bg-warning text-dark px-4 py-2 mb-3">
                <i className="bi bi-fire me-2"></i>
                Xu Hướng Hot
              </span>
              <h2 className="fw-bold mb-3">
                <span className="gradient-text">Gợi Ý Combo "Ăn + Chơi"</span>
              </h2>
              <p className="text-muted lead">Những kết hợp hoàn hảo cho một ngày trọn vẹn</p>
              <button 
                className="btn btn-ocean-blue px-4 py-2 fw-semibold hover-lift"
                onClick={() => setShowComboModal(true)}
              >
                <i className="bi bi-eye me-2"></i>
                Xem Tất Cả Combo Chi Tiết
              </button>
            </div>
          </div>
          
          <div className="row g-4">
            {comboSuggestions.map((combo, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="card h-100 border-0 shadow hover-lift overflow-hidden">
                  <div className="position-relative">
                    <img
                      src={combo.image}
                      className="card-img-top hover-scale"
                      alt={combo.title}
                      style={{ height: '280px', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    />
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-to-b from-transparent to-dark"></div>
                    <span className={`position-absolute top-0 end-0 badge bg-${combo.tag === 'HOT' ? 'danger' : combo.tag === 'NEW' ? 'success' : 'warning'} m-3 px-3 py-2 animate-pulse`}>
                      <i className={`bi ${combo.tag === 'HOT' ? 'bi-fire' : combo.tag === 'NEW' ? 'bi-star-fill' : 'bi-lightning-fill'} me-1`}></i>
                      {combo.tag}
                    </span>
                    <div className="position-absolute bottom-0 start-0 p-3 text-white w-100">
                      <h5 className="fw-bold mb-1">{combo.title}</h5>
                      <p className="small mb-0 opacity-75">
                        <i className="bi bi-geo-alt me-1"></i>
                        Việt Nam
                      </p>
                    </div>
                  </div>
                  <div className="card-body p-4">
                    <p className="text-muted mb-4">{combo.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-star-fill text-warning me-1"></i>
                        <span className="fw-bold">4.8</span>
                        <span className="text-muted small ms-1">(120)</span>
                      </div>
                      <Link to="/suggestions" className="btn btn-ocean-blue btn-sm px-4 hover-glow">
                        <i className="bi bi-arrow-right me-2"></i>
                        Xem Ngay
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-5">
            <Link to="/suggestions" className="btn btn-outline-ocean-blue btn-lg px-5 py-3 fw-semibold hover-lift">
              <i className="bi bi-grid-3x3-gap me-2"></i>
              Xem Tất Cả Combo
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="position-relative overflow-hidden py-5" style={{ background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%)' }}>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 text-white mb-4 mb-lg-0">
              <div className="floating">
                <span className="badge bg-warning text-dark px-3 py-2 mb-3">
                  <i className="bi bi-rocket-takeoff me-2"></i>
                  Bắt Đầu Ngay
                </span>
                <h2 className="display-4 fw-bold mb-4">
                  Sẵn Sàng Khám Phá?
                </h2>
                <p className="lead mb-4 opacity-90">
                  Tham gia Du Lịch Việt để nhận gợi ý cá nhân hóa và khám phá những trải nghiệm tuyệt vời
                </p>
                <ul className="list-unstyled mb-4">
                  <li className="mb-3 d-flex align-items-center">
                    <div className="bg-warning rounded-circle p-2 me-3">
                      <i className="bi bi-check-lg text-dark fw-bold"></i>
                    </div>
                    <span className="fs-5">Gợi ý thông minh dựa trên sở thích</span>
                  </li>
                  <li className="mb-3 d-flex align-items-center">
                    <div className="bg-warning rounded-circle p-2 me-3">
                      <i className="bi bi-check-lg text-dark fw-bold"></i>
                    </div>
                    <span className="fs-5">Tiết kiệm thời gian & chi phí</span>
                  </li>
                  <li className="mb-3 d-flex align-items-center">
                    <div className="bg-warning rounded-circle p-2 me-3">
                      <i className="bi bi-check-lg text-dark fw-bold"></i>
                    </div>
                    <span className="fs-5">Hỗ trợ 24/7 nhiệt tình</span>
                  </li>
                </ul>
                <div className="d-flex gap-3">
                  <Link to="/explore" className="btn btn-warning btn-lg px-5 py-3 fw-semibold shadow-lg hover-lift">
                    <i className="bi bi-compass me-2"></i>
                    Khám Phá Ngay
                  </Link>
                  <Link to="/about" className="btn btn-outline-light btn-lg px-5 py-3 fw-semibold hover-lift">
                    <i className="bi bi-info-circle me-2"></i>
                    Tìm Hiểu Thêm
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative">
                <img
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=700&h=500&fit=crop"
                  alt="Travel Planning"
                  className="img-fluid rounded-4 shadow-2xl hover-scale"
                  style={{ transition: 'transform 0.5s ease' }}
                />
                <div className="position-absolute top-0 end-0 bg-white rounded-4 p-3 m-3 shadow-lg animate-zoom-in">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-people-fill text-ocean-blue fs-3 me-3"></i>
                    <div>
                      <h4 className="fw-bold text-ocean-blue mb-0">25K+</h4>
                      <small className="text-muted">Du khách hài lòng</small>
                    </div>
                  </div>
                </div>
                <div className="position-absolute bottom-0 start-0 bg-white rounded-4 p-3 m-3 shadow-lg animate-zoom-in" style={{ animationDelay: '0.2s' }}>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-star-fill text-warning fs-3 me-3"></i>
                    <div>
                      <h4 className="fw-bold text-ocean-blue mb-0">4.9</h4>
                      <small className="text-muted">Đánh giá trung bình</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative waves */}
        <div className="position-absolute bottom-0 start-0 w-100 opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="0.3" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* Combo Details Modal */}
      {showComboModal && (
        <div className="modal fade show d-block" tabIndex={-1} style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog modal-xl modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header bg-ocean-blue text-white">
                <h5 className="modal-title">
                  <i className="bi bi-collection me-2"></i>
                  Tất Cả Combo Du Lịch Việt Nam
                </h5>
                <button 
                  type="button" 
                  className="btn-close btn-close-white" 
                  onClick={() => setShowComboModal(false)}
                ></button>
              </div>
              <div className="modal-body p-4">
                <div className="row g-4">
                  {comboSuggestions.map((combo, index) => (
                    <div key={combo.id} className="col-lg-6 col-md-12">
                      <div className="card h-100 border-0 shadow-sm hover-lift">
                        <div className="position-relative">
                          <img
                            src={combo.image}
                            className="card-img-top"
                            alt={combo.title}
                            style={{ height: '200px', objectFit: 'cover' }}
                          />
                          <span className={`position-absolute top-0 end-0 badge bg-${combo.tag === 'HOT' ? 'danger' : combo.tag === 'NEW' ? 'success' : 'warning'} m-2 px-2 py-1`}>
                            <i className={`bi ${combo.tag === 'HOT' ? 'bi-fire' : combo.tag === 'NEW' ? 'bi-star-fill' : 'bi-lightning-fill'} me-1`}></i>
                            {combo.tag}
                          </span>
                        </div>
                        <div className="card-body">
                          <h6 className="card-title fw-bold text-ocean-blue">{combo.title}</h6>
                          <p className="card-text text-muted small mb-3">{combo.description}</p>
                          
                          <div className="row g-2 mb-3">
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="bi bi-geo-alt text-danger me-1"></i>
                                <small className="text-muted">{combo.location}</small>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="bi bi-clock text-info me-1"></i>
                                <small className="text-muted">{combo.duration}</small>
                              </div>
                            </div>
                          </div>

                          <div className="mb-3">
                            <h6 className="fw-bold text-ocean-dark mb-2">Lịch trình:</h6>
                            <ul className="list-unstyled mb-0">
                              {combo.activities.map((activity, idx) => (
                                <li key={idx} className="mb-1">
                                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                                  <small>{activity}</small>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <span className="fw-bold text-ocean-blue fs-5">{combo.price}</span>
                              <small className="text-muted">/người</small>
                            </div>
                            <button className="btn btn-ocean-blue btn-sm px-3">
                              <i className="bi bi-calendar-check me-1"></i>
                              Đặt Ngay
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={() => setShowComboModal(false)}
                >
                  Đóng
                </button>
                <Link to="/suggestions" className="btn btn-ocean-blue">
                  <i className="bi bi-arrow-right me-2"></i>
                  Xem Thêm Gợi Ý
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;