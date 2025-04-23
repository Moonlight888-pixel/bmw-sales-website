
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BMWHeader } from "@/components/BMWHeader";
import { CarCard } from "@/components/CarCard";
import { ContactForm } from "@/components/ContactForm";
import { Link } from "react-router-dom";

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

  const testimonials = [
    {
      id: 1,
      name: "Алексей Смирнов",
      photo: "/placeholder.svg",
      car: "BMW X5",
      text: "Отличный автосалон! Приобрел здесь BMW X5 и очень доволен как самим автомобилем, так и обслуживанием. Менеджеры знают свое дело и помогли подобрать идеальную комплектацию под мои нужды."
    },
    {
      id: 2,
      name: "Елена Петрова",
      photo: "/placeholder.svg",
      car: "BMW 3 серии",
      text: "Покупала BMW 3 серии. Порадовало внимательное отношение персонала и отсутствие навязчивого сервиса. Все этапы покупки прошли гладко и без задержек. Рекомендую этот дилерский центр!"
    },
    {
      id: 3,
      name: "Дмитрий Иванов",
      photo: "/placeholder.svg",
      car: "BMW X3",
      text: "Профессиональный подход и высокий уровень сервиса. Оформление документов заняло минимум времени. Автомобиль доставили точно в срок. Сервисное обслуживание также на высоте."
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
            <Link to="/catalog">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-100">
                Смотреть автомобили в наличии
              </Button>
            </Link>
          </div>
        </section>

        {/* Преимущества */}
        <section className="py-16 bg-white">
          <div className="container px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Наши преимущества</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-4 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-900">
                      <circle cx="8" cy="21" r="2" /><circle cx="20" cy="21" r="2" />
                      <path d="M5.67 6H23l-1.68 8.39a2 2 0 0 1-2 1.61H8.75a2 2 0 0 1-2-1.74L5.23 2.74A2 2 0 0 0 3.25 1H1" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">Большой выбор автомобилей</h3>
                <p className="text-gray-600">Более 200 новых автомобилей BMW различных моделей и комплектаций в наличии</p>
              </Card>
              
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-4 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-900">
                      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">Привлекательные условия</h3>
                <p className="text-gray-600">Специальные предложения, кредитные программы и программы trade-in</p>
              </Card>
              
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-4 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-900">
                      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
                      <rect width="18" height="18" x="3" y="4" rx="2" />
                      <circle cx="12" cy="10" r="2" />
                      <line x1="8" x2="8" y1="2" y2="4" />
                      <line x1="16" x2="16" y1="2" y2="4" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">Профессиональный сервис</h3>
                <p className="text-gray-600">Сертифицированные специалисты с многолетним опытом работы и современное оборудование</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Популярные модели */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4">
            <h2 className="text-3xl font-bold mb-4 text-center">Популярные модели</h2>
            <p className="text-center text-gray-600 mb-10">Выберите свой идеальный BMW из нашей коллекции премиальных автомобилей</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularModels.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link to="/catalog">
                <Button size="lg" className="bg-blue-900 hover:bg-blue-800">
                  Смотреть все автомобили
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Отзывы клиентов */}
        <section className="py-16 bg-white">
          <div className="container px-4">
            <h2 className="text-3xl font-bold mb-4 text-center">Отзывы наших клиентов</h2>
            <p className="text-center text-gray-600 mb-10">Более 1000 довольных клиентов выбрали нас</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="p-6">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.photo} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500">{testimonial.car}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">"{testimonial.text}"</p>
                    <div className="mt-4 flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-500">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Форма связи */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4">
            <h2 className="text-3xl font-bold mb-4 text-center">Связаться с нами</h2>
            <p className="text-center text-gray-600 mb-10">Оставьте заявку, и наш менеджер свяжется с вами в ближайшее время</p>
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
