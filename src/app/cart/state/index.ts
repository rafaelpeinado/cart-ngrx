import { CartState } from "./cart.reducer";
import * as AppState from '../../state/app.state';
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { getCurrentProduct } from "src/app/products/state";
import { ItemCart } from "../models/item-cart.model";

export interface State extends AppState.State {
  cart: CartState;
}

const getCartFeatureState = createFeatureSelector<CartState>('cart');

export const getItems = createSelector(
  getCartFeatureState,
  state => state.items
);

export const getTotalPrice = createSelector(
  getCartFeatureState,
  state => state.items && state.items.length > 0 ? state.items.reduce(
    (previousValue, currentValue) => previousValue + (currentValue.quantity * currentValue.product.price), 0) : 0
);

export const getTotalQuantity = createSelector(
  getCartFeatureState,
  state => state.items && state.items.length > 0 ? state.items.reduce(
    (previousValue, currentValue) => previousValue + currentValue.quantity, 0) : '0'
);

export const getQuantityInCartById = createSelector(
  getCartFeatureState,
  getCurrentProduct,
  (state, currentProduct) => {
    const itemCart: ItemCart = state.items.find(i => i.product.id === currentProduct.id);
    return itemCart ? itemCart : { product: currentProduct, quantity: 0 };
  }
)
