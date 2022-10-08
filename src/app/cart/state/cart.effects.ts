import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { ItemCart } from "../models/item-cart.model";
import { CartService } from "../services/cart.service";
import { CartApiActions, CartPageActions } from "./actions";

@Injectable()
export class CartEffects {

  constructor(
    private action$: Actions,
    private cartService: CartService
  ) { }

  loadItemsCart$ = createEffect(() => {
    return this.action$.pipe(
      ofType(CartPageActions.loadItemsCart),
      mergeMap(() => this.cartService.getCartLocalStorage().pipe(
        map((itemsCart) => CartApiActions.loadItemsCartSuccess({ itemsCart })),
        catchError((error) => of(CartApiActions.loadItemsCartFailure({ error })))
      ))
    );
  });

  addItemCart$ = createEffect(() => {
    return this.action$.pipe(
      ofType(CartPageActions.addItemCart),
      mergeMap((response) => this.cartService.addItemToCart(response.itemCart).pipe(
        map((itemsCart) => CartApiActions.addItemCartSuccess({ itemsCart })),
        catchError(error => of(CartApiActions.addItemCartFailure({ error })))
      ))
    );
  });
}
