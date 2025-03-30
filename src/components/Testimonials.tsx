
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

const TestimonialCard: React.FC<{
  quote: string;
  name: string;
  role: string;
  avatarSrc?: string;
}> = ({ quote, name, role, avatarSrc }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <Quote className="h-8 w-8 text-brand-purple opacity-20 mb-4" />
      <blockquote className="text-lg mb-6">{quote}</blockquote>
      <div className="flex items-center">
        <Avatar className="h-12 w-12 mr-4">
          <AvatarImage src={avatarSrc} />
          <AvatarFallback className="bg-brand-purple text-white">
            {name.split(' ').map(part => part[0]).join('')}
          </AvatarFallback>
        </Avatar>
        <div>
          <div className="font-bold">{name}</div>
          <div className="text-sm text-gray-600">{role}</div>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 title-gradient">Đánh Giá Từ Khách Hàng</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Khách hàng của chúng tôi đã đạt được kết quả đáng kinh ngạc
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <TestimonialCard
            quote="Từ ngày dùng Nuôi Fanpage, lượng truy cập website tăng gấp 4 lần. Đáng đồng tiền!"
            name="Anh Tuấn"
            role="Chủ shop thời trang"
          />
          
          <TestimonialCard
            quote="Dịch vụ chất lượng, fanpage lên top bền vững. Phí duy trì rất hợp lý so với hiệu quả."
            name="Chị Hương"
            role="CEO Agency Digital Marketing"
          />
          
          <TestimonialCard
            quote="Tiết kiệm được chi phí thuê 2 nhân sự làm content. Giờ tôi chỉ cần 1 người quản lý hệ thống là đủ."
            name="Anh Minh"
            role="Giám đốc công ty mỹ phẩm"
          />
          
          <TestimonialCard
            quote="Ban đầu hoài nghi nhưng kết quả thật đáng kinh ngạc. Doanh thu tăng 35% sau 2 tháng sử dụng."
            name="Chị Linh"
            role="Chủ cửa hàng mỹ phẩm online"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
