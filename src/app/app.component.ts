import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductPageActions } from './products/state/actions';
import { State } from './state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private store: Store<State>) { }

  title = 'cart-ngrx';

  ngOnInit(): void {
    this.store.dispatch(ProductPageActions.loadProducts());
  }
}
