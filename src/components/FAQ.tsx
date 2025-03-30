
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 bg-brand-lightPurple">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 title-gradient">Câu Hỏi Thường Gặp</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Giải đáp những thắc mắc phổ biến về dịch vụ của chúng tôi
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                Tạo 50 fanpage có sợ bị Facebook khóa không?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                Chúng tôi thiết lập fanpage chuẩn Meta, đăng bài tự nhiên, không spam. Bảo hành 1 đổi 1 nếu lỗi hệ thống.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                Tôi có thể chọn nội dung đăng lên fanpage không?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                Có! Bạn upload nội dung, hoặc để AI của chúng tôi tự động tạo bài viết tối ưu.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                Khi nào thấy kết quả?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                Traffic tăng sau 2 tuần. SEO Facebook cần 4-8 tuần để lên top.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                Làm thế nào để theo dõi hiệu quả của hệ thống?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                Bạn sẽ được cấp quyền truy cập vào dashboard riêng, nơi bạn có thể theo dõi traffic, tương tác, và hiệu suất từng fanpage vệ tinh theo thời gian thực.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                Tôi cần chuẩn bị gì khi sử dụng dịch vụ?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                Bạn chỉ cần cung cấp thông tin về thương hiệu, sản phẩm/dịch vụ và fanpage chính. Chúng tôi sẽ lo phần còn lại!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
