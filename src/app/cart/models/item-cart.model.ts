import { Product } from "src/app/products/models/product.model";

export interface ItemCart {
  product: Product,
  quantity: number
}
