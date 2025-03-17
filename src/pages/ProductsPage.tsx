
import React, { useState } from 'react';
import { products } from '../data/ProductsData';
import ProductHero from '../components/products/ProductHero';
import ProductFilter from '../components/products/ProductFilter';
import ProductCategorySection from '../components/products/ProductCategorySection';
import ProductList from '../components/products/ProductList';
import ProductBenefits from '../components/products/ProductBenefits';
import WholesaleSection from '../components/products/WholesaleSection';

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <>
      <ProductHero />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <ProductFilter 
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
          
          {activeCategory === 'all' ? (
            <div className="space-y-16">
              <ProductCategorySection 
                categoryName="sem-gas" 
                title="SEM GÁS" 
                borderColor="border-blue-200" 
                products={products}
              />
              <ProductCategorySection 
                categoryName="com-gas" 
                title="COM GÁS" 
                borderColor="border-orange-200" 
                products={products}
              />
              <ProductCategorySection 
                categoryName="galao" 
                title="GARRAFÕES" 
                borderColor="border-green-200" 
                products={products}
              />
            </div>
          ) : (
            <>
              {activeCategory === 'sem-gas' && (
                <ProductCategorySection 
                  categoryName="sem-gas" 
                  title="SEM GÁS" 
                  borderColor="border-blue-200" 
                  products={products}
                />
              )}
              {activeCategory === 'com-gas' && (
                <ProductCategorySection 
                  categoryName="com-gas" 
                  title="COM GÁS" 
                  borderColor="border-orange-200" 
                  products={products}
                />
              )}
              {activeCategory === 'galao' && (
                <ProductCategorySection 
                  categoryName="galao" 
                  title="GARRAFÕES" 
                  borderColor="border-green-200" 
                  products={products}
                />
              )}
            </>
          )}
          
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-center mb-12">Nossos Produtos em Detalhes</h2>
            <ProductList products={filteredProducts} />
          </div>
        </div>
      </section>

      <ProductBenefits />
      <WholesaleSection />
    </>
  );
};

export default ProductsPage;
