
import { Card } from "@/components/ui/card";

interface AdvantageCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AdvantageCard = ({ icon, title, description }: AdvantageCardProps) => {
  return (
    <Card className="text-center p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-center mb-4">
        <div className="bg-blue-100 p-4 rounded-full">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  );
};

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-900">
          <circle cx="8" cy="21" r="2" /><circle cx="20" cy="21" r="2" />
          <path d="M5.67 6H23l-1.68 8.39a2 2 0 0 1-2 1.61H8.75a2 2 0 0 1-2-1.74L5.23 2.74A2 2 0 0 0 3.25 1H1" />
        </svg>
      ),
      title: "Большой выбор автомобилей",
      description: "Более 200 новых автомобилей BMW различных моделей и комплектаций в наличии"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-900">
          <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
        </svg>
      ),
      title: "Привлекательные условия",
      description: "Специальные предложения, кредитные программы и программы trade-in"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-900">
          <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
          <rect width="18" height="18" x="3" y="4" rx="2" />
          <circle cx="12" cy="10" r="2" />
          <line x1="8" x2="8" y1="2" y2="4" />
          <line x1="16" x2="16" y1="2" y2="4" />
        </svg>
      ),
      title: "Профессиональный сервис",
      description: "Сертифицированные специалисты с многолетним опытом работы и современное оборудование"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Наши преимущества</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <AdvantageCard 
              key={index}
              icon={advantage.icon}
              title={advantage.title}
              description={advantage.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
