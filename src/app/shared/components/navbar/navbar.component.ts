import { Component, OnInit } from '@angular/core';
import * as FontAwesome from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ItemCart } from 'src/app/cart/models/item-cart.model';
import { getItems, getTotalQuantity, State } from 'src/app/cart/state';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public faShoppingCart = FontAwesome.faShoppingCart;
  public itemsCart$: Observable<ItemCart[]>;
  public quantityItems$: Observable<number | string>;

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.itemsCart$ = this.store.select(getItems)
    this.quantityItems$ = this.store.select(getTotalQuantity);
  }

}
