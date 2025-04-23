
import { Button } from "@/components/ui/button";
import { CarCard } from "@/components/CarCard";
import { Link } from "react-router-dom";
import { popularModelsData } from "@/data/carData";

const PopularModelsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Популярные модели</h2>
        <p className="text-center text-gray-600 mb-10">
          Выберите свой идеальный BMW из нашей коллекции премиальных автомобилей
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularModelsData.map((car) => (
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
  );
};

export default PopularModelsSection;
