export interface User {
  name: string;
}

export type Product = {
  _id: string;
  image: string;
  name: string;
  descriptions: string[];
  price: number;
  model: string;
  color: String;
  category: String;
};
