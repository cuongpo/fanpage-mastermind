import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
const Pricing: React.FC = () => {
  return <section id="pricing" className="py-20 bg-gradient-to-b from-white to-brand-lightPurple">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 title-gradient">Bảng Giá</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Đầu tư hợp lý - Hiệu quả vượt trội
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="rounded-xl shadow-lg overflow-hidden bg-white border-2 border-brand-purple">
            <div className="bg-brand-purple text-white p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">💎 PHÍ KHỞI TẠO</h3>
              <div className="flex items-center justify-center">
                <span className="text-lg line-through opacity-70">3.000.000đ</span>
                <span className="text-4xl font-bold ml-3">3.000.000đ</span>
              </div>
              <p className="mt-2 text-white/80">(một lần duy nhất)</p>
              <div className="bg-white text-brand-orange px-4 py-1 rounded-full inline-block mt-2 font-bold">
                GIẢM 50%
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex">
                  <Check className="h-6 w-6 text-brand-purple mr-2 flex-shrink-0" />
                  <span>Tạo & tối ưu 50 fanpage vệ tinh.</span>
                </li>
                <li className="flex">
                  <Check className="h-6 w-6 text-brand-purple mr-2 flex-shrink-0" />
                  <span>Hướng dẫn sử dụng chi tiết.</span>
                </li>
                <li className="flex">
                  <Check className="h-6 w-6 text-brand-purple mr-2 flex-shrink-0" />
                  <span>Cài đặt hệ thống tự động đăng bài.</span>
                </li>
                <li className="flex">
                  <Check className="h-6 w-6 text-brand-purple mr-2 flex-shrink-0" />
                  <span>Thiết lập SEO Facebook cơ bản.</span>
                </li>
              </ul>
              <Button className="w-full mt-6 btn-primary">ĐĂNG KÝ NGAY</Button>
            </div>
          </div>

          <div className="rounded-xl shadow-lg overflow-hidden bg-white">
            <div className="bg-brand-blue text-white p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">💎 PHÍ DUY TRÌ</h3>
              <div className="flex items-center justify-center">
                <span className="text-4xl font-bold">500.000đ</span>
                <span className="text-lg ml-2">/tháng</span>
              </div>
              <p className="mt-2 text-white/80">Thanh toán hàng tháng</p>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex">
                  <Check className="h-6 w-6 text-brand-blue mr-2 flex-shrink-0" />
                  <span>Đảm bảo fanpage hoạt động 24/7.</span>
                </li>
                <li className="flex">
                  <Check className="h-6 w-6 text-brand-blue mr-2 flex-shrink-0" />
                  <span>Hỗ trợ kỹ thuật nhanh chóng.</span>
                </li>
                <li className="flex">
                  <Check className="h-6 w-6 text-brand-blue mr-2 flex-shrink-0" />
                  <span>Cập nhật công nghệ mới nhất.</span>
                </li>
                <li className="flex">
                  <Check className="h-6 w-6 text-brand-blue mr-2 flex-shrink-0" />
                  <span>Báo cáo hiệu quả chi tiết hàng tuần.</span>
                </li>
              </ul>
              <div className="w-full mt-6 bg-gray-100 p-4 rounded-lg text-center">
                <p className="text-gray-700">Bắt đầu sau khi thiết lập hệ thống hoàn tất</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto mt-8 border-l-4 border-brand-orange">
          <p className="text-lg font-bold">Ưu đãi đặc biệt:</p>
          <p className="text-xl">Giảm 50% phí khởi tạo cho 100 khách hàng đầu tiên!</p>
        </div>
      </div>
    </section>;
};
export default Pricing;