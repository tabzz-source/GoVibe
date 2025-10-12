import React from 'react';

const About: React.FC = () => {
  const features = [
    {
      icon: 'bi-compass',
      title: 'Khám Phá Dễ Dàng',
      description: 'Tìm kiếm và khám phá các địa điểm du lịch, ẩm thực một cách nhanh chóng và tiện lợi.'
    },
    {
      icon: 'bi-heart',
      title: 'Gợi Ý Cá Nhân',
      description: 'Nhận những gợi ý phù hợp với sở thích và nhu cầu của riêng bạn.'
    },
    {
      icon: 'bi-people',
      title: 'Cộng Đồng Review',
      description: 'Chia sẻ và đọc review chân thực từ cộng đồng du lịch Việt Nam.'
    },
    {
      icon: 'bi-star',
      title: 'Chất Lượng Đảm Bảo',
      description: 'Tất cả địa điểm đều được kiểm duyệt và đánh giá kỹ lưỡng.'
    }
  ];

  const stats = [
    { number: '1000+', label: 'Địa Điểm' },
    { number: '50+', label: 'Tỉnh Thành' },
    { number: '10K+', label: 'Review' },
    { number: '25K+', label: 'Người Dùng' }
  ];


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="text-white py-5 d-flex align-items-center" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #3b82f6 100%)' , minHeight: '60vh'   }}>
        <div className="container">
          <div className="row align-items-center text-center">
         
              <h1 className="display-5 fw-bold mb-4">
                Govibe - Cảm nhận không khí địa phương
              </h1>
              <p className="lead mb-4">
                Nền tảng khám phá và gợi ý địa điểm ẩm thực, giải trí được cá nhân hóa theo sở thích người dùng
              </p>
             
            
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            {stats.map((stat, index) => (
              <div key={index} className="col-lg-3 col-md-6 text-center">
                <div className="bg-white rounded-4 p-4 shadow-sm h-100">
                  <h2 className="display-4 fw-bold text-ocean-blue mb-2">{stat.number}</h2>
                  <p className="text-muted fw-semibold mb-0">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Project Idea */}
      <div className="container py-5">
        <div className="row mb-3">
          <div className="col-12 text-center">
            <h2 className="fw-bold text-ocean-dark mb-3">Ý tưởng dự án</h2>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-9 px-3">
              <p className="text-muted mb-4 lead-custom">
                Trong bối cảnh xã hội hiện đại, việc tìm kiếm địa điểm ẩm thực và giải trí phù hợp với
                sở thích cá nhân ngày càng trở nên quan trọng. Govibe ra đời với mục tiêu giải quyết vấn đề này.
              </p>

              <p className="text-muted mb-4 lead-custom">
                Thay vì phải tìm kiếm trên nhiều nguồn khác nhau, người dùng chỉ cần truy cập Govibe để nhận
                được những gợi ý được cá nhân hóa dựa trên sở thích, vị trí, và ngân sách của họ.
              </p>

              <p className="text-muted mb-4 lead-custom">
                Chúng tôi không chỉ cung cấp thông tin về địa điểm, mà còn kết hợp các combo "Ăn + Chơi" để
                tạo ra trải nghiệm trọn vẹn cho người dùng trong một ngày.
              </p>
            
          </div>
        </div>
      </div>
  




      {/* Values Section
      <div className="bg-ocean-blue text-white py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="fw-bold mb-3">Giá Trị Cốt Lõi</h2>
              <p className="lead opacity-90">
                Những nguyên tắc định hướng mọi hoạt động của chúng tôi
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-4 text-center">
              <i className="bi bi-shield-check display-4 mb-3"></i>
              <h4 className="fw-bold mb-3">Chân Thực</h4>
              <p className="opacity-90">
                Chúng tôi cam kết mang đến thông tin chính xác, review trung thực từ cộng đồng.
              </p>
            </div>
            <div className="col-lg-4 text-center">
              <i className="bi bi-heart display-4 mb-3"></i>
              <h4 className="fw-bold mb-3">Tình Yêu Quê Hương</h4>
              <p className="opacity-90">
                Mỗi gợi ý đều xuất phát từ tình yêu sâu sắc với văn hóa và con người Việt Nam.
              </p>
            </div>
            <div className="col-lg-4 text-center">
              <i className="bi bi-people display-4 mb-3"></i>
              <h4 className="fw-bold mb-3">Cộng Đồng</h4>
              <p className="opacity-90">
                Xây dựng cộng đồng du lịch tích cực, chia sẻ và hỗ trợ lẫn nhau.
              </p>
            </div>
          </div>
        </div>
      </div> */}

      {/* Values Section */}
      <div className="bg-ocean-blue text-white py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="fw-bold mb-3">Giá trị cốt lõi</h2>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="value-card d-flex align-items-start p-4 rounded-3 border">
                <div className="icon-box me-4">
                  <i className="bi bi-bullseye"></i>
                </div>
                <div>
                  <h5 className="fw-bold mb-2">Mục tiêu</h5>
                  <p className="opacity-90">
                    Giúp người dùng tìm kiếm và khám phá địa điểm ẩm thực, giải trí nhanh chóng và cá nhân hóa.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="value-card d-flex align-items-start p-4 rounded-3 border">
                <div className="icon-box me-4">
                  <i className="bi bi-people"></i>
                </div>
                <div>
                  <h5 className="fw-bold mb-2">Cộng đồng</h5>
                  <p className="opacity-90">
                    Kết nối cộng đồng yêu thích khám phá văn hóa ẩm thực và giải trí địa phương.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="value-card d-flex align-items-start p-4 rounded-3 border">
                <div className="icon-box me-4">
                  <i className="bi bi-heart"></i>
                </div>
                <div>
                  <h5 className="fw-bold mb-2">Trải nghiệm</h5>
                  <p className="opacity-90">
                    Mang đến những trải nghiệm độc đáo, phù hợp với sở thích cá nhân.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="value-card d-flex align-items-start p-4 rounded-3 border">
                <div className="icon-box me-4">
                  <i className="bi bi-graph-up"></i>
                </div>
                <div>
                  <h5 className="fw-bold mb-2">Phát triển</h5>
                  <p className="opacity-90">
                    Liên tục cập nhật và mở rộng cơ sở dữ liệu địa điểm trên toàn quốc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Mission Section */}
      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="fw-bold text-ocean-dark mb-3">Sứ Mệnh Của Chúng Tôi</h2>
            <p className="text-muted lead">
              GoVibe tin rằng mỗi địa điểm đều có câu chuyện riêng và mỗi trải nghiệm đều đáng được ghi nhớ.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="text-center h-100">
                <div className="bg-ocean-light text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                     style={{ width: '80px', height: '80px' }}>
                  <i className={`${feature.icon}`} style={{ fontSize: '2rem' }}></i>
                </div>
                <h4 className="fw-bold text-ocean-dark mb-3">{feature.title}</h4>
                <p className="text-muted">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default About;