import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingComponent } from './shopping.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [ShoppingComponent, ProductListComponent, ProductItemComponent, CartComponent],
  imports: [
    CommonModule
  ],
  exports: [ShoppingComponent]
})
export class ShoppingModule { }
