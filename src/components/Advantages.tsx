import React from 'react';
import { Palette, Boxes, Sparkles } from 'lucide-react';

const Advantages = () => {
  const advantages = [
    {
      icon: Palette,
      title: "Индивидуальное оформление",
      description: "Каждая книга создается под конкретного автора с учетом жанра, стиля и личных пожеланий",
    },
    {
      icon: Boxes,
      title: "Малые тиражи без переплаты",
      description: "Никаких складских расходов и минимальных заказов. Печатаем ровно столько, сколько нужно",
    },
    {
      icon: Sparkles,
      title: "Эксклюзивные материалы",
      description: "Натуральная Эко-кожа, золотое тиснение, ламинация и другие премиальные опции оформления",
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Наши преимущества
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Мы не просто печатаем книги — мы создаем шедевры полиграфического искусства
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-colors group border border-gray-700 hover:border-amber-600"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {advantage.title}
                </h3>
                <p className="text-gray-300">
                  {advantage.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Advantages;