import React, { useState } from 'react';

const Reviews: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [reviewData, setReviewData] = useState({
    location: '',
    rating: 5,
    title: '',
    content: '',
    category: '',
    images: [] as string[]
  });
  const [tempReviews, setTempReviews] = useState<any[]>([]);

  const handleSubmitReview = () => {
    const newReview = {
      id: Date.now(),
      userName: 'Bạn',
      userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      rating: reviewData.rating,
      date: 'Vừa xong',
      location: reviewData.location,
      locationCategory: reviewData.category,
      images: reviewData.images,
      content: reviewData.content,
      helpful: 0,
      verified: false,
      title: reviewData.title
    };
    setTempReviews([newReview, ...tempReviews]);
    setShowReviewModal(false);
    setReviewData({
      location: '',
      rating: 5,
      title: '',
      content: '',
      category: '',
      images: []
    });
  };

  const reviews = [
    {
      id: 1,
      userName: 'Nguyễn Minh Anh',
      userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      rating: 5,
      date: '2 ngày trước',
      location: 'Phố Cổ Hội An',
      locationCategory: 'culture',
      images: [
        'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=300&h=200&fit=crop',
        'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=300&h=200&fit=crop'
      ],
      content: 'Phố cổ Hội An thực sự tuyệt vời! Không khí yên bình, kiến trúc cổ kính. Đi vào buổi chiều tối để ngắm đèn lồng rất đẹp. Đồ ăn cũng ngon và giá cả phải chăng.',
      helpful: 45,
      verified: true
    },
    {
      id: 2,
      userName: 'Trần Hoàng Nam',
      userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      rating: 4,
      date: '5 ngày trước',
      location: 'Vịnh Hạ Long',
      locationCategory: 'nature',
      images: [
        'https://images.unsplash.com/photo-1528127269322-539801943592?w=300&h=200&fit=crop'
      ],
      content: 'Du thuyền 2 ngày 1 đêm trên vịnh Hạ Long rất đáng để trải nghiệm. Cảnh đẹp tuyệt vời, ăn uống ok. Chỉ hơi đông khách vào cuối tuần.',
      helpful: 32,
      verified: true
    },
    {
      id: 3,
      userName: 'Lê Thu Hà',
      userAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      rating: 5,
      date: '1 tuần trước',
      location: 'Cầu Vàng Đà Nẵng',
      locationCategory: 'checkin',
      images: [
        'https://images.unsplash.com/photo-1586190002787-714d1dd1bb1d?w=300&h=200&fit=crop',
        'https://images.unsplash.com/photo-1540611025311-01df3cef54b5?w=300&h=200&fit=crop',
        'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=300&h=200&fit=crop'
      ],
      content: 'Cầu Vàng đẹp hơn cả trên hình! Nên đi sáng sớm để tránh đông người và thời tiết mát mẻ. Vé cáp treo hơi đắt nhưng view từ trên xuống rất megic!',
      helpful: 78,
      verified: true
    },
    {
      id: 4,
      userName: 'Phạm Đức Minh',
      userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      rating: 4,
      date: '2 tuần trước',
      location: 'Chợ Đêm Phú Quốc',
      locationCategory: 'food',
      images: [
        'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=300&h=200&fit=crop'
      ],
      content: 'Hải sản tươi ngon, giá hợp lý. Nhiều món ăn đặc sản địa phương để thử. Nên đến khoảng 6-7h tối để chọn được món ngon nhất.',
      helpful: 28,
      verified: false
    },
    {
      id: 5,
      userName: 'Võ Thị Mai',
      userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
      rating: 5,
      date: '3 tuần trước',
      location: 'Café The Note',
      locationCategory: 'food',
      images: [
        'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=300&h=200&fit=crop',
        'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=300&h=200&fit=crop'
      ],
      content: 'Quán cafe nhỏ xinh ở Hà Nội với concept ghi chú rất độc đáo. Không gian yên tĩnh, thích hợp làm việc hoặc hẹn hò. Coffee ngon, giá cả phải chăng.',
      helpful: 52,
      verified: true
    }
  ];

  const topReviewers = [
    {
      name: 'Nguyễn Minh Anh',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      reviews: 156,
      helpful: 2341,
      badge: 'Elite'
    },
    {
      name: 'Trần Hoàng Nam',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      reviews: 128,
      helpful: 1987,
      badge: 'Expert'
    },
    {
      name: 'Lê Thu Hà',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      reviews: 95,
      helpful: 1654,
      badge: 'Expert'
    }
  ];

  const categories = [
    { id: 'all', name: 'Tất Cả', icon: 'bi-grid' },
    { id: 'food', name: 'Ẩm Thực', icon: 'bi-cup-straw' },
    { id: 'nature', name: 'Thiên Nhiên', icon: 'bi-tree' },
    { id: 'culture', name: 'Văn Hóa', icon: 'bi-building' },
    { id: 'checkin', name: 'Check-in', icon: 'bi-camera' }
  ];

  const combinedReviews = [...tempReviews, ...reviews];

  const filteredReviews = activeTab === 'all' 
    ? combinedReviews 
    : combinedReviews.filter(r => r.locationCategory === activeTab);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i
        key={i}
        className={`bi bi-star${i < rating ? '-fill' : ''} text-warning`}
      ></i>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="text-white py-5" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #3b82f6 100%)' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-3">Review Từ Cộng Đồng</h1>
              <p className="lead mb-0">
                Hàng nghìn review chân thực từ những người đã trải nghiệm
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <button 
                className="btn btn-light btn-lg"
                onClick={() => setShowReviewModal(true)}
              >
                <i className="bi bi-pencil-square me-2"></i>
                Viết Review
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white shadow-sm py-4">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-3 col-6 mb-3 mb-lg-0">
              <h3 className="fw-bold text-ocean-blue mb-1">10,234</h3>
              <p className="text-muted mb-0">Tổng Review</p>
            </div>
            <div className="col-lg-3 col-6 mb-3 mb-lg-0">
              <h3 className="fw-bold text-ocean-blue mb-1">4.8</h3>
              <p className="text-muted mb-0">Đánh Giá TB</p>
            </div>
            <div className="col-lg-3 col-6">
              <h3 className="fw-bold text-ocean-blue mb-1">25,678</h3>
              <p className="text-muted mb-0">Reviewer</p>
            </div>
            <div className="col-lg-3 col-6">
              <h3 className="fw-bold text-ocean-blue mb-1">1,000+</h3>
              <p className="text-muted mb-0">Địa Điểm</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="bg-light py-3 sticky-top" style={{ top: '76px', zIndex: 1020 }}>
        <div className="container">
          <div className="d-flex gap-2 overflow-auto">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`btn btn-sm px-4 py-2 flex-shrink-0 ${
                  activeTab === cat.id
                    ? 'btn-ocean-blue text-white'
                    : 'btn-outline-ocean-blue'
                }`}
                onClick={() => setActiveTab(cat.id)}
              >
                <i className={`${cat.icon} me-2`}></i>
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-5">
        <div className="row">
          {/* Reviews List */}
          <div className="col-lg-8 mb-4 mb-lg-0">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4 className="fw-bold text-ocean-dark mb-0">
                {filteredReviews.length} Review
              </h4>
              <select className="form-select form-select-sm" style={{ width: 'auto' }}>
                <option>Mới nhất</option>
                <option>Hữu ích nhất</option>
                <option>Đánh giá cao nhất</option>
                <option>Đánh giá thấp nhất</option>
              </select>
            </div>

            <div className="d-flex flex-column gap-4">
              {filteredReviews.map(review => (
                <div key={review.id} className="bg-white rounded-4 shadow-sm p-4">
                  {/* User Info */}
                  <div className="d-flex align-items-start mb-3">
                    <img
                      src={review.userAvatar}
                      alt={review.userName}
                      className="rounded-circle me-3"
                      style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                    />
                    <div className="flex-grow-1">
                      <div className="d-flex justify-content-between align-items-start">
                        <div>
                          <h6 className="fw-bold mb-1">
                            {review.userName}
                            {review.verified && (
                              <i className="bi bi-patch-check-fill text-ocean-blue ms-2" title="Verified"></i>
                            )}
                          </h6>
                          <div className="d-flex align-items-center mb-1">
                            {renderStars(review.rating)}
                          </div>
                          <small className="text-muted">{review.date}</small>
                        </div>
                        <button className="btn btn-sm btn-outline-secondary">
                          <i className="bi bi-three-dots"></i>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="mb-3">
                    <span className="badge bg-ocean-blue bg-opacity-10 text-ocean-blue">
                      <i className="bi bi-geo-alt me-1"></i>
                      {review.location}
                    </span>
                  </div>

                  {/* Content */}
                  <p className="text-dark mb-3">{review.content}</p>

                  {/* Images */}
                  {review.images.length > 0 && (
                    <div className="mb-3">
                      <div className="row g-2">
                        {review.images.map((img: string, index: number) => (
                          <div key={index} className={`col-${review.images.length === 1 ? '12' : '6'} col-md-${review.images.length === 1 ? '6' : '4'}`}>
                            <img
                              src={img}
                              alt={`Review ${index + 1}`}
                              className="img-fluid rounded-3 w-100 cursor-pointer"
                              style={{ height: '200px', objectFit: 'cover' }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="d-flex align-items-center gap-3 pt-3 border-top">
                    <button className="btn btn-sm btn-outline-ocean-blue">
                      <i className="bi bi-hand-thumbs-up me-1"></i>
                      Hữu ích ({review.helpful})
                    </button>
                    <button className="btn btn-sm btn-outline-secondary">
                      <i className="bi bi-chat me-1"></i>
                      Bình luận
                    </button>
                    <button className="btn btn-sm btn-outline-secondary">
                      <i className="bi bi-share me-1"></i>
                      Chia sẻ
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-4">
              <button className="btn btn-outline-ocean-blue">
                <i className="bi bi-arrow-down-circle me-2"></i>
                Xem Thêm Review
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            {/* Write Review CTA */}
            <div className="bg-gradient-to-br from-ocean-blue to-ocean-dark text-white rounded-4 p-4 mb-4">
              <h5 className="fw-bold mb-3">
                <i className="bi bi-pencil-square me-2"></i>
                Chia Sẻ Trải Nghiệm
              </h5>
              <p className="mb-3">
                Review của bạn sẽ giúp hàng nghìn người khác có những quyết định tốt hơn!
              </p>
              <button 
                className="btn btn-light w-100 fw-semibold"
                onClick={() => setShowReviewModal(true)}
              >
                Viết Review Ngay
              </button>
            </div>

            {/* Top Reviewers */}
            <div className="bg-white rounded-4 shadow-sm p-4">
              <h5 className="fw-bold text-ocean-dark mb-3">
                <i className="bi bi-trophy me-2 text-warning"></i>
                Top Reviewer
              </h5>
              <div className="d-flex flex-column gap-3">
                {topReviewers.map((reviewer, index) => (
                  <div key={index} className="d-flex align-items-center">
                    <div className="position-relative me-3">
                      <img
                        src={reviewer.avatar}
                        alt={reviewer.name}
                        className="rounded-circle"
                        style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                      />
                      <span className={`position-absolute bottom-0 end-0 badge rounded-pill ${
                        reviewer.badge === 'Elite' ? 'bg-warning' : 'bg-ocean-blue'
                      }`} style={{ fontSize: '0.6rem' }}>
                        {reviewer.badge}
                      </span>
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="fw-bold mb-0">{reviewer.name}</h6>
                      {/* <small className="text-muted">
                        {reviewer.reviews} reviews • {reviewer.helpful} helpful
                      </small> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Review Form Modal */}
      {showReviewModal && (
        <div className="modal fade show d-block" tabIndex={-1} style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog modal-lg modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header bg-ocean-blue text-white">
                <h5 className="modal-title">
                  <i className="bi bi-pencil-square me-2"></i>
                  Viết Review Của Bạn
                </h5>
                <button 
                  type="button" 
                  className="btn-close btn-close-white" 
                  onClick={() => setShowReviewModal(false)}
                ></button>
              </div>
              <div className="modal-body p-4">
                <form>
                  {/* Location */}
                  <div className="mb-4">
                    <label className="form-label fw-semibold">Địa điểm</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nhập tên địa điểm bạn đã ghé thăm"
                      value={reviewData.location}
                      onChange={(e) => setReviewData({...reviewData, location: e.target.value})}
                    />
                  </div>

                  {/* Category */}
                  <div className="mb-4">
                    <label className="form-label fw-semibold">Danh mục</label>
                    <select 
                      className="form-select"
                      value={reviewData.category}
                      onChange={(e) => setReviewData({...reviewData, category: e.target.value})}
                    >
                      <option value="">Chọn danh mục</option>
                      <option value="food">Ẩm thực</option>
                      <option value="nature">Thiên nhiên</option>
                      <option value="culture">Văn hóa</option>
                      <option value="checkin">Check-in</option>
                    </select>
                  </div>

                  {/* Rating */}
                  <div className="mb-4">
                    <label className="form-label fw-semibold">Đánh giá</label>
                    <div className="d-flex align-items-center gap-2">
                      {[1,2,3,4,5].map(star => (
                        <i
                          key={star}
                          className={`bi bi-star${star <= reviewData.rating ? '-fill text-warning' : ' text-muted'} fs-4 cursor-pointer`}
                          onClick={() => setReviewData({...reviewData, rating: star})}
                        ></i>
                      ))}
                      <span className="ms-2 text-muted">({reviewData.rating} sao)</span>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="mb-4">
                    <label className="form-label fw-semibold">Tiêu đề review</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Tóm tắt trải nghiệm của bạn"
                      value={reviewData.title}
                      onChange={(e) => setReviewData({...reviewData, title: e.target.value})}
                    />
                  </div>

                  {/* Content */}
                  <div className="mb-4">
                    <label className="form-label fw-semibold">Nội dung chi tiết</label>
                    <textarea
                      className="form-control"
                      rows={5}
                      placeholder="Chia sẻ trải nghiệm chi tiết của bạn..."
                      value={reviewData.content}
                      onChange={(e) => setReviewData({...reviewData, content: e.target.value})}
                    ></textarea>
                  </div>

                  {/* Images URL */}
                  <div className="mb-4">
                    <label className="form-label fw-semibold">Hình ảnh (tùy chọn)</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Dán link hình ảnh (mỗi link một dòng)"
                      onChange={(e) => {
                        const urls = e.target.value.split('\n').filter(url => url.trim());
                        setReviewData({...reviewData, images: urls});
                      }}
                    />
                    <small className="text-muted">Mỗi URL ảnh trên một dòng</small>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={() => setShowReviewModal(false)}
                >
                  Hủy
                </button>
                <button 
                  type="button" 
                  className="btn btn-ocean-blue"
                  onClick={handleSubmitReview}
                  disabled={!reviewData.location || !reviewData.content}
                >
                  <i className="bi bi-send me-2"></i>
                  Đăng Review
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviews;