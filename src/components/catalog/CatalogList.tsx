
import { useState } from "react";
import { CarCard } from "@/components/CarCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Car } from "@/data/carData";

interface CatalogListProps {
  cars: Car[];
}

export const CatalogList = ({ cars }: CatalogListProps) => {
  const [sortOption, setSortOption] = useState("price-asc");

  const handleSortChange = (value: string) => {
    setSortOption(value);
    // В реальном приложении здесь была бы логика сортировки
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>Найдено: {cars.length} автомобилей</div>
        <Select 
          defaultValue="price-asc" 
          onValueChange={handleSortChange}
        >
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
  );
};
