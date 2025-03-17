
import React, { useEffect } from 'react';
import LazyImage from '../components/LazyImage';

const HistoryPage = () => {
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

  return (
    <>
      <section className="py-32 bg-water-50 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-water-100 to-water-50/0"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-1 bg-water-100 rounded-full border border-water-200 text-water-800 font-medium animate-fade-in">
              Nossa Trajetória
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-down" style={{ animationDelay: '0.2s' }}>
              História da Águas de Cabreúva
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-slide-down" style={{ animationDelay: '0.4s' }}>
              Uma jornada de dedicação à qualidade e pureza desde 1995
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal-on-scroll">
              <h2 className="section-title">Nossas Origens</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                A história da Águas de Cabreúva começou em 1995, quando um grupo de empreendedores descobriu uma fonte natural de água excepcionalmente pura nas encostas da Serra do Japi, em Cabreúva, São Paulo.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Impressionados com a qualidade e pureza da água, decidiram compartilhar essa riqueza natural com mais pessoas, fundando assim a empresa Águas de Cabreúva, com o compromisso de preservar a fonte e oferecer água mineral da mais alta qualidade.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Os primeiros anos foram dedicados a estudos hidrogeológicos e análises laboratoriais, que confirmaram as propriedades excepcionais da água. Com todas as aprovações e certificações necessárias, a empresa iniciou oficialmente sua operação em 1997.
              </p>
            </div>
            
            <div className="relative reveal-on-scroll">
              <div className="absolute -inset-4 -rotate-3 bg-water-100 rounded-xl"></div>
              <LazyImage 
                src="https://images.unsplash.com/photo-1620220944963-16f4796ca41e?q=80&w=2070&auto=format&fit=crop"
                alt="Fonte natural da Serra do Japi" 
                className="relative rounded-xl aspect-[4/3] shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-water-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative reveal-on-scroll">
              <div className="absolute -inset-4 rotate-2 bg-water-100 rounded-xl"></div>
              <LazyImage 
                src="https://images.unsplash.com/photo-1564419320408-38e24e038739?q=80&w=2070&auto=format&fit=crop"
                alt="Fábrica da Águas de Cabreúva nos anos 2000" 
                className="relative rounded-xl aspect-[4/3] shadow-xl"
              />
            </div>
            
            <div className="order-1 lg:order-2 reveal-on-scroll">
              <h2 className="section-title">Crescimento e Expansão</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Nos anos 2000, a Águas de Cabreúva viveu um período de expansão significativa. Com o aumento da demanda por água mineral de qualidade, a empresa investiu em infraestrutura, ampliando sua capacidade produtiva e modernizando seus equipamentos.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Em 2005, foi inaugurada uma nova planta industrial, equipada com tecnologia de ponta para envasamento, garantindo a máxima pureza e qualidade do produto final, sem interferir nas propriedades naturais da água.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Durante esse período, a empresa também expandiu sua linha de produtos, passando a oferecer água em diferentes embalagens e tamanhos, além de lançar a versão com gás, atendendo às diversas necessidades dos consumidores.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal-on-scroll">
              <h2 className="section-title">Compromisso com a Sustentabilidade</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                A partir de 2010, a Águas de Cabreúva intensificou seu compromisso com a sustentabilidade, implementando práticas mais responsáveis em toda a cadeia produtiva. A empresa investiu em tecnologias para redução do consumo de energia e água no processo industrial.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Uma das iniciativas mais importantes foi o desenvolvimento de embalagens mais sustentáveis, com redução na quantidade de plástico utilizado e o uso de materiais recicláveis. Além disso, a empresa estabeleceu parcerias com cooperativas de reciclagem para garantir o destino correto das embalagens pós-consumo.
              </p>
              <p className="text-gray-700 leading-relaxed">
                A empresa também implementou um programa de preservação da área ao redor da fonte, com reflorestamento e monitoramento constante para garantir a proteção do manancial e da biodiversidade local.
              </p>
            </div>
            
            <div className="relative reveal-on-scroll">
              <div className="absolute -inset-4 -rotate-2 bg-water-100 rounded-xl"></div>
              <LazyImage 
                src="https://images.unsplash.com/photo-1498582975230-a4c6e3e7c9a0?q=80&w=2070&auto=format&fit=crop"
                alt="Área preservada ao redor da fonte" 
                className="relative rounded-xl aspect-[4/3] shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-water-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mx-auto reveal-on-scroll">Nossa Linha do Tempo</h2>
            <p className="text-gray-600 max-w-2xl mx-auto reveal-on-scroll">
              Conheça os principais marcos na história da Águas de Cabreúva
            </p>
          </div>
          
          <div className="timeline-container py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="timeline-item md:text-right reveal-on-scroll">
                <div className="bg-white p-6 rounded-xl shadow-md inline-block">
                  <h3 className="text-xl font-semibold text-water-800 mb-2">1995</h3>
                  <p className="text-gray-600">Descoberta da fonte natural na Serra do Japi e fundação da empresa</p>
                </div>
              </div>
              
              <div className="timeline-item md:text-left reveal-on-scroll">
                <div className="bg-white p-6 rounded-xl shadow-md inline-block">
                  <h3 className="text-xl font-semibold text-water-800 mb-2">1997</h3>
                  <p className="text-gray-600">Início oficial das operações com a primeira linha de envasamento</p>
                </div>
              </div>
              
              <div className="timeline-item md:text-right reveal-on-scroll">
                <div className="bg-white p-6 rounded-xl shadow-md inline-block">
                  <h3 className="text-xl font-semibold text-water-800 mb-2">2005</h3>
                  <p className="text-gray-600">Inauguração da nova planta industrial com tecnologia avançada</p>
                </div>
              </div>
              
              <div className="timeline-item md:text-left reveal-on-scroll">
                <div className="bg-white p-6 rounded-xl shadow-md inline-block">
                  <h3 className="text-xl font-semibold text-water-800 mb-2">2008</h3>
                  <p className="text-gray-600">Lançamento da linha de água com gás e expansão da distribuição</p>
                </div>
              </div>
              
              <div className="timeline-item md:text-right reveal-on-scroll">
                <div className="bg-white p-6 rounded-xl shadow-md inline-block">
                  <h3 className="text-xl font-semibold text-water-800 mb-2">2010</h3>
                  <p className="text-gray-600">Implementação do programa de sustentabilidade e preservação ambiental</p>
                </div>
              </div>
              
              <div className="timeline-item md:text-left reveal-on-scroll">
                <div className="bg-white p-6 rounded-xl shadow-md inline-block">
                  <h3 className="text-xl font-semibold text-water-800 mb-2">2015</h3>
                  <p className="text-gray-600">Celebração de 20 anos e obtenção de certificações internacionais</p>
                </div>
              </div>
              
              <div className="timeline-item md:text-right reveal-on-scroll">
                <div className="bg-white p-6 rounded-xl shadow-md inline-block">
                  <h3 className="text-xl font-semibold text-water-800 mb-2">2018</h3>
                  <p className="text-gray-600">Renovação da identidade visual e modernização da marca</p>
                </div>
              </div>
              
              <div className="timeline-item md:text-left reveal-on-scroll">
                <div className="bg-white p-6 rounded-xl shadow-md inline-block">
                  <h3 className="text-xl font-semibold text-water-800 mb-2">2023</h3>
                  <p className="text-gray-600">Reconhecimento como uma das empresas mais sustentáveis do setor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-water-700 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 reveal-on-scroll">Nosso Compromisso com o Futuro</h2>
            <p className="text-xl mb-8 text-white/90 reveal-on-scroll">
              Continuamos comprometidos com a qualidade, inovação e sustentabilidade, buscando constantemente maneiras de melhorar nossos produtos e processos, sempre respeitando a natureza e oferecendo o melhor aos nossos consumidores.
            </p>
            <p className="text-xl text-white/90 reveal-on-scroll">
              Nossa história é construída com dedicação, respeito ao meio ambiente e ao consumidor, valores que permanecerão como pilares da Águas de Cabreúva nos próximos capítulos que ainda serão escritos.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HistoryPage;
