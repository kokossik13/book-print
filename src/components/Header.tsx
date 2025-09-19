import React from 'react';
import { BookOpen } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-amber-600" />
            <span className="text-2xl font-bold text-gray-900">ПремиумПринт</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">
              Услуги
            </a>
            <a href="#portfolio" className="text-gray-600 hover:text-gray-900 transition-colors">
              Портфолио
            </a>
            <a href="#process" className="text-gray-600 hover:text-gray-900 transition-colors">
              Процесс
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Контакты
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;