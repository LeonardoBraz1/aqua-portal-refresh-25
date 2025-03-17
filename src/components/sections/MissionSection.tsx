
import React from 'react';
import { Droplets } from 'lucide-react';

const MissionSection: React.FC = () => {
  return (
    <section id="nossa-missao" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-water-500 section-title">Nossa Missão</h2>
          <p className="text-lg text-gray-700 mb-10">
            A Águas de Cabreúva está comprometida com a excelência, oferecendo água mineral da mais alta qualidade, 
            extraída de fontes naturais protegidas no coração de Cabreúva. Cada gota representa nosso compromisso 
            com a pureza, sustentabilidade e bem-estar dos nossos consumidores.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white shadow-lg rounded-xl p-6">
              <div className="w-16 h-16 bg-water-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets size={32} className="text-water-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Pureza Natural</h3>
              <p className="text-gray-600">Extraída de fontes naturalmente protegidas, nossa água preserva todos os minerais benéficos para a saúde.</p>
            </div>
            
            <div className="bg-white shadow-lg rounded-xl p-6">
              <div className="w-16 h-16 bg-water-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets size={32} className="text-water-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Qualidade Superior</h3>
              <p className="text-gray-600">Rigorosos processos de qualidade garantem que cada garrafa atenda aos mais elevados padrões internacionais.</p>
            </div>
            
            <div className="bg-white shadow-lg rounded-xl p-6">
              <div className="w-16 h-16 bg-water-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets size={32} className="text-water-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustentabilidade</h3>
              <p className="text-gray-600">Compromisso com práticas responsáveis para preservar nossos recursos hídricos para as futuras gerações.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
