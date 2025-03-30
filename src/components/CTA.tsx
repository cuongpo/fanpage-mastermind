import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-brand-purple to-brand-blue text-white">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          ĐỪNG BỎ LỠ 2 TỶ NGƯỜI DÙNG FACEBOOK!
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Hãy để chúng tôi giúp bạn tiếp cận hàng triệu khách hàng tiềm năng và đưa thương hiệu của bạn lên một tầm cao mới
        </p>
        <a href="https://m.me/your.facebook.page" target="_blank" rel="noopener noreferrer">
          <Button className="bg-brand-orange hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg group">
            LIÊN HỆ NGAY – NHẬN ƯU ĐÃI 50% PHÍ KHỞI TẠO
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </a>
      </div>
    </section>
  );
};

export default CTA;
