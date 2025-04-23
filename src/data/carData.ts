
export interface Car {
  id: number;
  model: string;
  year: number;
  price: string;
  image: string;
  features: string[];
}

export const popularModelsData: Car[] = [
  {
    id: 1,
    model: "BMW X5",
    year: 2023,
    price: "5 990 000 ₽",
    image: "/placeholder.svg",
    features: ["3.0 л / 249 л.с.", "Полный привод", "Дизель"]
  },
  {
    id: 2,
    model: "BMW 5 серии",
    year: 2023,
    price: "4 850 000 ₽",
    image: "/placeholder.svg",
    features: ["2.0 л / 190 л.с.", "Задний привод", "Бензин"]
  },
  {
    id: 3,
    model: "BMW X7",
    year: 2023,
    price: "7 790 000 ₽",
    image: "/placeholder.svg",
    features: ["3.0 л / 340 л.с.", "Полный привод", "Бензин"]
  }
];
