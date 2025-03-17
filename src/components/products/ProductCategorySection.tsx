import React from 'react';
import { Product } from '../../types/Product';

interface ProductCategorySectionProps {
  categoryName: string;
  title: string;
  borderColor: string;
  products: Product[];
}

const ProductCategorySection: React.FC<ProductCategorySectionProps> = ({ 
  categoryName, 
  title, 
  borderColor, 
  products 
}) => {
  const categoryProducts = products.filter(p => p.category === categoryName);
  
  if (categoryProducts.length === 0) return null;
  
  return (
    <div className={`border-2 rounded-xl p-6 mb-12 ${borderColor}`}>
      <h3 className="text-2xl font-bold mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-water-500">{title}</h3>
      <div className="flex flex-wrap justify-center gap-8">
        {categoryName === 'sem-gas' || categoryName === 'com-gas' ? (
          <div className="flex flex-col items-center">
            <img 
              src="/lovable-uploads/89dc8326-adbe-46e4-ace7-5f9a6060ca06.png" 
              alt={`Água ${title}`} 
              className="w-full h-auto object-contain max-w-lg"
            />
          </div>
        ) : (
          // For galao category
          <div className="flex flex-col items-center">
            <img 
              src={categoryProducts[0].image} 
              alt="Galão 20L" 
              className="h-72 object-contain"
            />
            <span className="mt-3 font-medium">20L</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCategorySection;
