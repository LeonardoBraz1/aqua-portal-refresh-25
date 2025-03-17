
import React from 'react';
import { Product } from '../../types/Product';

interface ProductsSectionProps {
  products: Product[];
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ products }) => {
  return (
    <section id="produtos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-800 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-water-500 section-title">Nossos Produtos</h2>
        
        <div className="border-2 rounded-xl p-6 border-blue-200">
          <div className="flex justify-center">
            <div className="flex flex-col items-center">
              <img 
                src="/lovable-uploads/89dc8326-adbe-46e4-ace7-5f9a6060ca06.png" 
                alt="Produtos de Água Mineral" 
                className="w-full h-auto object-contain max-w-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
