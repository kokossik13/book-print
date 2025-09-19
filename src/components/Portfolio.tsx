import React from 'react';

const Portfolio = () => {
  const portfolioImages = [
    {
      src: "https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Книга в кожаном переплете с золотым тиснением",
    },
    {
      src: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Стопка книг в твердом переплете",
    },
    {
      src: "https://images.pexels.com/photos/5834/nature-grass-leaf-green.jpg?auto=compress&cs=tinysrgb&w=800",
      alt: "Открытая книга на природе",
    },
    {
      src: "https://images.pexels.com/photos/2041396/pexels-photo-2041396.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Книги с элегантным дизайном обложек",
    },
    {
      src: "https://images.pexels.com/photos/1831744/pexels-photo-1831744.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Журналы премиального качества",
    },
    {
      src: "https://images.pexels.com/photos/3688/pexels-photo-3688.jpg?auto=compress&cs=tinysrgb&w=800",
      alt: "Винтажные книги с особым оформлением",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Примеры наших работ
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Каждая книга уникальна, как и её автор. Посмотрите на результаты нашей работы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;