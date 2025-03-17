
import React, { useState } from 'react';
import { ShoppingCart, Info } from 'lucide-react';
import LazyImage from '../components/LazyImage';
import { toast } from '@/components/ui/use-toast';
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Product {
  id: number;
  name: string;
  description: string;
  sizes: string[];
  image: string;
  category: 'sem-gas' | 'com-gas' | 'galao';
}

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const products: Product[] = [
    {
      id: 1,
      name: "Água Mineral Natural",
      description: "Nossa água mineral natural sem gás, preservando todos os minerais essenciais para sua saúde e bem-estar.",
      sizes: ["300ml", "500ml", "1L", "1.5L", "2L"],
      image: "/lovable-uploads/cd8bf566-beb3-4f8c-8b4f-de9b291f3f0c.png",
      category: "sem-gas"
    },
    {
      id: 2,
      name: "Água Mineral Com Gás",
      description: "Água mineral naturalmente gaseificada, oferecendo refrescância e sabor para acompanhar suas refeições.",
      sizes: ["300ml", "500ml", "1L"],
      image: "/lovable-uploads/cd8bf566-beb3-4f8c-8b4f-de9b291f3f0c.png",
      category: "com-gas"
    },
    {
      id: 5,
      name: "Garrafão de Água Mineral",
      description: "Garrafão retornável com 20 litros de água mineral natural, perfeito para residências e escritórios.",
      sizes: ["20L"],
      image: "https://images.unsplash.com/photo-1610284248524-5a1e7e30acc7?q=80&w=1974&auto=format&fit=crop",
      category: "galao"
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const handleBuyNow = (product: Product) => {
    toast({
      title: "Produto adicionado",
      description: `${product.name} foi adicionado ao seu carrinho!`,
    });
  };

  // Helper function to render a product category section
  const renderProductCategory = (categoryName: string, title: string, borderColor: string) => {
    const categoryProducts = products.filter(p => p.category === categoryName);
    if (categoryProducts.length === 0) return null;
    
    return (
      <div className={`border-2 rounded-xl p-6 mb-12 ${borderColor}`}>
        <h3 className="text-2xl font-bold mb-6">{title}</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {categoryName === 'sem-gas' || categoryName === 'com-gas' ? (
            <div className="flex flex-col items-center">
              <div className="flex items-end gap-8 justify-center">
                <div className="flex flex-col items-center">
                  <img 
                    src="/lovable-uploads/cd8bf566-beb3-4f8c-8b4f-de9b291f3f0c.png" 
                    alt="300ml" 
                    className="h-48 object-contain"
                  />
                  <span className="mt-3 font-medium">300ml</span>
                </div>
                <div className="flex flex-col items-center">
                  <img 
                    src="/lovable-uploads/cd8bf566-beb3-4f8c-8b4f-de9b291f3f0c.png"
                    alt="500ml" 
                    className="h-60 object-contain" 
                  />
                  <span className="mt-3 font-medium">500ml</span>
                </div>
                <div className="flex flex-col items-center">
                  <img 
                    src="/lovable-uploads/cd8bf566-beb3-4f8c-8b4f-de9b291f3f0c.png" 
                    alt="1,5L" 
                    className="h-72 object-contain"
                  />
                  <span className="mt-3 font-medium">1,5L</span>
                </div>
              </div>
            </div>
          ) : (
            // For galao category
            <div className="flex flex-col items-center">
              <img 
                src={categoryProducts[0].image} 
                alt="Galão 20L" 
                className="h-72 object-contain"
              />
              <span className="mt-3 font-medium">20L</span>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <section className="py-20 bg-water-50 relative" id="produtos">
        <div className="absolute inset-0 bg-gradient-to-b from-water-100 to-water-50/0"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-down text-water-800" style={{ animationDelay: '0.2s' }}>
              Nossos Produtos
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-slide-down" style={{ animationDelay: '0.4s' }}>
              Conheça nossa linha completa de água mineral natural em diversas embalagens
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button 
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === 'all' 
                  ? 'bg-water-600 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory('all')}
            >
              Todos os Produtos
            </button>
            <button 
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === 'sem-gas' 
                  ? 'bg-water-600 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory('sem-gas')}
            >
              Água Sem Gás
            </button>
            <button 
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === 'com-gas' 
                  ? 'bg-water-600 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory('com-gas')}
            >
              Água Com Gás
            </button>
            <button 
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === 'galao' 
                  ? 'bg-water-600 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory('galao')}
            >
              Garrafões
            </button>
          </div>
          
          {activeCategory === 'all' ? (
            <div className="space-y-16">
              {renderProductCategory('sem-gas', 'SEM GÁS', 'border-blue-200')}
              {renderProductCategory('com-gas', 'COM GÁS', 'border-orange-200')}
              {renderProductCategory('galao', 'GARRAFÕES', 'border-green-200')}
            </div>
          ) : (
            <>
              {activeCategory === 'sem-gas' && renderProductCategory('sem-gas', 'SEM GÁS', 'border-blue-200')}
              {activeCategory === 'com-gas' && renderProductCategory('com-gas', 'COM GÁS', 'border-orange-200')}
              {activeCategory === 'galao' && renderProductCategory('galao', 'GARRAFÕES', 'border-green-200')}
            </>
          )}
          
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-center mb-12">Nossos Produtos em Detalhes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-lg reveal-on-scroll transition-all duration-300 hover:shadow-xl border border-gray-100">
                  <div className="relative h-[300px]">
                    <LazyImage 
                      src={product.image}
                      alt={product.name} 
                      className="h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm text-gray-500 mb-2">Tamanhos disponíveis</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.sizes.map((size) => (
                          <span key={size} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <button 
                        onClick={() => handleBuyNow(product)}
                        className="flex-1 bg-water-600 hover:bg-water-700 text-white font-medium py-2 px-4 rounded-lg shadow-sm transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <ShoppingCart size={18} />
                        Comprar Agora
                      </button>
                      <button className="bg-water-50 hover:bg-water-100 text-water-700 font-medium py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center">
                        <Info size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-water-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-water-texture bg-cover opacity-5"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal-on-scroll">
              <h2 className="section-title">Benefícios da Nossa Água</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                A água mineral natural da Águas de Cabreúva é extraída de fontes profundas e protegidas, garantindo sua pureza e preservando todos os minerais essenciais para o organismo.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Rica em minerais como cálcio, magnésio e bicarbonato, nossa água mineral contribui para a hidratação adequada e para o equilíbrio de eletrólitos, fundamentais para o bom funcionamento do corpo.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 bg-water-600 rounded-full"></span>
                  <span className="text-gray-700">Equilíbrio eletrolítico perfeito</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 bg-water-600 rounded-full"></span>
                  <span className="text-gray-700">Baixo teor de sódio</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 bg-water-600 rounded-full"></span>
                  <span className="text-gray-700">pH equilibrado</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 bg-water-600 rounded-full"></span>
                  <span className="text-gray-700">Rico em minerais essenciais</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 bg-water-600 rounded-full"></span>
                  <span className="text-gray-700">Pureza garantida</span>
                </li>
              </ul>
            </div>
            
            <div className="relative reveal-on-scroll">
              <div className="absolute -inset-4 -rotate-3 bg-water-200 rounded-xl"></div>
              <LazyImage 
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop"
                alt="Benefícios da água mineral" 
                className="relative rounded-xl aspect-[4/3] shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

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
    </>
  );
};

export default ProductsPage;
