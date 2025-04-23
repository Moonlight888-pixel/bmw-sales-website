
import { Button } from "@/components/ui/button";

export const BMWHeader = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="font-bold text-3xl text-blue-900">BMW</div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-900 font-medium">Модельный ряд</a>
            <a href="#" className="text-gray-700 hover:text-blue-900 font-medium">Автомобили в наличии</a>
            <a href="#" className="text-gray-700 hover:text-blue-900 font-medium">Спецпредложения</a>
            <a href="#" className="text-gray-700 hover:text-blue-900 font-medium">Сервис</a>
            <a href="#" className="text-gray-700 hover:text-blue-900 font-medium">Контакты</a>
          </nav>
          
          <div className="flex items-center">
            <Button className="bg-blue-900 hover:bg-blue-800">
              Заказать звонок
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
