
import { BMWHeader } from "@/components/BMWHeader";
import HeroBanner from "@/components/sections/HeroBanner";
import AdvantagesSection from "@/components/sections/AdvantagesSection";
import PopularModelsSection from "@/components/sections/PopularModelsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <BMWHeader />
      
      <main className="flex-1">
        <HeroBanner />
        <AdvantagesSection />
        <PopularModelsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
