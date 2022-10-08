import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductService } from "../services/product.service";
import { ProductApiActions, ProductPageActions } from "./actions";
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from "rxjs";
import { NgxSpinnerService } from "ngx-spinner";

@Injectable()
export class ProductEffects {

  constructor(
    private action$: Actions,
    private productService: ProductService,
    private spinner: NgxSpinnerService
  ) { }

  loadProducts$ = createEffect(() => {
    this.spinner.show();
    return this.action$.pipe(
      ofType(ProductPageActions.loadProducts),
      mergeMap(() => this.productService.getProducts().pipe(
        map(products => {
          this.spinner.hide();
          return ProductApiActions.loadProductsSuccess({ products });
        }),
        catchError(error => {
          this.spinner.hide();
          return of(ProductApiActions.loadProductsFailure({ error }));
        })
      ))
    );
  });
}
