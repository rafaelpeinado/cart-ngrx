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

export const changeQuantityItemCartSuccess = createAction(
  '[Cart API] Change Quantity Item Cart Success',
  props<{ itemsCart: ItemCart[] }>()
);

export const changeQuantityItemCartFailure = createAction(
  '[Cart API] Change Quantity Cart Fail',
  props<{ error: string }>()
);

export const removeItemCartSuccess = createAction(
  '[Cart API] Remove Item Cart Success',
  props<{ itemsCart: ItemCart[] }>()
);

export const removeItemCartFailure = createAction(
  '[Cart API] Remove Item Cart Fail',
  props<{ error: string }>()
);

export const cleanCartSuccess = createAction(
  '[Cart API] Clean Cart Success',
  props<{ itemsCart: ItemCart[] }>()
);

export const cleanCartFailure = createAction(
  '[Cart API] Clean Cart Fail',
  props<{ error: string }>()
);
