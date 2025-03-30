
import React from 'react';
import { Facebook, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-darkPurple text-white pt-16 pb-6">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Facebook className="h-8 w-8 text-brand-blue mr-2" />
              <span className="text-2xl font-bold">Nuôi Fanpage</span>
            </div>
            <p className="mb-4 text-gray-300">
              Giải pháp toàn diện giúp bạn phát triển thương hiệu trên Facebook một cách tự động và hiệu quả
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-brand-purple p-2 rounded-full hover:bg-opacity-80 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Liên Kết Nhanh</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Tính Năng</a></li>
              <li><a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">Cách Thức Hoạt Động</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Bảng Giá</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Liên Hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0 mt-1" />
                <span>090x.xxx.xxx (Zalo/Tele)</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0 mt-1" />
                <span>contact@nuoifanpage.vn</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0 mt-1" />
                <span>Tầng 8, Tòa nhà ABX, Quận 1, TP. Hồ Chí Minh</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 mt-6 text-center text-gray-400 text-sm">
          <p>© 2024 Nuôi Fanpage. Facebook™ là thương hiệu của Meta Platforms, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
