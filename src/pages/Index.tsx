
import React from 'react';
import Navigation from '../components/Navigation';
import LazyImage from '../components/LazyImage';
import { ArrowDown, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-section bg-hero-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-water-900/40 to-water-50/80"></div>
        <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg animate-fade-in">
              Água Mineral Natural
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Pura, Refrescante e diretamente da Natureza
            </p>
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Link to="/produtos" className="btn-primary inline-flex items-center gap-2">
                Conheça Nossos Produtos <Droplets size={18} />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <ArrowDown size={24} className="text-white" />
        </div>
        
        <div className="water-wave"></div>
      </section>
      
      {/* About Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title">Nossa Missão</h2>
            <p className="text-lg text-gray-700 mb-10">
              A Águas de Cabreúva está comprometida com a excelência, oferecendo água mineral da mais alta qualidade, 
              extraída de fontes naturais protegidas no coração de Cabreúva. Cada gota representa nosso compromisso 
              com a pureza, sustentabilidade e bem-estar dos nossos consumidores.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="glass-card p-6 rounded-xl">
                <div className="w-16 h-16 bg-water-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets size={32} className="text-water-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Pureza Natural</h3>
                <p className="text-gray-600">Extraída de fontes naturalmente protegidas, nossa água preserva todos os minerais benéficos para a saúde.</p>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <div className="w-16 h-16 bg-water-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets size={32} className="text-water-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Qualidade Superior</h3>
                <p className="text-gray-600">Rigorosos processos de qualidade garantem que cada garrafa atenda aos mais elevados padrões internacionais.</p>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <div className="w-16 h-16 bg-water-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets size={32} className="text-water-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Sustentabilidade</h3>
                <p className="text-gray-600">Compromisso com práticas responsáveis para preservar nossos recursos hídricos para as futuras gerações.</p>
              </div>
            </div>
            
            <div className="mt-16">
              <Link to="/historia" className="btn-outline">Conheça Nossa História</Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-20 px-6 bg-water-50">
        <div className="container mx-auto">
          <h2 className="section-title text-center mb-16">Nossos Produtos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="product-card rounded-xl overflow-hidden">
              <LazyImage 
                src="https://images.unsplash.com/photo-1564419320461-6870880221ad?q=80&w=987" 
                alt="Água Mineral 500ml"
                className="aspect-[3/4] object-cover"
              />
              <div className="product-overlay">
                <h3 className="text-xl font-bold mb-2">Água Mineral 500ml</h3>
                <p className="text-white/90 mb-4">Perfeita para o dia a dia, hidratação prática e pura.</p>
                <Link to="/produtos" className="text-white underline">Ver detalhes</Link>
              </div>
            </div>
            
            <div className="product-card rounded-xl overflow-hidden">
              <LazyImage 
                src="https://images.unsplash.com/photo-1616118132534-381148898bb4?q=80&w=987" 
                alt="Água Mineral 1.5L"
                className="aspect-[3/4] object-cover"
              />
              <div className="product-overlay">
                <h3 className="text-xl font-bold mb-2">Água Mineral 1.5L</h3>
                <p className="text-white/90 mb-4">Ideal para famílias, hidratação para todos os momentos.</p>
                <Link to="/produtos" className="text-white underline">Ver detalhes</Link>
              </div>
            </div>
            
            <div className="product-card rounded-xl overflow-hidden">
              <LazyImage 
                src="https://images.unsplash.com/photo-1606856110002-d0991ce78250?q=80&w=987" 
                alt="Água Mineral 5L"
                className="aspect-[3/4] object-cover"
              />
              <div className="product-overlay">
                <h3 className="text-xl font-bold mb-2">Água Mineral 5L</h3>
                <p className="text-white/90 mb-4">Perfeita para escritórios e consumo residencial.</p>
                <Link to="/produtos" className="text-white underline">Ver detalhes</Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/produtos" className="btn-primary">Ver Todos os Produtos</Link>
          </div>
        </div>
      </section>
      
      {/* Quality Section */}
      <section className="py-20 px-6 bg-quality-bg bg-cover bg-center">
        <div className="container mx-auto relative z-10">
          <div className="max-w-2xl mx-auto glass-card p-10 rounded-xl">
            <h2 className="section-title text-center mb-8">Compromisso com a Qualidade</h2>
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
            
            <div className="text-center">
              <Link to="/qualidade" className="btn-outline">Saiba Mais</Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title mb-6">Entre em Contato</h2>
            <p className="text-lg text-gray-700 mb-10">
              Estamos à disposição para atender suas necessidades e responder a todas as suas dúvidas.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Fale Conosco</h3>
                <p className="mb-6">Nossa equipe está pronta para atendê-lo.</p>
                <a href="mailto:contato@aguasdecabreuva.com.br" className="text-water-600 hover:underline block mb-3">
                  contato@aguasdecabreuva.com.br
                </a>
                <a href="tel:+551146333700" className="text-water-600 hover:underline block">
                  +55 (11) 4633-3700
                </a>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Visite-nos</h3>
                <p className="mb-6">Conheça nossa fábrica e fontes naturais.</p>
                <address className="not-italic text-gray-700">
                  Rod. Dom Gabriel Paulino Bueno Couto, km 96,5<br />
                  Cabreúva - SP, 13315-000
                </address>
              </div>
            </div>
            
            <Link to="/contato" className="btn-primary">Formulário de Contato</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
