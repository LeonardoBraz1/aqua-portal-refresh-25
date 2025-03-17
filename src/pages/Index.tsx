
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HeroSection from '../components/sections/HeroSection';
import MissionSection from '../components/sections/MissionSection';
import ProductsSection from '../components/sections/ProductsSection';
import QualitySection from '../components/sections/QualitySection';
import ContactSection from '../components/sections/ContactSection';
import ProductBenefits from '../components/products/ProductBenefits';
import WholesaleSection from '../components/products/WholesaleSection';
import { products } from '../data/ProductsData';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <HeroSection />
      <MissionSection />
      <ProductsSection products={products} />
      <QualitySection />
      <ContactSection />
      
      <ProductBenefits />
      <WholesaleSection />
      <Footer />
    </div>
  );
};

export default Index;
