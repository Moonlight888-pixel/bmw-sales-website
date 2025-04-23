
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface CatalogFiltersProps {
  onApplyFilters: () => void;
}

export const CatalogFilters = ({ onApplyFilters }: CatalogFiltersProps) => {
  const [priceRange, setPriceRange] = useState<number[]>([4000000, 8000000]);

  const modelOptions = ["1 серия", "3 серия", "5 серия", "7 серия", "X3", "X5", "X7"];
  const engineTypes = ["Бензин", "Дизель", "Гибрид", "Электро"];
  const driveTypes = ["Полный", "Задний", "Передний"];
  const yearOptions = [2018, 2019, 2020, 2021, 2022, 2023];

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-6">Фильтры</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="font-medium mb-4">Модель</h3>
          <div className="space-y-3">
            {modelOptions.map((model) => (
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
                  {yearOptions.map((year) => (
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
                  {yearOptions.map((year) => (
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
            {engineTypes.map((type) => (
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
            {driveTypes.map((drive) => (
              <div key={drive} className="flex items-center space-x-2">
                <Checkbox id={`drive-${drive}`} />
                <Label htmlFor={`drive-${drive}`}>{drive}</Label>
              </div>
            ))}
          </div>
        </div>
        
        <Button 
          className="w-full bg-blue-900 hover:bg-blue-800"
          onClick={onApplyFilters}
        >
          Применить фильтры
        </Button>
      </div>
    </div>
  );
};
