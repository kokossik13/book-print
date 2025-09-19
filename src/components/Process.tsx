import React from 'react';
import { Upload, Settings, Package } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Upload,
      number: "01",
      title: "Присылаете макет",
      description: "Отправьте готовый макет или обратитесь к нам за помощью в вёрстке. Мы поможем оформить вашу книгу профессионально",
    },
    {
      icon: Settings,
      number: "02", 
      title: "Согласовываем детали",
      description: "Выбираем материалы, тип переплёта, тиснение и другие детали оформления. Показываем образцы и согласовываем финальный вид",
    },
    {
      icon: Package,
      number: "03",
      title: "Получаете книги",
      description: "Через 1–2 недели ваши книги готовы. Доставляем курьером по Москве или отправляем в любой регион России",
    },
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Как это работает
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Простой и понятный процесс от идеи до готовой книги в ваших руках
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative text-center">
                  <div className="relative inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 text-white rounded-full mb-6 shadow-lg">
                    <IconComponent className="h-10 w-10" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;