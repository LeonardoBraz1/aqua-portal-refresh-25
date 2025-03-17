
import React, { useRef } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import LazyImage from '../components/LazyImage';
import { ArrowDown, Droplets, Mail, Phone, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    
    // Reset form
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen bg-gradient-to-b from-water-800 to-water-600 flex items-center">
        <div className="container mx-auto px-6 relative z-10 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Água Mineral Natural
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md">
              Pura, Refrescante e diretamente da Natureza
            </p>
            <div>
              <Link to="#produtos" className="btn-primary inline-flex items-center gap-2">
                Conheça Nossos Produtos <Droplets size={18} />
              </Link>
            </div>
          </div>
        </div>
        
        <a href="#nossa-missao" className="scroll-indicator">
          <ArrowDown size={24} className="text-white" />
        </a>
        
        <div className="water-wave"></div>
      </section>
      
      {/* About Section */}
      <section id="nossa-missao" className="py-20 px-6 bg-white">
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
              <Link to="#historia" className="btn-outline">Conheça Nossa História</Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section id="produtos" className="py-20 px-6 bg-water-50">
        <div className="container mx-auto">
          <h2 className="section-title text-center mb-16">Nossos Produtos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="product-card rounded-xl overflow-hidden bg-white shadow-lg">
              <LazyImage 
                src="https://images.unsplash.com/photo-1564419320461-6870880221ad?q=80&w=987" 
                alt="Água Mineral 500ml"
                className="aspect-[3/4] object-cover"
              />
              <div className="product-overlay">
                <h3 className="text-xl font-bold mb-2">Água Mineral 500ml</h3>
                <p className="text-white/90 mb-4">Perfeita para o dia a dia, hidratação prática e pura.</p>
                <Link to="#produtos" className="text-white underline">Ver detalhes</Link>
              </div>
            </div>
            
            <div className="product-card rounded-xl overflow-hidden bg-white shadow-lg">
              <LazyImage 
                src="https://images.unsplash.com/photo-1616118132534-381148898bb4?q=80&w=987" 
                alt="Água Mineral 1.5L"
                className="aspect-[3/4] object-cover"
              />
              <div className="product-overlay">
                <h3 className="text-xl font-bold mb-2">Água Mineral 1.5L</h3>
                <p className="text-white/90 mb-4">Ideal para famílias, hidratação para todos os momentos.</p>
                <Link to="#produtos" className="text-white underline">Ver detalhes</Link>
              </div>
            </div>
            
            <div className="product-card rounded-xl overflow-hidden bg-white shadow-lg">
              <LazyImage 
                src="https://images.unsplash.com/photo-1606856110002-d0991ce78250?q=80&w=987" 
                alt="Água Mineral 5L"
                className="aspect-[3/4] object-cover"
              />
              <div className="product-overlay">
                <h3 className="text-xl font-bold mb-2">Água Mineral 5L</h3>
                <p className="text-white/90 mb-4">Perfeita para escritórios e consumo residencial.</p>
                <Link to="#produtos" className="text-white underline">Ver detalhes</Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="#produtos" className="btn-primary">Ver Todos os Produtos</Link>
          </div>
        </div>
      </section>
      
      {/* Quality Section */}
      <section id="qualidade" className="py-20 px-6 bg-gradient-to-r from-water-100 to-water-200">
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
              <Link to="#qualidade" className="btn-outline">Saiba Mais</Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section id="contato" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title mb-6">Entre em Contato</h2>
            <p className="text-lg text-gray-700 mb-10">
              Estamos à disposição para atender suas necessidades e responder a todas as suas dúvidas.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4">Fale Conosco</h3>
                <p className="mb-6">Nossa equipe está pronta para atendê-lo.</p>
                <a href="mailto:contato@aguasdecabreuva.com.br" className="text-water-600 hover:underline block mb-3">
                  contato@aguasdecabreuva.com.br
                </a>
                <a href="tel:+551146333700" className="text-water-600 hover:underline block">
                  +55 (11) 4633-3700
                </a>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4">Visite-nos</h3>
                <p className="mb-6">Conheça nossa fábrica e fontes naturais.</p>
                <address className="not-italic text-gray-700">
                  Rod. Dom Gabriel Paulino Bueno Couto, km 96,5<br />
                  Cabreúva - SP, 13315-000
                </address>
              </div>
            </div>
            
            {/* Contact Form Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <Button className="btn-primary">Formulário de Contato</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Envie sua mensagem</DialogTitle>
                  <DialogDescription>
                    Preencha o formulário abaixo e entraremos em contato o mais breve possível.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleFormSubmit} className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nome
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-400">
                        <User size={16} />
                      </span>
                      <Input id="name" placeholder="Seu nome completo" required className="pl-9" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-400">
                        <Mail size={16} />
                      </span>
                      <Input id="email" type="email" placeholder="seu.email@exemplo.com" required className="pl-9" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Telefone
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-400">
                        <Phone size={16} />
                      </span>
                      <Input id="phone" placeholder="(00) 00000-0000" className="pl-9" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Mensagem
                    </label>
                    <Textarea id="message" placeholder="Digite sua mensagem..." required className="min-h-[120px]" />
                  </div>
                  
                  <div className="flex justify-end">
                    <Button type="submit">Enviar Mensagem</Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
