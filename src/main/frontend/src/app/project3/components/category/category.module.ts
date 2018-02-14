import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryManagementComponent } from './category-management/category-management.component';

const categoryComponents = [
  CategoryManagementComponent,
]

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: categoryComponents,
  exports: categoryComponents
})
export class CategoryModule { }
