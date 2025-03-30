
import React from 'react';
import { CreditCard, Settings, Rocket } from 'lucide-react';

const StepCard: React.FC<{
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ number, icon, title, description }) => {
  return (
    <div className="relative">
      <div className="feature-card text-center h-full flex flex-col">
        <div className="bg-brand-purple text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4">
          {number}
        </div>
        <div className="text-brand-purple mx-auto mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      {number !== "3️⃣" && (
        <div className="hidden md:block absolute top-1/4 -right-5 w-10 h-10 text-2xl text-brand-purple">
          →
        </div>
      )}
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 title-gradient">Cách Thức Hoạt Động</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Chỉ 3 bước đơn giản để bắt đầu tận hưởng lợi ích từ hệ thống fanpage vệ tinh tự động
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
          <StepCard
            number="1️⃣"
            icon={<CreditCard className="h-12 w-12" />}
            title="Đăng ký & Thanh toán"
            description="Chọn gói dịch vụ và đóng phí khởi tạo 3.000.000đ (hiện đang giảm 50%)."
          />
          
          <StepCard
            number="2️⃣"
            icon={<Settings className="h-12 w-12" />}
            title="Thiết lập hệ thống"
            description="Chúng tôi tạo 50 fanpage vệ tinh (hoặc kết nối fanpage có sẵn của bạn) + cài đặt tự động đăng bài."
          />
          
          <StepCard
            number="3️⃣"
            icon={<Rocket className="h-12 w-12" />}
            title="Tận hưởng kết quả"
            description="Chỉ 500.000đ phí duy trì hàng tháng để hệ thống vận hành mượt mà, đưa thương hiệu của bạn lên TOP!"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
