
import React from 'react';
import { Clock, Search, ExternalLink, BrainCircuit, BarChart } from 'lucide-react';

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="feature-card">
      <div className="text-brand-purple mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-brand-lightPurple">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 title-gradient">Tính Năng Nổi Bật</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Giải pháp toàn diện giúp bạn phát triển thương hiệu trên Facebook một cách tự động và hiệu quả
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Clock className="h-12 w-12" />}
            title="✅ Tự động đăng bài lên 50 fanpage"
            description="Lên lịch bài viết 1 lần, hệ thống tự động đăng tải đồng loạt. Không cần động tay!"
          />
          
          <FeatureCard
            icon={<Search className="h-12 w-12" />}
            title="✅ SEO Facebook &quot;đỉnh cao&quot;"
            description="Tối ưu nội dung chuẩn thuật toán, giúp fanpage của bạn xuất hiện đầu tiên khi người dùng tìm kiếm."
          />
          
          <FeatureCard
            icon={<ExternalLink className="h-12 w-12" />}
            title="✅ Dẫn traffic về website/fanpage chính"
            description="Chèn link tự động, điều hướng người dùng quan tâm về điểm đến bạn muốn."
          />
          
          <FeatureCard
            icon={<BrainCircuit className="h-12 w-12" />}
            title="✅ Quản lý nội dung thông minh"
            description="Công cụ AI đề xuất nội dung &quot;hot trend&quot;, tăng tương tác tự nhiên."
          />
          
          <FeatureCard
            icon={<BarChart className="h-12 w-12" />}
            title="✅ Báo cáo chi tiết 24/7"
            description="Theo dõi traffic, tỷ lệ chuyển đổi, và hiệu suất từng fanpage qua dashboard."
          />
          
          <div className="feature-card bg-gradient-to-r from-brand-purple to-brand-blue text-white">
            <h3 className="text-xl font-bold mb-4">Lý Do Chọn Nuôi Fanpage?</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">✨</span>
                <span>Uy tín 5 năm – 500+ khách hàng từ startup đến doanh nghiệp.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✨</span>
                <span>Tiết kiệm 90% thời gian – Không cần thuê nhân sự đăng bài, quản lý.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✨</span>
                <span>An toàn tuyệt đối – Tuân thủ chính sách Facebook, không spam, không ban acc.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✨</span>
                <span>Cam kết hiệu quả – Tăng 300% traffic sau 30 ngày hoặc hoàn tiền!</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
