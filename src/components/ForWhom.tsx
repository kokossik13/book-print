import React from 'react';
import { Users, Heart, Presentation } from 'lucide-react';

const ForWhom = () => {
  const audiences = [
    {
      icon: Users,
      title: "Авторы, готовящиеся к изданию",
      description: "Создайте пробный тираж своей книги перед крупным изданием или для поиска издателя",
    },
    {
      icon: Heart,
      title: "Подарки близким людям",
      description: "Превратите семейную историю, воспоминания или стихи в настоящую книгу",
    },
    {
      icon: Presentation,
      title: "Эксперты и блогеры",
      description: "Профессиональные материалы для презентаций, конференций и встреч с клиентами",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Для кого мы печатаем
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Наши клиенты — это люди, которые ценят качество и понимают важность первого впечатления
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => {
            const IconComponent = audience.icon;
            return (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-600 text-white rounded-full mb-6 group-hover:bg-amber-700 transition-colors">
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {audience.title}
                </h3>
                <p className="text-gray-600">
                  {audience.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ForWhom;