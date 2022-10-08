import { createAction, props } from "@ngrx/store";
import { ItemCart } from "../../models/item-cart.model";


export const inicializeCart = createAction(
  '[Cart Page] Initialize Cart'
);

export const addItemCart = createAction(
  '[Cart Page] Add Item Cart',
  props<{ itemCart: ItemCart }>()
);

export const loadItemsCart = createAction(
  '[Cart Page] Load Items Cart'
);
