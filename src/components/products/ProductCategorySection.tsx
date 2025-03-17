
import React from 'react';
import { Product } from '../../types/Product';

interface ProductCategorySectionProps {
  categoryName: string;
  borderColor: string;
  products: Product[];
}

const ProductCategorySection: React.FC<ProductCategorySectionProps> = ({ 
  categoryName, 
  borderColor, 
  products 
}) => {
  const categoryProducts = products.filter(p => p.category === categoryName);
  
  if (categoryProducts.length === 0) return null;
  
  return (
    <div className={`border-2 rounded-xl p-6 mb-12 ${borderColor}`}>
      <div className="flex flex-wrap justify-center">
        {categoryName === 'sem-gas' || categoryName === 'com-gas' ? (
          <div className="flex flex-col items-center">
            <img 
              src="/lovable-uploads/89dc8326-adbe-46e4-ace7-5f9a6060ca06.png" 
              alt={`Água ${categoryName}`} 
              className="w-full h-auto object-contain max-w-xl"
            />
          </div>
        ) : (
          // For galao category
          <div className="flex flex-col items-center">
            <img 
              src={categoryProducts[0].image} 
              alt="Galão 20L" 
              className="h-80 object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCategorySection;
