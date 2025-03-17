
import React from 'react';
import { ShoppingCart, Info } from 'lucide-react';
import LazyImage from '../LazyImage';
import { toast } from '@/components/ui/use-toast';
import { Product } from '../../types/Product';
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleBuyNow = () => {
    toast({
      title: "Produto adicionado",
      description: `${product.name} foi adicionado ao seu carrinho!`,
    });
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg reveal-on-scroll transition-all duration-300 hover:shadow-xl border border-gray-100">
      <div className="relative h-[300px]">
        <LazyImage 
          src={product.image}
          alt={product.name} 
          className="h-full"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        
        <div className="mb-6">
          <h4 className="text-sm text-gray-500 mb-2">Tamanhos disponíveis</h4>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <span key={size} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                {size}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex gap-3">
          <button 
            onClick={handleBuyNow}
            className="flex-1 bg-water-600 hover:bg-water-700 text-white font-medium py-2 px-4 rounded-lg shadow-sm transition-all duration-300 flex items-center justify-center gap-2"
          >
            <ShoppingCart size={18} />
            Comprar Agora
          </button>
          <button className="bg-water-50 hover:bg-water-100 text-water-700 font-medium py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center">
            <Info size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
