import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public product: Product;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.activatedRoute.params
      .subscribe((response) => {
        if (response && response.id) {
          this.productService.getProductById(response.id)
            .subscribe((product) => {
              this.product = product;
              this.spinner.hide();
            }, () => this.spinner.hide());
        }
      }, () => this.spinner.hide());
  }

}
