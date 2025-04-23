
import { useState } from "react";
import { BMWHeader } from "@/components/BMWHeader";
import { Footer } from "@/components/Footer";
import { CatalogFilters } from "@/components/catalog/CatalogFilters";
import { CatalogList } from "@/components/catalog/CatalogList";
import { catalogCarsData } from "@/data/catalogData";

const Catalog = () => {
  const [cars, setCars] = useState(catalogCarsData);

  const handleApplyFilters = () => {
    // В реальном приложении здесь была бы логика фильтрации
    console.log("Применение фильтров");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <BMWHeader />
      
      <main className="flex-1 py-10">
        <div className="container px-4">
          <h1 className="text-3xl font-bold mb-8">Каталог автомобилей BMW</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Фильтры */}
            <div className="lg:col-span-1">
              <CatalogFilters onApplyFilters={handleApplyFilters} />
            </div>
            
            {/* Список автомобилей */}
            <div className="lg:col-span-3">
              <CatalogList cars={cars} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Catalog;
