
import { Card, CardContent } from "@/components/ui/card";
import { testimonialsData } from "@/data/testimonialsData";

const StarRating = () => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg 
          key={star} 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="text-yellow-500"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonialsData[0] }) => {
  return (
    <Card className="p-6">
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
        <div className="mt-4">
          <StarRating />
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Отзывы наших клиентов</h2>
        <p className="text-center text-gray-600 mb-10">Более 1000 довольных клиентов выбрали нас</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
