import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductManagementComponent } from './product-management/product-management.component';

const components = [
  ProductManagementComponent,
]
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: components,
  exports: components
})
export class ProductModule { }
