import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Errors } from 'src/app/shared/components/enums/errors.enum';
import { ItemCart } from '../models/item-cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private keyCart: string = 'cart';

  constructor() { }

  public getCartLocalStorage(): Observable<ItemCart[]> {
    const getLocalStorage = localStorage.getItem('cart');
    if (getLocalStorage) {
      return of(JSON.parse(getLocalStorage) as ItemCart[]);
    }
    localStorage.setItem('cart', JSON.stringify([]));
    return throwError(Errors.EMPTY_LOCAL_STORAGE as string);
  }

  public increaseOrDecreaseItemToCart(itemCart: ItemCart): Observable<ItemCart[]> {
    return this.getCartLocalStorage()
      .pipe(
        map((itemsCart) => {
          itemsCart.find(item => item.product.id === itemCart.product.id) ?
            itemsCart.map(item => item.product.id === itemCart.product.id ? item.quantity += itemCart.quantity : item) :
            itemsCart = [...itemsCart, itemCart];
          this.localStorageSetItem(itemsCart);
          return itemsCart;
        }),
        catchError((error) => of(error))
      );
  }

  public removeItemFromCart(productId: number): Observable<ItemCart[]> {
    return this.getCartLocalStorage()
      .pipe(
        map((itemsCart) => {
          itemsCart = itemsCart.filter(i => i.product.id !== productId);
          this.localStorageSetItem(itemsCart);
          return itemsCart;
        }),
        catchError((error) => of(error))
      );
  }

  public cleanCart(): Observable<ItemCart[]> {
    const itemsCart: ItemCart[] = [];
    this.localStorageSetItem(itemsCart);
    return of(itemsCart);
  }

  private localStorageSetItem(itemsCart: ItemCart[]): void {
    localStorage.setItem(this.keyCart, JSON.stringify(itemsCart));
  }
}
