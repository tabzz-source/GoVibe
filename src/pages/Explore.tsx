import React, { useState } from 'react';

const Explore: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlace, setSelectedPlace] = useState<any>(null);

  const categories = [
    { id: 'all', name: 'Tất Cả', icon: 'bi-grid' },
    { id: 'food', name: 'Ẩm Thực', icon: 'bi-cup-straw' },
    { id: 'entertainment', name: 'Giải Trí', icon: 'bi-music-note-beamed' },
    { id: 'checkin', name: 'Check-in', icon: 'bi-camera' },
    { id: 'culture', name: 'Văn Hóa', icon: 'bi-building' },
    { id: 'nature', name: 'Thiên Nhiên', icon: 'bi-tree' }
  ];

  const places = [
    {
      id: 1,
      name: 'Phố Cổ Hội An',
      category: 'culture',
      location: 'Quảng Nam',
      rating: 4.8,
      reviews: 1250,
      price: 'Miễn phí',
      image: 'https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=400&h=250&fit=crop',
      tags: ['UNESCO', 'Lịch sử', 'Check-in'],
      description: 'Khám phá vẻ đẹp cổ kính của phố cổ Hội An với những ngôi nhà cổ đầy màu sắc.',
      address: 'Phố cổ Hội An, Quảng Nam',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.856168121187!2d108.32493991533431!3d15.879198088780547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142108997dc971f%3A0x1295578f5ae5718!2sHoi%20An%20Ancient%20Town!5e0!3m2!1sen!2s!4v1697097600000!5m2!1sen!2s'
    },
    {
      id: 2,
      name: 'Quán Cơm Gà Hải Nam',
      category: 'food',
      location: 'Hà Nội',
      rating: 4.6,
      reviews: 890,
      price: '50.000 - 80.000₫',
      image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=250&fit=crop',
      tags: ['Món Á', 'Giá rẻ', 'Ngon'],
      description: 'Cơm gà Hải Nam đậm đà hương vị, được chế biến theo công thức truyền thống.',
      address: '15 Phố Lý Quốc Sư, Hoàn Kiếm, Hà Nội',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0966516383815!2d105.84839931533431!3d21.028511385995126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab953357c995%3A0x160c488a21b6847!2sHanoi!5e0!3m2!1sen!2s!4v1697097600000!5m2!1sen!2s'
    },
    {
      id: 3,
      name: 'Vịnh Hạ Long',
      category: 'nature',
      location: 'Quảng Ninh',
      rating: 4.9,
      reviews: 2100,
      price: '800.000 - 2.000.000₫',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=400&h=250&fit=crop',
      tags: ['UNESCO', 'Du thuyền', 'Thiên nhiên'],
      description: 'Kỳ quan thiên nhiên thế giới với hàng nghìn đảo đá vôi kỳ thú.',
      address: 'Vịnh Hạ Long, Quảng Ninh',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0966516383815!2d107.04429!3d20.95991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a50ecba0f01a5%3A0x944f5a84a9db9e2!2sHa%20Long%20Bay!5e0!3m2!1sen!2s!4v1697097600000!5m2!1sen!2s'
    },
    {
      id: 4,
      name: 'Rạp CGV Landmark',
      category: 'entertainment',
      location: 'TP.HCM',
      rating: 4.4,
      reviews: 650,
      price: '100.000 - 200.000₫',
      image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&h=250&fit=crop',
      tags: ['Phim', 'Giải trí', 'Hiện đại'],
      description: 'Rạp chiếu phim hiện đại với công nghệ âm thanh và hình ảnh tốt nhất.',
      address: 'Landmark 81, Vinhomes Central Park, Bình Thạnh, TP.HCM',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.324845662877!2d106.71584931533431!3d10.781529992288916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4b3330bcc7%3A0xd2ecb62e0d050fe9!2sLandmark%2081!5e0!3m2!1sen!2s!4v1697097600000!5m2!1sen!2s'
    },
    {
      id: 5,
      name: 'Cầu Vàng Đà Nẵng',
      category: 'checkin',
      location: 'Đà Nẵng',
      rating: 4.7,
      reviews: 1800,
      price: '700.000₫',
      image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400&h=250&fit=crop',
      tags: ['Check-in', 'Nổi tiếng', 'Đẹp'],
      description: 'Cầu Vàng nổi tiếng thế giới với đôi bàn tay khổng lồ đỡ cầu.',
      address: 'Bà Nà Hills, Hòa Vang, Đà Nẵng',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.856168121187!2d107.99493991533431!3d15.999198088780547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142177ca1c66e9b%3A0x6360fd5e9096994f!2sGolden%20Bridge!5e0!3m2!1sen!2s!4v1697097600000!5m2!1sen!2s'
    },
    {
      id: 6,
      name: 'Chợ Đêm Phú Quốc',
      category: 'food',
      location: 'Kiên Giang',
      rating: 4.5,
      reviews: 920,
      price: '30.000 - 150.000₫',
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=250&fit=crop',
      tags: ['Hải sản', 'Chợ đêm', 'Địa phương'],
      description: 'Thưởng thức hải sản tươi ngon và đặc sản địa phương tại chợ đêm sầm uất.',
      address: 'Phú Quốc, Kiên Giang',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.856168121187!2d103.99493991533431!3d10.222198088780547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a78c62b49eda17%3A0x8aa79fbbdd72cdb!2sPhu%20Quoc%20Night%20Market!5e0!3m2!1sen!2s!4v1697097600000!5m2!1sen!2s'
    },
    {
      id: 7,
      name: 'Bún Chả Hương Liên',
      category: 'food',
      location: 'Hà Nội',
      rating: 4.8,
      reviews: 1450,
      price: '40.000 - 60.000₫',
      image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=250&fit=crop',
      tags: ['Đặc sản', 'Nổi tiếng', 'Obama'],
      description: 'Quán bún chả nổi tiếng với chuyến thăm của Tổng thống Obama và đầu bếp Anthony Bourdain.',
      address: '24 Lê Văn Hưu, Hai Bà Trưng, Hà Nội',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.5966516383815!2d105.84839931533431!3d21.018511385995126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab953357c995%3A0x160c488a21b6847!2sBun%20Cha%20Huong%20Lien!5e0!3m2!1sen!2s!4v1697097600000!5m2!1sen!2s'
    },
    {
      id: 8,
      name: 'Hồ Hoàn Kiếm',
      category: 'nature',
      location: 'Hà Nội',
      rating: 4.7,
      reviews: 2350,
      price: 'Miễn phí',
      image: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=400&h=250&fit=crop',
      tags: ['Thiên nhiên', 'Lịch sử', 'Dạo bộ'],
      description: 'Hồ Gươm - trái tim của Thủ đô Hà Nội với Tháp Rùa và Đền Ngọc Sơn nổi tiếng.',
      address: 'Hoàn Kiếm, Hà Nội',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0966516383815!2d105.85239931533431!3d21.028511385995126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abb158a2305d%3A0x5c357d21c785ea3d!2sHoan%20Kiem%20Lake!5e0!3m2!1sen!2s!4v1697097600000!5m2!1sen!2s'
    },
    {
      id: 9,
      name: 'Bảo Tàng Chứng Tích Chiến Tranh',
      category: 'culture',
      location: 'TP.HCM',
      rating: 4.6,
      reviews: 1680,
      price: '40.000₫',
      image: 'https://images.unsplash.com/photo-1563622013-2bc4cc571c93?w=400&h=250&fit=crop',
      tags: ['Lịch sử', 'Giáo dục', 'Văn hóa'],
      description: 'Bảo tàng lưu giữ những hiện vật và hình ảnh quý giá về chiến tranh Việt Nam.',
      address: '28 Võ Văn Tần, Quận 3, TP.HCM',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.324845662877!2d106.69284931533431!3d10.779529992288916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f38f9ed887b%3A0x14aded124c24a281!2sWar%20Remnants%20Museum!5e0!3m2!1sen!2s!4v1697097600000!5m2!1sen!2s'
    },
    {
      id: 10,
      name: 'Nhà Thờ Đức Bà',
      category: 'checkin',
      location: 'TP.HCM',
      rating: 4.5,
      reviews: 1920,
      price: 'Miễn phí',
      image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400&h=250&fit=crop',
      tags: ['Kiến trúc', 'Gothic', 'Check-in'],
      description: 'Nhà thờ cổ kính với kiến trúc Gothic độc đáo, biểu tượng của Sài Gòn.',
      address: '01 Công xã Paris, Quận 1, TP.HCM',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.324845662877!2d106.69984931533431!3d10.779529992288916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4b8ca99f45%3A0xc2d2b24c5cf2e800!2sNotre-Dame%20Cathedral%20Basilica%20of%20Saigon!5e0!3m2!1sen!2s!4v1697097600000!5m2!1sen!2s'
    },
    {
      id: 11,
      name: 'Vincom Center Đồng Khởi',
      category: 'entertainment',
      location: 'TP.HCM',
      rating: 4.3,
      reviews: 890,
      price: 'Miễn phí vào cửa',
      image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=400&h=250&fit=crop',
      tags: ['Mua sắm', 'Giải trí', 'Ẩm thực'],
      description: 'Trung tâm thương mại cao cấp với nhiều thương hiệu nổi tiếng và khu ẩm thực đa dạng.',
      address: '72 Lê Thánh Tôn, Quận 1, TP.HCM',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.424845662877!2d106.70584931533431!3d10.777529992288916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4175e90e47%3A0x4d8734f7f9e7a4be!2sVincom%20Center!5e0!3m2!1sen!2s!4v1697097600000!5m2!1sen!2s'
    },
    {
      id: 12,
      name: 'Bãi Biển Mỹ Khê',
      category: 'nature',
      location: 'Đà Nẵng',
      rating: 4.8,
      reviews: 2150,
      price: 'Miễn phí',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=250&fit=crop',
      tags: ['Bãi biển', 'Tắm biển', 'Du lịch'],
      description: 'Một trong những bãi biển đẹp nhất thế giới với bờ cát trắng mịn và nước biển trong xanh.',
      address: 'Phước Mỹ, Sơn Trà, Đà Nẵng',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.856168121187!2d108.24493991533431!3d16.059198088780547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c2f81e09bd%3A0x923e53be6d lafb!2sMy%20Khe%20Beach!5e0!3m2!1sen!2s!4v1697097600000!5m2!1sen!2s'
    }
  ];

  const filteredPlaces = places.filter(place => {
    const matchesCategory = activeCategory === 'all' || place.category === activeCategory;
    const matchesSearch = place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         place.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="text-white py-5" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #3b82f6 100%)' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-3">Khám Phá Việt Nam</h1>
              <p className="lead mb-0">
                Hơn 1000+ địa điểm du lịch, ẩm thực và giải trí trên khắp đất nước
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <div className="d-flex align-items-center justify-content-lg-end">
                <i className="bi bi-compass display-1 opacity-50"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search & Filter Section */}
      <div className="bg-white shadow-sm py-4 sticky-top" style={{ top: '76px', zIndex: 1020 }}>
        <div className="container">
          <div className="row g-3 align-items-center">
            {/* Search */}
            <div className="col-lg-6">
              <div className="position-relative">
                <i className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>
                <input
                  type="text"
                  className="form-control form-control-lg ps-5"
                  placeholder="Tìm địa điểm, thành phố..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="col-lg-6">
              <div className="d-flex gap-2 overflow-auto">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`btn btn-sm px-3 py-2 flex-shrink-0 ${
                      activeCategory === category.id
                        ? 'btn-ocean-blue text-white'
                        : 'btn-outline-ocean-blue'
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <i className={`${category.icon} me-1`}></i>
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="container py-5">
        <div className="row mb-4">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center">
              <h3 className="fw-bold text-ocean-dark mb-0">
                Tìm thấy {filteredPlaces.length} địa điểm
              </h3>
              <div className="dropdown">
                <button
                  className="btn btn-outline-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  <i className="bi bi-sort-down me-2"></i>
                  Sắp xếp
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Đánh giá cao nhất</a></li>
                  <li><a className="dropdown-item" href="#">Gần nhất</a></li>
                  <li><a className="dropdown-item" href="#">Giá thấp đến cao</a></li>
                  <li><a className="dropdown-item" href="#">Nhiều review nhất</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Places Grid */}
        <div className="row g-4">
          {filteredPlaces.map(place => (
            <div key={place.id} className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm hover:shadow-lg transition-shadow">
                <div className="position-relative">
                  <img
                    src={place.image}
                    className="card-img-top"
                    alt={place.name}
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                  <div className="position-absolute top-0 end-0 m-3">
                    <button className="btn btn-light btn-sm rounded-circle">
                      <i className="bi bi-heart"></i>
                    </button>
                  </div>
                  <div className="position-absolute bottom-0 start-0 m-3">
                    <span className="badge bg-dark bg-opacity-75 text-white">
                      <i className="bi bi-geo-alt me-1"></i>
                      {place.location}
                    </span>
                  </div>
                </div>

                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h5 className="fw-bold text-ocean-dark mb-0">{place.name}</h5>
                    <div className="text-end">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-star-fill text-warning me-1"></i>
                        <span className="fw-bold">{place.rating}</span>
                      </div>
                      <small className="text-muted">({place.reviews} reviews)</small>
                    </div>
                  </div>

                  <p className="text-muted small mb-3">{place.description}</p>

                  <div className="d-flex flex-wrap gap-1 mb-3">
                    {place.tags.map((tag, index) => (
                      <span key={index} className="badge bg-light text-ocean-blue border border-ocean-blue">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <span className="fw-bold text-ocean-blue">{place.price}</span>
                    </div>
                    <div className="d-flex gap-2">
                      <button 
                        className="btn btn-outline-ocean-blue btn-sm"
                        onClick={() => setSelectedPlace(place)}
                        data-bs-toggle="modal"
                        data-bs-target="#placeDetailModal"
                      >
                        <i className="bi bi-info-circle me-1"></i>
                        Chi tiết
                      </button>
                      <button className="btn btn-ocean-blue btn-sm">
                        <i className="bi bi-bookmark me-1"></i>
                        Lưu
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {filteredPlaces.length > 0 && (
          <div className="text-center mt-5">
            <button className="btn btn-outline-ocean-blue btn-lg">
              <i className="bi bi-arrow-down-circle me-2"></i>
              Xem Thêm
            </button>
          </div>
        )}

        {/* No Results */}
        {filteredPlaces.length === 0 && (
          <div className="text-center py-5">
            <i className="bi bi-search display-1 text-muted mb-3"></i>
            <h4 className="text-muted mb-3">Không tìm thấy kết quả phù hợp</h4>
            <p className="text-muted">Hãy thử tìm kiếm với từ khóa khác hoặc thay đổi bộ lọc</p>
            <button 
              className="btn btn-ocean-blue"
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('all');
              }}
            >
              Xóa bộ lọc
            </button>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-ocean-blue text-white py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Không Tìm Thấy Địa Điểm Yêu Thích?</h2>
          <p className="lead mb-4">Gợi ý địa điểm mới cho chúng tôi và nhận điểm thưởng</p>
          <button className="btn btn-light btn-lg">
            <i className="bi bi-plus-circle me-2"></i>
            Đề Xuất Địa Điểm
          </button>
        </div>
      </div>

      {/* Modal Chi Tiết Địa Điểm */}
      <div className="modal fade" id="placeDetailModal" tabIndex={-1} aria-labelledby="placeDetailModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content border-0 shadow-lg">
            {selectedPlace && (
              <>
                <div className="modal-header border-0" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #3b82f6 100%)' }}>
                  <div>
                    <h5 className="modal-title text-white fw-bold" id="placeDetailModalLabel">
                      <i className="bi bi-geo-alt-fill me-2"></i>
                      {selectedPlace.name}
                    </h5>
                    <p className="text-white mb-0 opacity-75">
                      <i className="bi bi-pin-map me-1"></i>
                      {selectedPlace.location}
                    </p>
                  </div>
                  <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body p-0">
                  {/* Hình ảnh */}
                  <div className="position-relative">
                    <img 
                      src={selectedPlace.image} 
                      alt={selectedPlace.name}
                      className="w-100"
                      style={{ height: '300px', objectFit: 'cover' }}
                    />
                    <div className="position-absolute top-0 start-0 m-3">
                      <span className="badge bg-warning text-dark px-3 py-2">
                        <i className="bi bi-star-fill me-1"></i>
                        {selectedPlace.rating} ({selectedPlace.reviews} reviews)
                      </span>
                    </div>
                  </div>

                  <div className="p-4">
                    {/* Thông tin */}
                    <div className="mb-4">
                      <h6 className="fw-bold text-ocean-dark mb-3">
                        <i className="bi bi-info-circle me-2"></i>
                        Thông Tin
                      </h6>
                      <p className="text-muted mb-3">{selectedPlace.description}</p>
                      
                      <div className="row g-3 mb-3">
                        <div className="col-6">
                          <div className="d-flex align-items-center">
                            <i className="bi bi-cash-coin text-ocean-blue fs-4 me-2"></i>
                            <div>
                              <small className="text-muted d-block">Giá vé</small>
                              <span className="fw-semibold text-ocean-dark">{selectedPlace.price}</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="d-flex align-items-center">
                            <i className="bi bi-geo-alt text-ocean-blue fs-4 me-2"></i>
                            <div>
                              <small className="text-muted d-block">Địa chỉ</small>
                              <span className="fw-semibold text-ocean-dark small">{selectedPlace.address}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex flex-wrap gap-2 mb-3">
                        {selectedPlace.tags.map((tag: string, index: number) => (
                          <span key={index} className="badge bg-ocean-blue bg-opacity-10 text-ocean-blue border border-ocean-blue">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bản đồ */}
                    <div className="mb-3">
                      <h6 className="fw-bold text-ocean-dark mb-3">
                        <i className="bi bi-map me-2"></i>
                        Vị Trí Trên Bản Đồ
                      </h6>
                      <div className="ratio ratio-16x9 rounded-3 overflow-hidden border">
                        <iframe
                          src={selectedPlace.mapUrl}
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title={`Bản đồ ${selectedPlace.name}`}
                        ></iframe>
                      </div>
                      <div className="mt-2">
                        <a 
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedPlace.address)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-ocean-blue btn-sm w-100"
                        >
                          <i className="bi bi-map me-2"></i>
                          Mở Google Maps
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer border-0 bg-light">
                  <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">
                    Đóng
                  </button>
                  <button type="button" className="btn btn-ocean-blue">
                    <i className="bi bi-bookmark me-2"></i>
                    Lưu Địa Điểm
                  </button>
                  <button type="button" className="btn btn-warning">
                    <i className="bi bi-share me-2"></i>
                    Chia Sẻ
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;