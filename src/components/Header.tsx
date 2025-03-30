
import React from 'react';
import { Button } from '@/components/ui/button';
import { Facebook } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 px-4 md:px-8 bg-white shadow-sm fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Facebook className="h-8 w-8 text-brand-blue mr-2" />
          <span className="text-2xl font-bold text-brand-purple">Trùm Social</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-gray-700 hover:text-brand-purple transition-colors">Tính Năng</a>
          <a href="#how-it-works" className="text-gray-700 hover:text-brand-purple transition-colors">Cách Thức</a>
          <a href="#pricing" className="text-gray-700 hover:text-brand-purple transition-colors">Bảng Giá</a>
          <a href="#faq" className="text-gray-700 hover:text-brand-purple transition-colors">FAQ</a>
          <Button className="btn-primary ml-4">Đăng Ký Ngay</Button>
        </nav>
        <Button className="md:hidden bg-brand-orange hover:bg-orange-600 text-white">
          Menu
        </Button>
      </div>
    </header>
  );
};

export default Header;
