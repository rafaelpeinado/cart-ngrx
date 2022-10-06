import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [ ProductComponent, ProductDetailComponent, CartComponent ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FontAwesomeModule
  ]
})
export class ProductsModule { }
