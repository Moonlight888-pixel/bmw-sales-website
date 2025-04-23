
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface Car {
  id: number;
  model: string;
  year: number;
  price: string;
  image: string;
  features: string[];
}

interface CarCardProps {
  car: Car;
}

export const CarCard = ({ car }: CarCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <img 
          src={car.image} 
          alt={car.model} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-5">
        <h3 className="text-xl font-bold mb-2">{car.model}</h3>
        <p className="text-gray-500 mb-3">{car.year} год</p>
        <div className="mb-3">
          <ul className="text-sm text-gray-600">
            {car.features.map((feature, index) => (
              <li key={index} className="mb-1">• {feature}</li>
            ))}
          </ul>
        </div>
        <p className="text-2xl font-bold text-blue-900">{car.price}</p>
      </CardContent>
      <CardFooter className="bg-gray-50 p-5">
        <div className="flex space-x-2 w-full">
          <Button className="flex-1 bg-blue-900 hover:bg-blue-800">
            Подробнее
          </Button>
          <Button variant="outline" className="flex-1 border-blue-900 text-blue-900 hover:bg-blue-50">
            Тест-драйв
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
