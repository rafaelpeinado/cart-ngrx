import { createReducer, on } from "@ngrx/store";
import { ItemCart } from "../models/item-cart.model";
import { CartApiActions } from "./actions";

export interface CartState {
  items: ItemCart[];
  error: string;
};

const initialState: CartState = {
  items: [],
  error: ''
};

export const cartReducer = createReducer<CartState>(
  initialState,
  on(CartApiActions.addItemCartSuccess, (state, action): CartState => {
    return {
      ...state,
      items: action.itemsCart,
      error: ''
    };
  }),
  on(CartApiActions.addItemCartFailure, (state, action): CartState => {
    return {
      ...state,
      error: action.error
    };
  }),
  on(CartApiActions.loadItemsCartSuccess, (state, action): CartState => {
    return {
      ...state,
      items: action.itemsCart,
      error: ''
    };
  }),
  on(CartApiActions.loadItemsCartFailure, (state, action): CartState => {
    return {
      ...state,
      items: [],
      error: action.error
    }
  })
);
