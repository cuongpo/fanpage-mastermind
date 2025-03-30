import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-brand-purple text-white">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Sẵn sàng để thống trị Facebook?
        </h2>
        <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
          Đừng để đối thủ bỏ xa! Hãy bắt đầu ngay hôm nay với ưu đãi giảm 50% phí khởi tạo.
        </p>
        <a href="https://zalo.me/0988499006" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="btn-primary group">
            ĐĂNG KÝ NGAY QUA ZALO
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </a>
      </div>
    </section>
  );
};

export default CTA;
