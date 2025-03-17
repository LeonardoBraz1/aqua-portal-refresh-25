
import React, { useState } from 'react';
import { Mail, Phone, User } from 'lucide-react';
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
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { sendEmail } from '../../utils/emailService';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [isSending, setIsSending] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    
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
        title: "Mensagem enviada com sucesso!",
        description: "Agradecemos seu contato. Retornaremos em breve.",
        variant: "default",
      });
      
      const form = e.target as HTMLFormElement;
      form.reset();
      setFormOpen(false);
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Erro ao enviar mensagem",
        description: "Por favor, tente novamente mais tarde ou entre em contato por telefone.",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contato" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-water-500 section-title">Entre em Contato</h2>
          <p className="text-lg text-gray-700 mb-10">
            Estamos à disposição para atender suas necessidades e responder a todas as suas dúvidas.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-water-50 to-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4">Fale Conosco</h3>
              <p className="mb-6">Nossa equipe está pronta para atendê-lo.</p>
              <a href="mailto:leonardo.jesus@tramar.com.br" className="text-water-600 hover:text-water-800 hover:underline flex items-center justify-center gap-2 mb-3 transition-colors">
                <Mail size={18} />
                <span>leonardo.jesus@tramar.com.br</span>
              </a>
              <a href="tel:+551146333700" className="text-water-600 hover:text-water-800 hover:underline flex items-center justify-center gap-2 transition-colors">
                <Phone size={18} />
                <span>+55 (11) 4633-3700</span>
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-water-50 to-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4">Visite-nos</h3>
              <p className="mb-6">Conheça nossa fábrica e fontes naturais.</p>
              <address className="not-italic text-gray-700">
                Rod. Dom Gabriel Paulino Bueno Couto, km 96,5<br />
                Cabreúva - SP, 13315-000
              </address>
            </div>
          </div>
          
          <Dialog open={formOpen} onOpenChange={setFormOpen}>
            <DialogTrigger asChild>
              <Button className="bg-water-600 hover:bg-water-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg">Enviar Mensagem</Button>
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
                  <Label htmlFor="name">Nome</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-400">
                      <User size={16} />
                    </span>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="Seu nome completo" 
                      required 
                      className="pl-9" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-400">
                      <Mail size={16} />
                    </span>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="seu.email@exemplo.com" 
                      required 
                      className="pl-9" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-400">
                      <Phone size={16} />
                    </span>
                    <Input 
                      id="phone" 
                      name="phone" 
                      placeholder="(00) 00000-0000" 
                      className="pl-9" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="Digite sua mensagem..." 
                    required 
                    className="min-h-[120px]" 
                  />
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
  );
};

export default ContactSection;
