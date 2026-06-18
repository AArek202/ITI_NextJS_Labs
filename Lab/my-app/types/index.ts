export interface IProduct {
  _id: string;
  title: string;
  price: number;
  rating: number;
  description: string;
  thumbnail: string;
  category: string;
}

export interface Quote {
  id: number;
  quote: string;
  author: string;
}
