
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import LazyImage from '../components/LazyImage';
import { ArrowDown, Droplets, Mail, Phone, User } from 'lucide-react';
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
import { products } from '../data/ProductsData';
import ProductFilter from '../components/products/ProductFilter';
import ProductCategorySection from '../components/products/ProductCategorySection';
import ProductBenefits from '../components/products/ProductBenefits';
import WholesaleSection from '../components/products/WholesaleSection';

const Index = () => {
  const { toast } = useToast();
  const [activeCategory, setActiveCategory] = React.useState<string>('all');

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);
  
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;
    
    // In a real application, you would send this data to a server
    console.log(`Form submission to leonardo.jesus@tramar.com.br:`, { name, email, phone, message });
    
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
              <a href="#produtos" className="btn-primary inline-flex items-center gap-2">
                Conheça Nossos Produtos <Droplets size={18} />
              </a>
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
              <a href="#historia" className="btn-outline">Conheça Nossa História</a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section id="produtos" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="section-title text-center mb-16">Nossos Produtos</h2>
          
          <ProductFilter 
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
          
          {activeCategory === 'all' ? (
            <div className="space-y-16">
              <ProductCategorySection 
                categoryName="sem-gas" 
                title="SEM GÁS" 
                borderColor="border-blue-200" 
                products={products}
              />
              <ProductCategorySection 
                categoryName="com-gas" 
                title="COM GÁS" 
                borderColor="border-orange-200" 
                products={products}
              />
              <ProductCategorySection 
                categoryName="galao" 
                title="GARRAFÕES" 
                borderColor="border-green-200" 
                products={products}
              />
            </div>
          ) : (
            <>
              {activeCategory === 'sem-gas' && (
                <ProductCategorySection 
                  categoryName="sem-gas" 
                  title="SEM GÁS" 
                  borderColor="border-blue-200" 
                  products={products}
                />
              )}
              {activeCategory === 'com-gas' && (
                <ProductCategorySection 
                  categoryName="com-gas" 
                  title="COM GÁS" 
                  borderColor="border-orange-200" 
                  products={products}
                />
              )}
              {activeCategory === 'galao' && (
                <ProductCategorySection 
                  categoryName="galao" 
                  title="GARRAFÕES" 
                  borderColor="border-green-200" 
                  products={products}
                />
              )}
            </>
          )}
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
              <a href="#qualidade" className="btn-outline">Saiba Mais</a>
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
                <a href="mailto:leonardo.jesus@tramar.com.br" className="text-water-600 hover:underline block mb-3">
                  leonardo.jesus@tramar.com.br
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
                      <Input id="name" name="name" placeholder="Seu nome completo" required className="pl-9" />
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
                      <Input id="email" name="email" type="email" placeholder="seu.email@exemplo.com" required className="pl-9" />
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
                      <Input id="phone" name="phone" placeholder="(00) 00000-0000" className="pl-9" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Mensagem
                    </label>
                    <Textarea id="message" name="message" placeholder="Digite sua mensagem..." required className="min-h-[120px]" />
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
      
      <ProductBenefits />
      <WholesaleSection />
      <Footer />
    </div>
  );
};

export default Index;
