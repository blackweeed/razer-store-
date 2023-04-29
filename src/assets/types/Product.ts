export interface User {
  name: string;
}

export type Product = {
  _id: string;
  image: string;
  images: string[];
  name: string;
  description: string;
  descriptions: string[];
  price: number;
  model: string;
  color: string;
  category: string;
  line: string;
  new: boolean;
  exclusive: boolean;
};
