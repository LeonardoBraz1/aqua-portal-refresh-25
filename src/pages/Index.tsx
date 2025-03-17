
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
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
import ProductCategorySection from '../components/products/ProductCategorySection';
import ProductBenefits from '../components/products/ProductBenefits';
import WholesaleSection from '../components/products/WholesaleSection';
import { sendEmail } from '../utils/emailService';

const Index = () => {
  const { toast } = useToast();
  const [isSending, setIsSending] = React.useState(false);
  
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    
    // Get form data
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;
    
    try {
      const emailData = {
        to_email: "leonardo.jesus@tramar.com.br",
        from_name: name,
        from_email: email,
        phone: phone,
        message: message,
      };
      
      await sendEmail(emailData);
      
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });
      
      // Reset form
      const form = e.target as HTMLFormElement;
      form.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Erro ao enviar mensagem",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
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
              <a href="#produtos" className="btn-primary inline-flex items-center gap-2 bg-white text-water-600 hover:bg-water-50 px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg">
                Conheça Nossos Produtos <Droplets size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <a href="#nossa-missao" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator animate-bounce w-10 h-10 flex items-center justify-center rounded-full bg-white/30 backdrop-blur-sm">
          <ArrowDown size={24} className="text-white" />
        </a>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent water-wave"></div>
      </section>
      
      {/* About Section */}
      <section id="nossa-missao" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-water-500 section-title">Nossa Missão</h2>
            <p className="text-lg text-gray-700 mb-10">
              A Águas de Cabreúva está comprometida com a excelência, oferecendo água mineral da mais alta qualidade, 
              extraída de fontes naturais protegidas no coração de Cabreúva. Cada gota representa nosso compromisso 
              com a pureza, sustentabilidade e bem-estar dos nossos consumidores.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white shadow-lg rounded-xl p-6">
                <div className="w-16 h-16 bg-water-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets size={32} className="text-water-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Pureza Natural</h3>
                <p className="text-gray-600">Extraída de fontes naturalmente protegidas, nossa água preserva todos os minerais benéficos para a saúde.</p>
              </div>
              
              <div className="bg-white shadow-lg rounded-xl p-6">
                <div className="w-16 h-16 bg-water-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets size={32} className="text-water-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Qualidade Superior</h3>
                <p className="text-gray-600">Rigorosos processos de qualidade garantem que cada garrafa atenda aos mais elevados padrões internacionais.</p>
              </div>
              
              <div className="bg-white shadow-lg rounded-xl p-6">
                <div className="w-16 h-16 bg-water-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets size={32} className="text-water-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Sustentabilidade</h3>
                <p className="text-gray-600">Compromisso com práticas responsáveis para preservar nossos recursos hídricos para as futuras gerações.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section id="produtos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-800 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-water-500 section-title">Nossos Produtos</h2>
          
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
        </div>
      </section>
      
      {/* Quality Section */}
      <section id="qualidade" className="py-20 px-6 bg-gradient-to-r from-water-100 to-water-200">
        <div className="container mx-auto relative z-10">
          <div className="max-w-2xl mx-auto bg-white p-10 rounded-xl shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-water-500 section-title">Compromisso com a Qualidade</h2>
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
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section id="contato" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-water-500 section-title">Entre em Contato</h2>
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
                <Button className="bg-water-600 hover:bg-water-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg">Formulário de Contato</Button>
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
                    <Button 
                      type="submit" 
                      className="bg-water-600 hover:bg-water-700 text-white"
                      disabled={isSending}
                    >
                      {isSending ? "Enviando..." : "Enviar Mensagem"}
                    </Button>
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
