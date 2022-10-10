import { createReducer, on } from "@ngrx/store";
import { Product } from "../models/product.model";
import { ProductApiActions, ProductPageActions } from './actions';

export interface ProductState {
  currentProductId: number | null;
  products: Product[];
  error: string;
};

const initialState: ProductState = {
  currentProductId: null,
  products: [],
  error: ''
};

export const productReducer = createReducer<ProductState>(
  initialState,
  on(ProductPageActions.setCurrentProductId, (state, action): ProductState => {
    return {
      ...state,
      currentProductId: action.currentProductId
    }
  }),
  on(ProductPageActions.clearCurrentProduct, (state): ProductState => {
    return {
      ...state,
      currentProductId: null
    };
  }),
  on(ProductApiActions.loadProductsSuccess, (state, action): ProductState => {
    return {
      ...state,
      products: action.products,
      error: '',
    };
  }),
  on(ProductApiActions.loadProductsFailure, (state, action): ProductState => {
    return {
      ...state,
      products: [],
      error: action.error
    };
  })
);
