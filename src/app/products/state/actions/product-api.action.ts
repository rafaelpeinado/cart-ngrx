import { createAction, props } from "@ngrx/store";
import { Product } from "../../models/product.model";

export const loadProductsSuccess = createAction(
  '[Product API] Load Products Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Product API] Load Products Fail',
  props<{ error: string }>()
);
