
import React, { useEffect, useRef } from 'react';
import { ChevronDown, Droplets, Shield, Award, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import LazyImage from '../components/LazyImage';

const HomePage = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  const handleScroll = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="hero-section bg-hero-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-water-950/40 to-water-900/10"></div>
        
        <div className="water-wave"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white font-medium animate-fade-in">
              Água Mineral Natural
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white animate-slide-down" style={{ animationDelay: '0.2s' }}>
              Pura e Refrescante
            </h1>
            <p className="text-xl text-white/90 mb-8 animate-slide-down" style={{ animationDelay: '0.4s' }}>
              Extraída diretamente da fonte, nossa água mineral natural preserva todos os minerais essenciais para sua saúde e bem-estar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-down" style={{ animationDelay: '0.6s' }}>
              <Link to="/produtos" className="btn-primary">
                Nossos Produtos
              </Link>
              <Link to="/contato" className="border-2 border-white text-white hover:bg-white/10 font-medium py-2 px-6 rounded-full shadow-md transition-all duration-300 transform hover:scale-[1.02]">
                Entre em Contato
              </Link>
            </div>
          </div>
        </div>
        
        <button 
          onClick={() => handleScroll(featuresRef)}
          className="scroll-indicator"
          aria-label="Rolar para baixo"
        >
          <ChevronDown className="text-gray-700" />
        </button>
      </section>

      <section ref={featuresRef} className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mx-auto reveal-on-scroll">Por que escolher nossa água?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto reveal-on-scroll">
              Nossa água mineral oferece pureza incomparável e minerais essenciais para seu organismo.
            </p>
          </div>
          
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

      <section ref={aboutRef} className="py-24 bg-water-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-water-texture bg-cover opacity-10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal-on-scroll">
              <h2 className="section-title">Sobre a Águas de Cabreúva</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Desde 1995, a Águas de Cabreúva tem se dedicado a oferecer a mais pura água mineral natural, extraída das fontes protegidas da Serra do Japi, em Cabreúva, São Paulo.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Nossa missão é proporcionar saúde e bem-estar através de uma água mineral de alta qualidade, rica em minerais essenciais e com propriedades benéficas para o organismo.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Comprometidos com a sustentabilidade e a preservação ambiental, investimos constantemente em tecnologias e processos que minimizam nosso impacto no meio ambiente.
              </p>
              <Link to="/historia" className="btn-primary inline-flex items-center">
                Nossa História
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            <div className="relative reveal-on-scroll">
              <div className="absolute -inset-4 -rotate-6 bg-water-200 rounded-xl"></div>
              <div className="absolute -inset-4 rotate-3 bg-water-300 rounded-xl"></div>
              <LazyImage 
                src="https://images.unsplash.com/photo-1536939459926-301728717817?q=80&w=1974&auto=format&fit=crop"
                alt="Fonte natural de água" 
                className="relative rounded-xl aspect-[4/3] shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mx-auto reveal-on-scroll">Nossos Produtos Populares</h2>
            <p className="text-gray-600 max-w-2xl mx-auto reveal-on-scroll">
              Descubra nossa linha completa de água mineral natural em diversas embalagens.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="product-card rounded-xl overflow-hidden shadow-lg reveal-on-scroll">
              <LazyImage 
                src="https://images.unsplash.com/photo-1616118132534-381148898bb4?q=80&w=1974&auto=format&fit=crop"
                alt="Garrafa de água mineral 500ml" 
                className="aspect-[3/4]"
              />
              <div className="product-overlay">
                <h3 className="text-xl font-semibold mb-2">Água Sem Gás 500ml</h3>
                <p className="text-white/80 mb-4">Ideal para o dia a dia, hidratação pura em formato compacto.</p>
                <Link to="/produtos" className="btn-primary inline-block">
                  Ver Detalhes
                </Link>
              </div>
            </div>
            
            <div className="product-card rounded-xl overflow-hidden shadow-lg reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <LazyImage 
                src="https://images.unsplash.com/photo-1606168094336-48f8b0c8d191?q=80&w=2070&auto=format&fit=crop"
                alt="Garrafa de água mineral 1.5L" 
                className="aspect-[3/4]"
              />
              <div className="product-overlay">
                <h3 className="text-xl font-semibold mb-2">Água Com Gás 1L</h3>
                <p className="text-white/80 mb-4">O equilíbrio perfeito entre refrescância e sabor para suas refeições.</p>
                <Link to="/produtos" className="btn-primary inline-block">
                  Ver Detalhes
                </Link>
              </div>
            </div>
            
            <div className="product-card rounded-xl overflow-hidden shadow-lg reveal-on-scroll" style={{ transitionDelay: '0.4s' }}>
              <LazyImage 
                src="https://images.unsplash.com/photo-1610284248524-5a1e7e30acc7?q=80&w=1974&auto=format&fit=crop"
                alt="Garrafão de água mineral 20L" 
                className="aspect-[3/4]"
              />
              <div className="product-overlay">
                <h3 className="text-xl font-semibold mb-2">Garrafão 20L</h3>
                <p className="text-white/80 mb-4">Perfeito para residências e escritórios, garantindo hidratação contínua.</p>
                <Link to="/produtos" className="btn-primary inline-block">
                  Ver Detalhes
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12 reveal-on-scroll">
            <Link to="/produtos" className="btn-outline inline-flex items-center">
              Ver Todos os Produtos
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-water-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-water-700 to-water-900/90"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-semibold mb-8 reveal-on-scroll">Experimente a pureza da natureza</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12 reveal-on-scroll">
              Nossa água mineral é extraída de fontes naturais protegidas, garantindo pureza e qualidade inigualáveis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center reveal-on-scroll">
              <Link to="/produtos" className="bg-white text-water-700 hover:bg-white/90 font-medium py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
                Conheça Nossos Produtos
              </Link>
              <Link to="/contato" className="border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-full shadow-md transition-all duration-300 transform hover:scale-[1.02]">
                Entre em Contato
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
