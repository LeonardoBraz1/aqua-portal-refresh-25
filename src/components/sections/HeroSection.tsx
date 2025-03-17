
import React from 'react';
import { ArrowDown, Droplets } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-b from-water-800 to-water-600 flex items-center">
      <div className="container mx-auto relative z-10 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Água Mineral Natural
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md">
            Pura, Refrescante e diretamente da Natureza
          </p>
          <div>
            <a href="#produtos" className="btn-primary inline-flex items-center gap-2 bg-white text-water-600 hover:bg-water-50 px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg">
              Conheça Nossos Produtos <Droplets size={18} />
            </a>
          </div>
        </div>
      </div>
      
      <a href="#nossa-missao" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator animate-bounce w-10 h-10 flex items-center justify-center rounded-full bg-white/30 backdrop-blur-sm">
        <ArrowDown size={24} className="text-white" />
      </a>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent water-wave"></div>
    </section>
  );
};

export default HeroSection;
