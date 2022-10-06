import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import * as FontAwesome from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products: Product[] = [];
  public quantity: number = 1;

  /* icons */
  public faTrash = FontAwesome.faTrash;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe((products: Product[]) => this.products = products);
  }

  public changeQuantityCart(id: number, changeNumber: number) {
    this.quantity += changeNumber;
  }

}
