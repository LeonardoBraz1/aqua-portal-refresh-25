
import React from 'react';
import LazyImage from '../LazyImage';

const ProductBenefits: React.FC = () => {
  return (
    <section className="py-16 bg-water-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-water-texture bg-cover opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal-on-scroll">
            <h2 className="section-title">Benefícios da Nossa Água</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              A água mineral natural da Águas de Cabreúva é extraída de fontes profundas e protegidas, garantindo sua pureza e preservando todos os minerais essenciais para o organismo.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Rica em minerais como cálcio, magnésio e bicarbonato, nossa água mineral contribui para a hidratação adequada e para o equilíbrio de eletrólitos, fundamentais para o bom funcionamento do corpo.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 bg-water-600 rounded-full"></span>
                <span className="text-gray-700">Equilíbrio eletrolítico perfeito</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 bg-water-600 rounded-full"></span>
                <span className="text-gray-700">Baixo teor de sódio</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 bg-water-600 rounded-full"></span>
                <span className="text-gray-700">pH equilibrado</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 bg-water-600 rounded-full"></span>
                <span className="text-gray-700">Rico em minerais essenciais</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 bg-water-600 rounded-full"></span>
                <span className="text-gray-700">Pureza garantida</span>
              </li>
            </ul>
          </div>
          
          <div className="relative reveal-on-scroll">
            <div className="absolute -inset-4 -rotate-3 bg-water-200 rounded-xl"></div>
            <LazyImage 
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop"
              alt="Benefícios da água mineral" 
              className="relative rounded-xl aspect-[4/3] shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductBenefits;
