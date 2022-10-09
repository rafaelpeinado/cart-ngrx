import { createAction, props } from "@ngrx/store";
import { ItemCart } from "../../models/item-cart.model";

export const addItemCart = createAction(
  '[Cart Page] Add Item Cart',
  props<{ itemCart: ItemCart }>()
);

export const loadItemsCart = createAction(
  '[Cart Page] Load Items Cart'
);

export const removeItemCart = createAction(
  '[Cart Page] Remove Item Cart',
  props<{ productId: number }>()
)

export const decreaseItemCart = createAction(
  '[Cart Page] Decrease Item Cart',
  props<{ itemCart: ItemCart }>()
)

export const increaseItemCart = createAction(
  '[Cart Page] Increase Item Cart',
  props<{ itemCart: ItemCart }>()
)
