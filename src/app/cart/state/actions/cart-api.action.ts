import { createAction, props } from "@ngrx/store";
import { ItemCart } from "../../models/item-cart.model";

export const loadItemsCartSuccess = createAction(
  '[Cart API] Load Items Cart Success',
  props<{ itemsCart: ItemCart[] }>()
);

export const loadItemsCartFailure = createAction(
  '[Cart API] Load Items Cart Fail',
  props<{ error: string }>()
);

export const addItemCartSuccess = createAction(
  '[Cart API] Add Item Cart Success',
  props<{ itemsCart: ItemCart[] }>()
);

export const addItemCartFailure = createAction(
  '[Cart API] Add Item Cart Fail',
  props<{ error: string }>()
);
