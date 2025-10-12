import React, { useState } from 'react';

const Suggestions: React.FC = () => {
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>([]);
  const [budget, setBudget] = useState('medium');
  const [location, setLocation] = useState('');

  const preferences = [
    { id: 'food', name: 'Ẩm thực', icon: 'bi-cup-straw', color: 'bg-red-500' },
    { id: 'nature', name: 'Thiên nhiên', icon: 'bi-tree', color: 'bg-green-500' },
    { id: 'culture', name: 'Văn hóa', icon: 'bi-building', color: 'bg-orange-500' },
    { id: 'entertainment', name: 'Giải trí', icon: 'bi-music-note-beamed', color: 'bg-purple-500' },
    { id: 'shopping', name: 'Mua sắm', icon: 'bi-bag', color: 'bg-pink-500' },
    { id: 'adventure', name: 'Phiêu lưu', icon: 'bi-mountain', color: 'bg-blue-500', special: true },
    { id: 'relax', name: 'Thư giãn', icon: 'bi-heart', color: 'bg-teal-500' },
    { id: 'photography', name: 'Chụp ảnh', icon: 'bi-camera', color: 'bg-yellow-500' }
  ];

  const budgetOptions = [
    { id: 'low', name: 'Tiết kiệm', range: 'Dưới 500.000₫', icon: 'bi-piggy-bank' },
    { id: 'medium', name: 'Trung bình', range: '500.000 - 2.000.000₫', icon: 'bi-wallet2' },
    { id: 'high', name: 'Cao cấp', range: 'Trên 2.000.000₫', icon: 'bi-gem' }
  ];

  const suggestedCombos = [
    {
      id: 1,
      title: 'Combo Ẩm thực + Check-in Hà Nội',
      location: 'Hà Nội',
      duration: '1 ngày',
      price: '800.000₫',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=400&h=250&fit=crop',
      activities: [
        { time: '8:00', activity: 'Phở Gia Truyền Bát Đàn', type: 'food' },
        { time: '10:00', activity: 'Hồ Hoàn Kiếm & Đền Ngọc Sơn', type: 'culture' },
        { time: '12:00', activity: 'Bún Chả Obama', type: 'food' },
        { time: '14:00', activity: 'Phố Cổ Hà Nội', type: 'culture' },
        { time: '16:00', activity: 'Cafe Train Street', type: 'checkin' },
        { time: '18:00', activity: 'Chợ Đêm Hàng Ngang', type: 'shopping' }
      ],
      tags: ['Bán chạy', 'Phù hợp cặp đôi']
    },
    {
      id: 2,
      title: 'Combo Thiên nhiên + Thư giãn Đà Lạt',
      location: 'Đà Lạt',
      duration: '2 ngày 1 đêm',
      price: '1.500.000₫',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=250&fit=crop',
      activities: [
        { time: 'Ngày 1 - 9:00', activity: 'Hồ Xuân Hương', type: 'nature' },
        { time: '11:00', activity: 'Dinh Bảo Đại', type: 'culture' },
        { time: '14:00', activity: 'Cafe Cung Đường Tình Yêu', type: 'relax' },
        { time: '16:00', activity: 'Vườn Hoa Đà Lạt', type: 'photography' },
        { time: 'Ngày 2 - 8:00', activity: 'Sunrise Langbiang Mountain', type: 'adventure' },
        { time: '14:00', activity: 'Spa thư giãn', type: 'relax' }
      ],
      tags: ['Mới', 'Honeymoon']
    },
    {
      id: 3,
      title: 'Combo Biển + Hải sản Nha Trang',
      location: 'Nha Trang',
      duration: '3 ngày 2 đêm',
      price: '2.200.000₫',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=250&fit=crop',
      activities: [
        { time: 'Ngày 1', activity: 'Check-in resort', type: 'relax' },
        { time: '15:00', activity: 'Biển Nha Trang', type: 'nature' },
        { time: '19:00', activity: 'Hải sản Damri', type: 'food' },
        { time: 'Ngày 2', activity: 'Tour đảo 4 đảo', type: 'adventure' },
        { time: 'Ngày 3', activity: 'Tháp Bà Ponagar', type: 'culture' },
        { time: '14:00', activity: 'Chợ Đêm Nha Trang', type: 'shopping' }
      ],
      tags: ['Hot', 'Gia đình']
    }
  ];

  const togglePreference = (prefId: string) => {
    setSelectedPreferences(prev => 
      prev.includes(prefId) 
        ? prev.filter(id => id !== prefId)
        : [...prev, prefId]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="text-white py-5" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #3b82f6 100%)' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-3">Gợi Ý Cho Bạn</h1>
              <p className="lead mb-0">
                Để chúng tôi gợi ý những trải nghiệm phù hợp nhất với sở thích của bạn
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <i className="bi bi-lightbulb display-1 opacity-50"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Preference Form */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="bg-white rounded-4 shadow-sm p-5">
              <h2 className="fw-bold text-ocean-dark mb-4 text-center">
                <i className="bi bi-heart me-2"></i>
                Cho chúng tôi biết sở thích của bạn
              </h2>

              {/* Location */}
              <div className="mb-5">
                <h4 className="fw-semibold text-ocean-dark mb-3">Bạn muốn đi đâu?</h4>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Nhập tỉnh/thành phố..."
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <select className="form-select form-select-lg">
                      <option>Tất cả miền</option>
                      <option>Miền Bắc</option>
                      <option>Miền Trung</option>
                      <option>Miền Nam</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Preferences */}
              <div className="mb-5">
                <h4 className="fw-semibold text-ocean-dark mb-3">Bạn thích gì?</h4>
                <div className="row g-3">
                  {preferences.map(pref => (
                    <div key={pref.id} className="col-lg-3 col-md-4 col-sm-6">
                      <div
                        className={`card h-100 border-2 cursor-pointer transition-all ${
                          selectedPreferences.includes(pref.id)
                            ? 'border-ocean-blue bg-ocean-blue text-white'
                            : 'border-gray-200 hover:border-ocean-light'
                        }`}
                        onClick={() => togglePreference(pref.id)}
                      >
                        <div className="card-body text-center p-3">
                          <div className={`${pref.special ? 'position-relative' : ''}`}>
                            <i className={`${pref.icon} fs-2 mb-2 ${pref.special ? 'text-warning animate-pulse' : ''}`}></i>
                            {pref.special && (
                              <i className="bi bi-stars position-absolute top-0 start-100 translate-middle text-warning small"></i>
                            )}
                          </div>
                          <h6 className="fw-semibold mb-0">{pref.name}</h6>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Budget */}
              <div className="mb-5">
                <h4 className="fw-semibold text-ocean-dark mb-3">Ngân sách của bạn</h4>
                <div className="row g-3">
                  {budgetOptions.map(option => (
                    <div key={option.id} className="col-lg-4">
                      <div
                        className={`card h-100 border-2 cursor-pointer transition-all ${
                          budget === option.id
                            ? 'border-ocean-blue bg-ocean-blue text-white'
                            : 'border-gray-200 hover:border-ocean-light'
                        }`}
                        onClick={() => setBudget(option.id)}
                      >
                        <div className="card-body text-center p-4">
                          <i className={`${option.icon} fs-1 mb-3`}></i>
                          <h5 className="fw-bold mb-2">{option.name}</h5>
                          <p className="mb-0 small">{option.range}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="text-center">
                <button className="btn btn-ocean-blue btn-lg px-5 py-3 fw-semibold">
                  <i className="bi bi-magic me-2"></i>
                  Tạo Gợi Ý Cho Tôi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Suggested Combos */}
      <div className="container pb-5">
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h2 className="fw-bold text-ocean-dark mb-3">Combo Gợi Ý Phổ Biến</h2>
            <p className="text-muted lead">Những kết hợp được yêu thích nhất</p>
          </div>
        </div>

        <div className="row g-4">
          {suggestedCombos.map(combo => (
            <div key={combo.id} className="col-lg-4">
              <div className="card h-100 border-0 shadow-sm hover:shadow-lg transition-shadow">
                <div className="position-relative">
                  <img
                    src={combo.image}
                    className="card-img-top"
                    alt={combo.title}
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                  <div className="position-absolute top-0 start-0 m-3">
                    <div className="d-flex gap-2">
                      {combo.tags.map((tag, index) => (
                        <span key={index} className={`badge ${tag === 'Hot' || tag === 'Bán chạy' ? 'bg-danger' : tag === 'Mới' || tag === 'NEW' ? 'bg-success' : 'bg-warning'}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="position-absolute top-0 end-0 m-3">
                    <button className="btn btn-light btn-sm rounded-circle">
                      <i className="bi bi-heart"></i>
                    </button>
                  </div>
                </div>

                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h5 className="fw-bold text-ocean-dark mb-0">{combo.title}</h5>
                    <div className="text-end">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-star-fill text-warning me-1"></i>
                        <span className="fw-bold">{combo.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex align-items-center text-muted mb-3">
                    <i className="bi bi-geo-alt me-1"></i>
                    <span className="me-3">{combo.location}</span>
                    <i className="bi bi-clock me-1"></i>
                    <span>{combo.duration}</span>
                  </div>

                  <div className="mb-3">
                    <h6 className="fw-semibold mb-2">Lịch trình:</h6>
                    {combo.activities.slice(0, 3).map((activity, index) => (
                      <div key={index} className="d-flex align-items-center mb-1">
                        <span className="badge bg-light text-ocean-blue me-2 small">{activity.time}</span>
                        <small className="text-muted">{activity.activity}</small>
                      </div>
                    ))}
                    {combo.activities.length > 3 && (
                      <small className="text-muted">+{combo.activities.length - 3} hoạt động khác</small>
                    )}
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <span className="fs-5 fw-bold text-ocean-blue">{combo.price}</span>
                      <small className="text-muted">/người</small>
                    </div>
                    <div className="d-flex gap-2">
                      <button className="btn btn-outline-ocean-blue btn-sm">
                        Chi tiết
                      </button>
                      <button className="btn btn-ocean-blue btn-sm">
                        Đặt ngay
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Personal Recommendation CTA */}
      <div className="bg-ocean-blue text-white py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Muốn Gợi Ý Cá Nhân Hóa Hơn?</h2>
          <p className="lead mb-4">Đăng ký tài khoản để nhận gợi ý phù hợp 100% với sở thích của bạn</p>
          <div className="d-flex gap-3 justify-content-center">
            <button className="btn btn-light btn-lg">
              <i className="bi bi-person-plus me-2"></i>
              Đăng Ký Ngay
            </button>
            <button className="btn btn-outline-light btn-lg">
              <i className="bi bi-question-circle me-2"></i>
              Tìm Hiểu Thêm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;