
import { useState } from "react";
import { BMWHeader } from "@/components/BMWHeader";
import { CarCard } from "@/components/CarCard";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Catalog = () => {
  const [priceRange, setPriceRange] = useState<number[]>([4000000, 8000000]);
  
  const cars = [
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
    },
    {
      id: 4,
      model: "BMW 3 серии",
      year: 2023,
      price: "3 890 000 ₽",
      image: "/placeholder.svg",
      features: ["2.0 л / 184 л.с.", "Задний привод", "Бензин"]
    },
    {
      id: 5,
      model: "BMW X3",
      year: 2023,
      price: "4 590 000 ₽",
      image: "/placeholder.svg",
      features: ["2.0 л / 190 л.с.", "Полный привод", "Дизель"]
    },
    {
      id: 6,
      model: "BMW 7 серии",
      year: 2023,
      price: "9 990 000 ₽",
      image: "/placeholder.svg",
      features: ["3.0 л / 320 л.с.", "Полный привод", "Бензин"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <BMWHeader />
      
      <main className="flex-1 py-10">
        <div className="container px-4">
          <h1 className="text-3xl font-bold mb-8">Каталог автомобилей BMW</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Фильтры */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-bold mb-6">Фильтры</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-4">Модель</h3>
                    <div className="space-y-3">
                      {["1 серия", "3 серия", "5 серия", "7 серия", "X3", "X5", "X7"].map((model) => (
                        <div key={model} className="flex items-center space-x-2">
                          <Checkbox id={`model-${model}`} />
                          <Label htmlFor={`model-${model}`}>{model}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-4">Цена, ₽</h3>
                    <div className="space-y-4">
                      <Slider 
                        defaultValue={[4000000, 8000000]} 
                        max={15000000} 
                        min={1000000} 
                        step={100000}
                        onValueChange={(value) => setPriceRange(value)}
                      />
                      <div className="flex justify-between text-sm">
                        <span>{(priceRange[0] / 1000000).toFixed(1)} млн</span>
                        <span>{(priceRange[1] / 1000000).toFixed(1)} млн</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-4">Год выпуска</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Label htmlFor="year-from">От</Label>
                        <Select defaultValue="2020">
                          <SelectTrigger id="year-from">
                            <SelectValue placeholder="От" />
                          </SelectTrigger>
                          <SelectContent>
                            {[2018, 2019, 2020, 2021, 2022, 2023].map((year) => (
                              <SelectItem key={year} value={year.toString()}>
                                {year}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="year-to">До</Label>
                        <Select defaultValue="2023">
                          <SelectTrigger id="year-to">
                            <SelectValue placeholder="До" />
                          </SelectTrigger>
                          <SelectContent>
                            {[2018, 2019, 2020, 2021, 2022, 2023].map((year) => (
                              <SelectItem key={year} value={year.toString()}>
                                {year}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-4">Тип двигателя</h3>
                    <div className="space-y-3">
                      {["Бензин", "Дизель", "Гибрид", "Электро"].map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                          <Checkbox id={`engine-${type}`} />
                          <Label htmlFor={`engine-${type}`}>{type}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-4">Привод</h3>
                    <div className="space-y-3">
                      {["Полный", "Задний", "Передний"].map((drive) => (
                        <div key={drive} className="flex items-center space-x-2">
                          <Checkbox id={`drive-${drive}`} />
                          <Label htmlFor={`drive-${drive}`}>{drive}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-blue-900 hover:bg-blue-800">
                    Применить фильтры
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Список автомобилей */}
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-6">
                <div>Найдено: {cars.length} автомобилей</div>
                <Select defaultValue="price-asc">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Сортировка" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price-asc">Сначала дешевле</SelectItem>
                    <SelectItem value="price-desc">Сначала дороже</SelectItem>
                    <SelectItem value="year-desc">Сначала новее</SelectItem>
                    <SelectItem value="year-asc">Сначала старше</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {cars.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
              
              <div className="mt-10 flex justify-center">
                <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-50">
                  Показать еще
                </Button>
              </div>
            </div>
          </div>
        </div>
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

export default Catalog;
