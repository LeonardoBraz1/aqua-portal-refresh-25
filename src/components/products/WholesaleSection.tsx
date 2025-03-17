
import React from 'react';
import { toast } from '@/components/ui/use-toast';

const WholesaleSection: React.FC = () => {
  return (
    <section className="py-16 bg-water-600 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 reveal-on-scroll">Faça seu Pedido por Atacado</h2>
          <p className="text-xl mb-8 text-white/90 reveal-on-scroll">
            Para pedidos por atacado, revendedores ou para seu estabelecimento, entre em contato conosco e solicite um orçamento personalizado.
          </p>
          <button 
            onClick={() => {
              toast({
                title: "Pedido por atacado",
                description: "Em breve nossa equipe entrará em contato!",
              });
            }}
            className="bg-white text-water-700 hover:bg-white/90 font-medium py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-[1.02] reveal-on-scroll"
          >
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </section>
  );
};

export default WholesaleSection;
