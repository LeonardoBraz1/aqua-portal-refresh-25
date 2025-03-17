
import React from 'react';
import { Droplets, Award, ShieldCheck, Recycle, ThumbsUp, Clock } from 'lucide-react';

const DiferenciaisSection = () => {
  return (
    <section id="diferenciais" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-800 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-water-500 section-title">
          Nossos Diferenciais
        </h2>
        
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-600">
            O que torna a Águas de Cabreúva única? Descubra os diferenciais que fazem da nossa água mineral a escolha perfeita para o seu bem-estar e hidratação.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-water-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-water-100 rounded-full flex items-center justify-center mb-6">
              <Droplets size={32} className="text-water-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Pureza Garantida</h3>
            <p className="text-gray-600">
              Nossa água é captada de fontes naturais protegidas na Serra do Japi, garantindo pureza e qualidade excepcionais em cada gota.
            </p>
          </div>
          
          <div className="bg-water-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-water-100 rounded-full flex items-center justify-center mb-6">
              <Award size={32} className="text-water-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Certificações de Qualidade</h3>
            <p className="text-gray-600">
              Possuímos todas as certificações necessárias que atestam a excelência e conformidade com as mais rigorosas normas de qualidade.
            </p>
          </div>
          
          <div className="bg-water-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-water-100 rounded-full flex items-center justify-center mb-6">
              <ShieldCheck size={32} className="text-water-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Controle Rigoroso</h3>
            <p className="text-gray-600">
              Realizamos análises constantes em laboratórios especializados para garantir a qualidade e segurança da nossa água.
            </p>
          </div>
          
          <div className="bg-water-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-water-100 rounded-full flex items-center justify-center mb-6">
              <Recycle size={32} className="text-water-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Sustentabilidade</h3>
            <p className="text-gray-600">
              Comprometidos com o meio ambiente, desenvolvemos embalagens mais sustentáveis e processos que respeitam a natureza.
            </p>
          </div>
          
          <div className="bg-water-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-water-100 rounded-full flex items-center justify-center mb-6">
              <ThumbsUp size={32} className="text-water-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Satisfação Garantida</h3>
            <p className="text-gray-600">
              Nossos clientes confiam na qualidade da nossa água, com 97% de aprovação em pesquisas de satisfação realizadas.
            </p>
          </div>
          
          <div className="bg-water-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-water-100 rounded-full flex items-center justify-center mb-6">
              <Clock size={32} className="text-water-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Tradição e Experiência</h3>
            <p className="text-gray-600">
              Com mais de 25 anos de atuação no mercado, acumulamos experiência e conhecimento para oferecer sempre o melhor.
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-xl text-water-700 font-medium max-w-3xl mx-auto">
            "Água de Cabreúva: a escolha natural para quem valoriza qualidade, saúde e bem-estar."
          </p>
        </div>
      </div>
    </section>
  );
};

export default DiferenciaisSection;
