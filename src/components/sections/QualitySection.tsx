
import React from 'react';

const QualitySection: React.FC = () => {
  return (
    <section id="qualidade" className="py-20 px-6 bg-gradient-to-r from-water-100 to-water-200">
      <div className="container mx-auto relative z-10">
        <div className="max-w-2xl mx-auto bg-white p-10 rounded-xl shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-water-500 section-title">Compromisso com a Qualidade</h2>
          <p className="text-gray-700 mb-6">
            Na Águas de Cabreúva, a qualidade não é apenas uma promessa, é nossa obsessão. Cada gota passa por 
            rigorosos processos de análise e controle antes de chegar até você.
          </p>
          
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-water-500 flex-shrink-0 flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </div>
              <p>Análises microbiológicas diárias garantem a pureza da nossa água.</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-water-500 flex-shrink-0 flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </div>
              <p>Laboratório próprio com equipamentos de última geração.</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-water-500 flex-shrink-0 flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </div>
              <p>Certificações nacionais e internacionais de qualidade.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
