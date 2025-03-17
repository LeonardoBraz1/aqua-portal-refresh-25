
import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Twitter, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Offset for the navbar height
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ['home', 'nossa-missao', 'produtos', 'qualidade', 'contato'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (sectionId: string) => activeSection === sectionId;

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#home" 
          className="relative z-10"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <span className="text-water-600">Águas</span> 
            <span className={`transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              de Cabreúva
            </span>
          </h1>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            <a 
              href="#home" 
              className={`nav-link ${isScrolled ? 'text-gray-800' : 'text-white'} ${isActive('home') ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
            >
              Home
            </a>
            <a 
              href="#nossa-missao" 
              className={`nav-link ${isScrolled ? 'text-gray-800' : 'text-white'} ${isActive('nossa-missao') ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('nossa-missao');
              }}
            >
              Nossa Missão
            </a>
            <a 
              href="#produtos" 
              className={`nav-link ${isScrolled ? 'text-gray-800' : 'text-white'} ${isActive('produtos') ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('produtos');
              }}
            >
              Produtos
            </a>
            <a 
              href="#qualidade" 
              className={`nav-link ${isScrolled ? 'text-gray-800' : 'text-white'} ${isActive('qualidade') ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('qualidade');
              }}
            >
              Qualidade
            </a>
            <a 
              href="#contato" 
              className={`nav-link ${isScrolled ? 'text-gray-800' : 'text-white'} ${isActive('contato') ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contato');
              }}
            >
              Contato
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`p-2 rounded-full transition-colors duration-300 hover:text-water-500 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              <Facebook size={18} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`p-2 rounded-full transition-colors duration-300 hover:text-water-500 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              <Instagram size={18} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`p-2 rounded-full transition-colors duration-300 hover:text-water-500 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              <Twitter size={18} />
            </a>
          </div>
        </nav>
        
        {/* Mobile Menu Toggle */}
        <button 
          onClick={toggleMenu} 
          className={`md:hidden p-2 rounded-full z-50 transition-colors duration-300 ${
            isOpen ? 'text-white' : isScrolled ? 'text-gray-800' : 'text-white'
          }`}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Mobile Menu */}
        <div 
          className={`fixed inset-0 z-40 bg-water-900/95 flex flex-col justify-center items-center transition-all duration-500 ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <nav className="flex flex-col items-center gap-6 text-white">
            <a 
              href="#home" 
              className="text-2xl font-medium hover:text-water-300 transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
            >
              Home
            </a>
            <a 
              href="#nossa-missao" 
              className="text-2xl font-medium hover:text-water-300 transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('nossa-missao');
              }}
            >
              Nossa Missão
            </a>
            <a 
              href="#produtos" 
              className="text-2xl font-medium hover:text-water-300 transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('produtos');
              }}
            >
              Produtos
            </a>
            <a 
              href="#qualidade" 
              className="text-2xl font-medium hover:text-water-300 transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('qualidade');
              }}
            >
              Qualidade
            </a>
            <a 
              href="#contato" 
              className="text-2xl font-medium hover:text-water-300 transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contato');
              }}
            >
              Contato
            </a>
          </nav>
          
          <div className="flex items-center gap-6 mt-12">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 text-white hover:text-water-300 transition-colors duration-300"
            >
              <Facebook size={24} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 text-white hover:text-water-300 transition-colors duration-300"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 text-white hover:text-water-300 transition-colors duration-300"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
