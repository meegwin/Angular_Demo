import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Output() onAddToCart = new EventEmitter()
  productList: any[] = [
    {
      id: 1,
      name: 'Laptop MSI',
      price: 23000000,
      image: 'assets/images/laptop-msi.jpeg',
    },
    {
      id: 2,
      name: 'Macbook pro',
      price: 49000000,
      image: 'assets/images/macbook.jpeg',
    },
    {
      id: 3,
      name: 'Surface pro',
      price: 35000000,
      image: 'assets/images/surface.jpeg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  handleAddToCart(product: any) {
    this.onAddToCart.emit(product);
  }
}





