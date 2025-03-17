
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ProductList from '../components/products/ProductList';
import { products } from '../data/ProductsData';

const ProductsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow container mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-8">Nossos Produtos</h1>
        <ProductList products={products} />
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductsPage;
