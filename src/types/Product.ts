
export interface Product {
  id: number;
  name: string;
  description: string;
  sizes: string[];
  image: string;
  category: 'sem-gas' | 'com-gas' | 'galao';
}
