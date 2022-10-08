import { CartState } from "./cart.reducer";
import * as AppState from '../../state/app.state';
import { createFeatureSelector, createSelector } from "@ngrx/store";

export interface State extends AppState.State {
  cart: CartState;
}

const getCartFeatureState = createFeatureSelector<CartState>('cart');

export const getItems = createSelector(
  getCartFeatureState,
  state => state.items
);
