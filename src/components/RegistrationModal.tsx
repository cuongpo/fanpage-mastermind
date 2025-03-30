
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import RegistrationForm from './RegistrationForm';

interface RegistrationModalProps {
  trigger: React.ReactNode;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ trigger }) => {
  const [open, setOpen] = React.useState(false);

  const handleSuccess = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-brand-purple">Đăng ký tư vấn</DialogTitle>
          <DialogDescription>
            Điền thông tin dưới đây để nhận tư vấn và ưu đãi 50% phí khởi tạo
          </DialogDescription>
        </DialogHeader>
        <RegistrationForm onSuccess={handleSuccess} />
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationModal;
