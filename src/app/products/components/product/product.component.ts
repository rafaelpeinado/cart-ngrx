import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products$: Observable<Product[]>;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }

}
