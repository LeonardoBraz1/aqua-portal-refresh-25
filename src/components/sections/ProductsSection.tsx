
import React from 'react';
import { Product } from '../../types/Product';
import ProductCategorySection from '../products/ProductCategorySection';

interface ProductsSectionProps {
  products: Product[];
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ products }) => {
  return (
    <section id="produtos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-800 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-water-500 section-title">Nossos Produtos</h2>
        
        <div className="space-y-16">
          <ProductCategorySection 
            categoryName="sem-gas"
            borderColor="border-blue-200" 
            products={products}
          />
          <ProductCategorySection 
            categoryName="com-gas"
            borderColor="border-orange-200" 
            products={products}
          />
          <ProductCategorySection 
            categoryName="galao"
            borderColor="border-green-200" 
            products={products}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
