import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Offset for the navbar height
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-water-950 text-white/90 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold flex items-center">
              <span className="text-water-400">Águas</span>
              <span className="ml-2">de Cabreúva</span>
            </h2>
            <p className="text-white/70 leading-relaxed">
              Comprometidos com a pureza e qualidade das águas naturais, proporcionando saúde e bem-estar para você e sua família.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-water-900 hover:bg-water-800 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-water-900 hover:bg-water-800 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-water-900 hover:bg-water-800 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#home" 
                  className="text-white/70 hover:text-water-400 transition-colors duration-300 flex items-center"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('home');
                  }}
                >
                  <span className="h-1 w-4 bg-water-700 rounded-full mr-2"></span>
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#nossa-missao" 
                  className="text-white/70 hover:text-water-400 transition-colors duration-300 flex items-center"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('nossa-missao');
                  }}
                >
                  <span className="h-1 w-4 bg-water-700 rounded-full mr-2"></span>
                  Nossa Missão
                </a>
              </li>
              <li>
                <a 
                  href="#produtos" 
                  className="text-white/70 hover:text-water-400 transition-colors duration-300 flex items-center"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('produtos');
                  }}
                >
                  <span className="h-1 w-4 bg-water-700 rounded-full mr-2"></span>
                  Produtos
                </a>
              </li>
              <li>
                <a 
                  href="#qualidade" 
                  className="text-white/70 hover:text-water-400 transition-colors duration-300 flex items-center"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('qualidade');
                  }}
                >
                  <span className="h-1 w-4 bg-water-700 rounded-full mr-2"></span>
                  Qualidade
                </a>
              </li>
              <li>
                <a 
                  href="#contato" 
                  className="text-white/70 hover:text-water-400 transition-colors duration-300 flex items-center"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contato');
                  }}
                >
                  <span className="h-1 w-4 bg-water-700 rounded-full mr-2"></span>
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-water-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-white/70">Rua da Fonte, 123, Cabreúva - SP, 13315-000</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-water-400 mr-3 flex-shrink-0" />
                <span className="text-white/70">(11) 9876-5432</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-water-400 mr-3 flex-shrink-0" />
                <span className="text-white/70">contato@aguasdecabreuva.com.br</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Horário de Atendimento</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Clock size={20} className="text-water-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-white/70">Segunda - Sexta</p>
                  <p className="text-white/90 font-medium">8:00 - 18:00</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock size={20} className="text-water-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-white/70">Sábado</p>
                  <p className="text-white/90 font-medium">9:00 - 14:00</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock size={20} className="text-water-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-white/70">Domingo</p>
                  <p className="text-white/90 font-medium">Fechado</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-water-800/50 mt-12 pt-8 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} Águas de Cabreúva. Todos os direitos reservados.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <Link to="/politica-de-privacidade" className="hover:text-water-400 transition-colors duration-300">
              Política de Privacidade
            </Link>
            <Link to="/termos-de-uso" className="hover:text-water-400 transition-colors duration-300">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
