
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BMWHeader } from "@/components/BMWHeader";
import { CarCard } from "@/components/CarCard";
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  const popularModels = [
    {
      id: 1,
      model: "BMW X5",
      year: 2023,
      price: "5 990 000 ₽",
      image: "/placeholder.svg",
      features: ["3.0 л / 249 л.с.", "Полный привод", "Дизель"]
    },
    {
      id: 2,
      model: "BMW 5 серии",
      year: 2023,
      price: "4 850 000 ₽",
      image: "/placeholder.svg",
      features: ["2.0 л / 190 л.с.", "Задний привод", "Бензин"]
    },
    {
      id: 3,
      model: "BMW X7",
      year: 2023,
      price: "7 790 000 ₽",
      image: "/placeholder.svg",
      features: ["3.0 л / 340 л.с.", "Полный привод", "Бензин"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <BMWHeader />
      
      <main className="flex-1">
        {/* Главный баннер */}
        <section className="relative h-[500px] flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700 text-white">
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-30" />
          <div className="container relative z-10 text-center px-4">
            <h1 className="text-5xl font-bold mb-4">Официальный дилер BMW в России</h1>
            <p className="text-xl mb-8">Испытайте непревзойденное удовольствие от вождения</p>
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-100">
              Смотреть автомобили в наличии
            </Button>
          </div>
        </section>

        {/* Популярные модели */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Популярные модели</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularModels.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </div>
        </section>

        {/* Форма связи */}
        <section className="py-16 bg-white">
          <div className="container px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Связаться с нами</h2>
            <div className="max-w-xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-900 text-white py-10">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-xl font-bold mb-4">О компании</h3>
              <p>Официальный дилер BMW в России с 2005 года. Полный спектр услуг по продаже и обслуживанию автомобилей BMW.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Контакты</h3>
              <p>Москва, ул. Автомобильная, 1</p>
              <p>Тел: +7 (495) 123-45-67</p>
              <p>Email: info@bmw-dealer.ru</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Режим работы</h3>
              <p>Пн-Пт: 9:00 - 21:00</p>
              <p>Сб-Вс: 10:00 - 20:00</p>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-blue-800 text-center">
            <p>© 2023 BMW Россия. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
