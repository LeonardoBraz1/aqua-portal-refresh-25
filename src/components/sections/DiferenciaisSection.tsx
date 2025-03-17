
import React from 'react';
import { Award, Shield, Leaf, Droplets, Star, Check, Heart } from 'lucide-react';

const DiferenciaisSection: React.FC = () => {
  return (
    <section id="diferenciais" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-800 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-water-500 section-title">Nossos Diferenciais</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="glass-card p-8 rounded-xl text-center reveal-on-scroll group hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-6 bg-water-50 rounded-full flex items-center justify-center text-water-600 group-hover:bg-water-100 group-hover:scale-110 transition-all duration-300">
              <Droplets size={32} className="group-hover:text-water-700" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Pureza Natural</h3>
            <p className="text-gray-600">
              Extraída de fontes naturais protegidas, preservando todos os minerais essenciais para sua saúde.
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <ul className="text-left">
                <li className="flex items-center gap-2 text-sm mb-2">
                  <Check size={16} className="text-green-500" />
                  <span>pH Equilibrado</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check size={16} className="text-green-500" />
                  <span>Rica em minerais</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="glass-card p-8 rounded-xl text-center reveal-on-scroll group hover:shadow-xl transition-all duration-300" style={{ transitionDelay: '0.2s' }}>
            <div className="w-16 h-16 mx-auto mb-6 bg-water-50 rounded-full flex items-center justify-center text-water-600 group-hover:bg-water-100 group-hover:scale-110 transition-all duration-300">
              <Shield size={32} className="group-hover:text-water-700" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Alta Qualidade</h3>
            <p className="text-gray-600">
              Rigorosos processos de controle de qualidade em todas as etapas de produção.
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <ul className="text-left">
                <li className="flex items-center gap-2 text-sm mb-2">
                  <Check size={16} className="text-green-500" />
                  <span>Certificação ANVISA</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check size={16} className="text-green-500" />
                  <span>Testes laboratoriais</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="glass-card p-8 rounded-xl text-center reveal-on-scroll group hover:shadow-xl transition-all duration-300" style={{ transitionDelay: '0.4s' }}>
            <div className="w-16 h-16 mx-auto mb-6 bg-water-50 rounded-full flex items-center justify-center text-water-600 group-hover:bg-water-100 group-hover:scale-110 transition-all duration-300">
              <Award size={32} className="group-hover:text-water-700" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Reconhecimento</h3>
            <p className="text-gray-600">
              Aprovada pelos mais rigorosos órgãos reguladores e premiada por sua qualidade excepcional.
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex justify-center gap-1">
                <Star size={16} className="text-yellow-500" />
                <Star size={16} className="text-yellow-500" />
                <Star size={16} className="text-yellow-500" />
                <Star size={16} className="text-yellow-500" />
                <Star size={16} className="text-yellow-500" />
              </div>
              <p className="text-sm text-gray-500 mt-1">Avaliação 4.9/5 por nossos clientes</p>
            </div>
          </div>
          
          <div className="glass-card p-8 rounded-xl text-center reveal-on-scroll group hover:shadow-xl transition-all duration-300" style={{ transitionDelay: '0.6s' }}>
            <div className="w-16 h-16 mx-auto mb-6 bg-water-50 rounded-full flex items-center justify-center text-water-600 group-hover:bg-water-100 group-hover:scale-110 transition-all duration-300">
              <Leaf size={32} className="group-hover:text-water-700" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Sustentabilidade</h3>
            <p className="text-gray-600">
              Comprometidos com práticas sustentáveis, preservação ambiental e embalagens eco-friendly.
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex justify-center">
                <Heart size={20} className="text-red-500" />
                <span className="text-sm ml-2">Compromisso com o meio ambiente</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiferenciaisSection;
