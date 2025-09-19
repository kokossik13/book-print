import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Ваша книга в руках — 
                <span className="block text-amber-600">уже через 2 недели</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Печать малых тиражей от 10 экземпляров в твёрдом переплёте. 
                Премиальное качество для авторов, которые ценят совершенство.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors shadow-lg">
                Заказать печать
              </button>
              <button className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors">
                Посмотреть примеры
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Премиальные книги в твёрдом переплёте"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;