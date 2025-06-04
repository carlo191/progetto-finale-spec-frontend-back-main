export type Product = {
  title: string;
  category: string;
  brand: string;
  model?: string;
  price: number;
  description?: string;
  image?: string;
  inStock?: boolean; // se disponibile o meno
  rating?: number; // valutazione del prodotto
  reviews?: number;
};

