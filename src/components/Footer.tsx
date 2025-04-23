
export const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">О компании</h3>
            <p>
              Официальный дилер BMW в России с 2005 года. Полный спектр услуг по продаже и обслуживанию автомобилей BMW.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <p>Москва, ул. Автомобильная, 1</p>
            <p>Тел: +7 (495) 123-45-67</p>
            <p>Email: info@bmw-dealer.ru</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Режим работы</h3>
            <p>Пн-Пт: 9:00 - 21:00</p>
            <p>Сб-Вс: 10:00 - 20:00</p>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-blue-800 text-center">
          <p>© 2023 BMW Россия. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
