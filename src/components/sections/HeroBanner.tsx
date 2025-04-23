
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
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
  );
};

export default HeroBanner;
