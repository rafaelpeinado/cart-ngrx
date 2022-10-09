import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ItemCart } from 'src/app/cart/models/item-cart.model';
import { getItems, getQuantityInCartById } from 'src/app/cart/state';
import { CartPageActions } from 'src/app/cart/state/actions';
import { Product } from '../../models/product.model';
import { getCurrentProduct, State } from '../../state';
import { ProductPageActions } from '../../state/actions';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  public product$: Observable<Product>;
  public quantityCurrentProduct$: Observable<ItemCart>;

  constructor(
    private store: Store<State>,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.product$ = this.store.select(getCurrentProduct);
    this.quantityCurrentProduct$ = this.store.select(getQuantityInCartById);
    this.store.select(getQuantityInCartById)
      .subscribe((response) => {
        console.log('teste', response);
      });
    this.activatedRoute.params
      .subscribe(response => {
        if (response && response.id) {
          const currentProductId: number = +response.id;
          this.store.dispatch(ProductPageActions.setCurrentProductId({ currentProductId }));
        }
      });
  }

  ngOnDestroy(): void {
    this.store.dispatch(ProductPageActions.clearCurrentProduct());
  }

  public addToCart(product: Product): void {
    const itemCart: ItemCart = {
      product,
      quantity: 1
    };
    this.store.dispatch(CartPageActions.addItemCart({ itemCart }));
  }
}
