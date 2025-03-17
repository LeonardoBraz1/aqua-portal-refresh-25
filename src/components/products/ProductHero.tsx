
import React from 'react';

const ProductHero: React.FC = () => {
  return (
    <section className="py-20 bg-water-50 relative" id="produtos">
      <div className="absolute inset-0 bg-gradient-to-b from-water-100 to-water-50/0"></div>
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-down text-water-800" style={{ animationDelay: '0.2s' }}>
            Nossos Produtos
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-slide-down" style={{ animationDelay: '0.4s' }}>
            Conheça nossa linha completa de água mineral natural em diversas embalagens
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
