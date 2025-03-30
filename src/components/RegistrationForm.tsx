
import React from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from '@/components/ui/input';
import { useToast } from "@/hooks/use-toast";
import { saveRegistration } from '@/lib/supabase';

// Define schema for form validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Tên phải có ít nhất 2 ký tự" }),
  phone: z.string().min(10, { message: "Số điện thoại không hợp lệ" }),
  company: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface RegistrationFormProps {
  onSuccess?: () => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSuccess }) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      company: "",
    },
  });

  async function onSubmit(data: FormData) {
    try {
      setIsSubmitting(true);
      
      // Call Supabase to save the registration
      const result = await saveRegistration(data);
      
      if (!result.success) {
        throw new Error('Failed to save registration');
      }
      
      toast({
        title: "Đăng ký thành công!",
        description: "Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",
      });
      
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        variant: "destructive",
        title: "Đã có lỗi xảy ra",
        description: "Vui lòng thử lại sau",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Họ và tên</FormLabel>
              <FormControl>
                <Input placeholder="Nguyễn Văn A" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Số điện thoại</FormLabel>
              <FormControl>
                <Input placeholder="0988xxxxxx" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tên công ty (nếu có)</FormLabel>
              <FormControl>
                <Input placeholder="Công ty ABC" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button 
          type="submit" 
          className="w-full btn-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Đang gửi..." : "Gửi thông tin"}
        </Button>
      </form>
    </Form>
  );
};

export default RegistrationForm;
