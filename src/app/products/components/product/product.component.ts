import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../../models/product.model';
import { getProducts, State } from '../../state';
import { ProductPageActions } from '../../state/actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products$: Observable<Product[]>;

  constructor(
    private store: Store<State>,
  ) { }

  ngOnInit(): void {
    this.products$ = this.store.select(getProducts);
  }

  public setCurrentProductId(currentProductId: number) {
    this.store.dispatch(ProductPageActions.setCurrentProductId({ currentProductId }));
  }
}
