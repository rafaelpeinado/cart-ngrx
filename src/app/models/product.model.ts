export interface Product {
  // product
  id: number;
  model: string;
  urlImage: string;
  // product detail
  color: string;
  size: string;
  price: number;
  description: string;
  brand: string;
  // stock
  quantity: number;
}
