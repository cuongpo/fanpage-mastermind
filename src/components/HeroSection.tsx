import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-24 pb-16 bg-hero-pattern text-white min-h-[90vh] flex items-center">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 mb-10 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
              🔥 THỐNG TRỊ FACEBOOK VỚI 50 FANPAGE VỆ TINH TỰ ĐỘNG ĐĂNG BÀI!
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Đẩy Traffic, SEO Top Facebook, Dẫn Lượt Về Website & Fanpage Chính – Tăng phủ sóng thương hiệu, đứng đầu tìm kiếm, và biến người dùng thành khách hàng. Không tốn công sức!
            </p>

            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex">
              <a href="https://zalo.me/0988499006" target="_blank" rel="noopener noreferrer">
                <Button className="w-full md:w-auto btn-primary group">
                  ĐĂNG KÝ NGAY – GIẢM 50% PHÍ KHỞI TẠO!
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#features">
                <Button variant="outline" className="w-full md:w-auto bg-white text-brand-purple hover:bg-gray-100">
                  Tìm Hiểu Thêm
                </Button>
              </a>
            </div>

            <div className="mt-8 bg-white/20 backdrop-blur-sm p-4 rounded-lg">
              <p className="text-base">
                Mệt mỏi vì đăng bài thủ công và tăng trưởng ì ạch? Để <strong>Trùm Social</strong> xử lý giúp bạn! Chúng tôi tự động hóa 50 fanpage vệ tinh để khuếch đại nội dung, đưa bạn lên TOP tìm kiếm Facebook, và dẫn dắt traffic thẳng về website/fanpage chính.
              </p>
            </div>
          </div>
          <div className="md:w-2/5 flex justify-center">
            <div className="w-full max-w-md p-4 bg-white rounded-xl shadow-2xl relative animate-float">
              <div className="absolute -top-4 -right-4 bg-brand-orange text-white text-sm font-bold px-4 py-1 rounded-full">
                GIẢM 50%
              </div>
              <div className="p-6 border-2 border-dashed border-brand-purple rounded-lg">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-brand-purple mb-2">Thống kê nhanh</h3>
                  <div className="flex justify-between mb-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-blue">300%</div>
                      <div className="text-sm text-gray-600">Tăng Traffic</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-blue">90%</div>
                      <div className="text-sm text-gray-600">Tiết kiệm thời gian</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-blue">50</div>
                      <div className="text-sm text-gray-600">Fanpage vệ tinh</div>
                    </div>
                  </div>
                  <a href="https://zalo.me/0988499006" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full btn-primary">LIÊN HỆ NGAY QUA ZALO</Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
