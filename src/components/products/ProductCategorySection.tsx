
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
      <h3 className="text-2xl font-bold mb-6">{title}</h3>
      <div className="flex flex-wrap justify-center gap-8">
        {categoryName === 'sem-gas' || categoryName === 'com-gas' ? (
          <div className="flex flex-col items-center">
            <div className="flex flex-wrap items-end gap-8 justify-center">
              <div className="flex flex-col items-center">
                <img 
                  src="/lovable-uploads/cd8bf566-beb3-4f8c-8b4f-de9b291f3f0c.png" 
                  alt="300ml" 
                  className="h-48 object-contain"
                />
                <span className="mt-3 font-medium">300ml</span>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src="/lovable-uploads/cd8bf566-beb3-4f8c-8b4f-de9b291f3f0c.png"
                  alt="500ml" 
                  className="h-60 object-contain" 
                />
                <span className="mt-3 font-medium">500ml</span>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src="/lovable-uploads/cd8bf566-beb3-4f8c-8b4f-de9b291f3f0c.png" 
                  alt="1,5L" 
                  className="h-72 object-contain"
                />
                <span className="mt-3 font-medium">1,5L</span>
              </div>
            </div>
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
