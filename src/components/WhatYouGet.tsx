import React from 'react';
import { Award, Package, RussianRuble as Ruble } from 'lucide-react';

const WhatYouGet = () => {
  const features = [
    {
      icon: Award,
      title: "Премиальный вид книги",
      description: "Качественная бумага, твёрдый переплёт и эксклюзивные обложки, которые подчёркивают статус вашего произведения",
    },
    {
      icon: Package,
      title: "Минимальный тираж — от 10 шт.",
      description: "Печатаем даже самые маленькие тиражи без дополнительных наценок и необходимости хранить запасы",
    },
    {
      icon: Ruble,
      title: "От 15 000 ₽ за 10 экземпляров",
      description: "60–80 страниц, формат А5, твёрдый переплёт. Прозрачное ценообразование без скрытых платежей",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Что вы получите
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Каждая книга — это произведение искусства, созданное с вниманием к каждой детали
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-amber-600 text-white rounded-lg flex items-center justify-center">
                      <IconComponent className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Книги премиального качества"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;