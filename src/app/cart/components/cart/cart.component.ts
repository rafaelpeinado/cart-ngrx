import { Component, OnInit } from '@angular/core';
import * as FontAwesome from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { ProductPageActions } from 'src/app/products/state/actions';
import { ItemCart } from '../../models/item-cart.model';
import { getItems, State } from '../../state';
import { Observable } from 'rxjs';
import { CartPageActions } from '../../state/actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public items$: Observable<ItemCart[]>;

  /* icons */
  public faTrash = FontAwesome.faTrash;

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit(): void {
    this.items$ = this.store.select(getItems);
    this.store.dispatch(CartPageActions.loadItemsCart());
  }

  public changeQuantityCart(id: number, changeNumber: number) {
    // TODO
  }

  public setCurrentProductId(currentProductId: number): void {
    this.store.dispatch(ProductPageActions.setCurrentProductId({ currentProductId }));
  }

}
