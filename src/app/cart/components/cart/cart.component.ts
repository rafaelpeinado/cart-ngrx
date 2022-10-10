import { Component, OnInit } from '@angular/core';
import * as FontAwesome from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { ProductPageActions } from 'src/app/products/state/actions';
import { ItemCart } from '../../models/item-cart.model';
import { getItems, getTotalPrice, State } from '../../state';
import { Observable } from 'rxjs';
import { CartPageActions } from '../../state/actions';
import { Product } from 'src/app/products/models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public items$: Observable<ItemCart[]>;
  public totalPrice$: Observable<number>;

  /* icons */
  public faTrash = FontAwesome.faTrash;
  public increase = CartPageActions.increaseItemCart;
  public decrease = CartPageActions.decreaseItemCart;

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit(): void {
    this.items$ = this.store.select(getItems);
    this.totalPrice$ = this.store.select(getTotalPrice);
  }

  public changeQuantityCart(product: Product, action: any) {
    const itemCart: ItemCart = {
      product,
      quantity: action === CartPageActions.increaseItemCart ? 1 : -1
    };
    this.store.dispatch(action({ itemCart }));
  }

  public setCurrentProductId(currentProductId: number): void {
    this.store.dispatch(ProductPageActions.setCurrentProductId({ currentProductId }));
  }

  public removeItemCart(productId: number): void {
    this.store.dispatch(CartPageActions.removeItemCart({ productId }));
  }

  public finalizePurchase(): void {

  }

}
