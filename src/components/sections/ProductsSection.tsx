
import React from 'react';
import { Product } from '../../types/Product';
import { Droplets } from 'lucide-react';

interface ProductsSectionProps {
  products: Product[];
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ products }) => {
  return (
    <section id="produtos" className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-800 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-water-500 section-title">Nossos Produtos</h2>
        
        <div className="flex flex-col items-center">
          <img 
            src="/lovable-uploads/89dc8326-adbe-46e4-ace7-5f9a6060ca06.png" 
            alt="Produtos de Água Mineral" 
            className="w-full h-auto object-contain max-w-4xl mb-10 hover:scale-105 transition-transform duration-500"
          />
          
          <div className="max-w-4xl text-center mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Água Mineral Natural de Altíssima Qualidade</h3>
            <p className="text-lg text-gray-600 mb-6">
              Nossa água mineral é extraída de fontes naturais protegidas da Serra do Japi, preservando todos os minerais essenciais para sua saúde e bem-estar. Disponível em diversos formatos para atender suas necessidades.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mb-10">
              <div className="flex items-center gap-2 bg-water-50 px-4 py-2 rounded-full shadow-sm">
                <Droplets className="text-water-600" />
                <span>Sem Gás (300ml, 500ml, 1,5L)</span>
              </div>
              <div className="flex items-center gap-2 bg-water-50 px-4 py-2 rounded-full shadow-sm">
                <Droplets className="text-water-600" />
                <span>Com Gás (300ml, 500ml, 1,5L)</span>
              </div>
              <div className="flex items-center gap-2 bg-water-50 px-4 py-2 rounded-full shadow-sm">
                <Droplets className="text-water-600" />
                <span>Garrafão (20L)</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Efeito de ondas aprimorado */}
        <div className="relative h-60 overflow-hidden">
          <div className="absolute w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full text-water-300 opacity-60 animate-[wave_15s_ease-in-out_infinite]">
              <path fill="currentColor" fillOpacity="1" d="M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,138.7C672,149,768,203,864,213.3C960,224,1056,192,1152,165.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
          <div className="absolute w-full -translate-x-1/4 animate-[wave_12s_ease-in-out_infinite_reverse]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full text-water-400 opacity-50">
              <path fill="currentColor" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,128C672,128,768,160,864,149.3C960,139,1056,85,1152,80C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
          <div className="absolute w-full translate-x-1/3 animate-[wave_10s_ease-in-out_infinite]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full text-water-500 opacity-40">
              <path fill="currentColor" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,218.7C1248,213,1344,139,1392,101.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
