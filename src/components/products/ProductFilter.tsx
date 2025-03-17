
import React from 'react';

interface ProductFilterProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      <button 
        className={`px-6 py-3 rounded-full transition-all duration-300 ${
          activeCategory === 'all' 
            ? 'bg-water-600 text-white shadow-md' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
        onClick={() => setActiveCategory('all')}
      >
        Todos os Produtos
      </button>
      <button 
        className={`px-6 py-3 rounded-full transition-all duration-300 ${
          activeCategory === 'sem-gas' 
            ? 'bg-water-600 text-white shadow-md' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
        onClick={() => setActiveCategory('sem-gas')}
      >
        Água Sem Gás
      </button>
      <button 
        className={`px-6 py-3 rounded-full transition-all duration-300 ${
          activeCategory === 'com-gas' 
            ? 'bg-water-600 text-white shadow-md' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
        onClick={() => setActiveCategory('com-gas')}
      >
        Água Com Gás
      </button>
      <button 
        className={`px-6 py-3 rounded-full transition-all duration-300 ${
          activeCategory === 'galao' 
            ? 'bg-water-600 text-white shadow-md' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
        onClick={() => setActiveCategory('galao')}
      >
        Garrafões
      </button>
    </div>
  );
};

export default ProductFilter;
