
import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Twitter, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activePath, setActivePath] = useState('/');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handlePathChange = () => {
      setActivePath(window.location.pathname);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('popstate', handlePathChange);
    
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handlePathChange);
    };
  }, []);

  const isActive = (path: string) => activePath === path;

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link 
          to="/" 
          className="relative z-10"
          onClick={() => setActivePath('/')}
        >
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <span className="text-water-600">Águas</span> 
            <span className={`transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              de Cabreúva
            </span>
          </h1>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            <Link 
              to="/" 
              className={`nav-link ${isScrolled ? 'text-gray-800' : 'text-white'} ${isActive('/') ? 'active' : ''}`}
              onClick={() => setActivePath('/')}
            >
              Home
            </Link>
            <Link 
              to="/historia" 
              className={`nav-link ${isScrolled ? 'text-gray-800' : 'text-white'} ${isActive('/historia') ? 'active' : ''}`}
              onClick={() => setActivePath('/historia')}
            >
              História
            </Link>
            <Link 
              to="/produtos" 
              className={`nav-link ${isScrolled ? 'text-gray-800' : 'text-white'} ${isActive('/produtos') ? 'active' : ''}`}
              onClick={() => setActivePath('/produtos')}
            >
              Produtos
            </Link>
            <Link 
              to="/qualidade" 
              className={`nav-link ${isScrolled ? 'text-gray-800' : 'text-white'} ${isActive('/qualidade') ? 'active' : ''}`}
              onClick={() => setActivePath('/qualidade')}
            >
              Qualidade
            </Link>
            <Link 
              to="/contato" 
              className={`nav-link ${isScrolled ? 'text-gray-800' : 'text-white'} ${isActive('/contato') ? 'active' : ''}`}
              onClick={() => setActivePath('/contato')}
            >
              Contato
            </Link>
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
          onClick={toggleMenu}
        >
          <nav className="flex flex-col items-center gap-6 text-white">
            <Link 
              to="/" 
              className="text-2xl font-medium hover:text-water-300 transition-colors duration-300"
              onClick={() => { setActivePath('/'); setIsOpen(false); }}
            >
              Home
            </Link>
            <Link 
              to="/historia" 
              className="text-2xl font-medium hover:text-water-300 transition-colors duration-300"
              onClick={() => { setActivePath('/historia'); setIsOpen(false); }}
            >
              História
            </Link>
            <Link 
              to="/produtos" 
              className="text-2xl font-medium hover:text-water-300 transition-colors duration-300"
              onClick={() => { setActivePath('/produtos'); setIsOpen(false); }}
            >
              Produtos
            </Link>
            <Link 
              to="/qualidade" 
              className="text-2xl font-medium hover:text-water-300 transition-colors duration-300"
              onClick={() => { setActivePath('/qualidade'); setIsOpen(false); }}
            >
              Qualidade
            </Link>
            <Link 
              to="/contato" 
              className="text-2xl font-medium hover:text-water-300 transition-colors duration-300"
              onClick={() => { setActivePath('/contato'); setIsOpen(false); }}
            >
              Contato
            </Link>
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
