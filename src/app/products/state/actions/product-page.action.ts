import { createAction, props } from "@ngrx/store";

export const loadProducts = createAction(
  '[Product Page] Load Products'
);

export const setCurrentProductId = createAction(
  '[Product Page] Set Current Product ID',
  props<{ currentProductId: number }>()
);

export const clearCurrentProduct = createAction(
  '[Product Page] Clear Current Product'
);
