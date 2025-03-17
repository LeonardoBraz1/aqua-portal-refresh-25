
import { Product } from '../types/Product';

export const products: Product[] = [
  {
    id: 1,
    name: "Água Mineral Natural",
    description: "Nossa água mineral natural sem gás, preservando todos os minerais essenciais para sua saúde e bem-estar.",
    sizes: ["300ml", "500ml", "1L", "1.5L", "2L"],
    image: "/lovable-uploads/cd8bf566-beb3-4f8c-8b4f-de9b291f3f0c.png",
    category: "sem-gas"
  },
  {
    id: 2,
    name: "Água Mineral Com Gás",
    description: "Água mineral naturalmente gaseificada, oferecendo refrescância e sabor para acompanhar suas refeições.",
    sizes: ["300ml", "500ml", "1L"],
    image: "/lovable-uploads/cd8bf566-beb3-4f8c-8b4f-de9b291f3f0c.png",
    category: "com-gas"
  },
  {
    id: 5,
    name: "Garrafão de Água Mineral",
    description: "Garrafão retornável com 20 litros de água mineral natural, perfeito para residências e escritórios.",
    sizes: ["20L"],
    image: "https://images.unsplash.com/photo-1610284248524-5a1e7e30acc7?q=80&w=1974&auto=format&fit=crop",
    category: "galao"
  }
];
