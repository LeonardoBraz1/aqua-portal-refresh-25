
import React from 'react';
import { Award, Shield, Leaf, Droplets } from 'lucide-react';

const DiferenciaisSection: React.FC = () => {
  return (
    <section id="diferenciais" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-800 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-water-500 section-title">Nossos Diferenciais</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="glass-card p-8 rounded-xl text-center reveal-on-scroll">
            <div className="w-16 h-16 mx-auto mb-6 bg-water-50 rounded-full flex items-center justify-center text-water-600">
              <Droplets size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Pureza Natural</h3>
            <p className="text-gray-600">
              Extraída de fontes naturais protegidas, preservando todos os minerais essenciais.
            </p>
          </div>
          
          <div className="glass-card p-8 rounded-xl text-center reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
            <div className="w-16 h-16 mx-auto mb-6 bg-water-50 rounded-full flex items-center justify-center text-water-600">
              <Shield size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Alta Qualidade</h3>
            <p className="text-gray-600">
              Rigorosos processos de controle de qualidade em todas as etapas de produção.
            </p>
          </div>
          
          <div className="glass-card p-8 rounded-xl text-center reveal-on-scroll" style={{ transitionDelay: '0.4s' }}>
            <div className="w-16 h-16 mx-auto mb-6 bg-water-50 rounded-full flex items-center justify-center text-water-600">
              <Award size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Certificada</h3>
            <p className="text-gray-600">
              Aprovada pelos mais rigorosos órgãos reguladores e certificações internacionais.
            </p>
          </div>
          
          <div className="glass-card p-8 rounded-xl text-center reveal-on-scroll" style={{ transitionDelay: '0.6s' }}>
            <div className="w-16 h-16 mx-auto mb-6 bg-water-50 rounded-full flex items-center justify-center text-water-600">
              <Leaf size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Sustentável</h3>
            <p className="text-gray-600">
              Comprometidos com práticas sustentáveis e embalagens eco-friendly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiferenciaisSection;
