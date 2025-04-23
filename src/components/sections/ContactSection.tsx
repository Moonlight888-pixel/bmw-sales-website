
import { ContactForm } from "@/components/ContactForm";

const ContactSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Связаться с нами</h2>
        <p className="text-center text-gray-600 mb-10">
          Оставьте заявку, и наш менеджер свяжется с вами в ближайшее время
        </p>
        <div className="max-w-xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
