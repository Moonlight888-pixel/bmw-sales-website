
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

export const ContactForm = () => {
  return (
    <Card className="p-6">
      <form className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Ваше имя
          </label>
          <Input
            id="name"
            placeholder="Введите ваше имя"
            required
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Номер телефона
          </label>
          <Input
            id="phone"
            type="tel"
            placeholder="+7 (___) ___-__-__"
            required
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            E-mail
          </label>
          <Input
            id="email"
            type="email"
            placeholder="example@mail.ru"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium">
            Сообщение
          </label>
          <Textarea
            id="message"
            placeholder="Напишите ваш вопрос..."
            rows={4}
          />
        </div>
        
        <div className="pt-2">
          <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800">
            Отправить заявку
          </Button>
        </div>
        
        <p className="text-xs text-gray-500 text-center">
          Нажимая кнопку «Отправить заявку», вы соглашаетесь с политикой конфиденциальности и обработкой персональных данных
        </p>
      </form>
    </Card>
  );
};
