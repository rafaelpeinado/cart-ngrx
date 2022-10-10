import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './state/product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './state/product.effects';
import { ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    StoreModule.forFeature('products', productReducer),
    EffectsModule.forFeature([ProductEffects]),
    SweetAlert2Module.forChild({})
  ]
})
export class ProductsModule { }
