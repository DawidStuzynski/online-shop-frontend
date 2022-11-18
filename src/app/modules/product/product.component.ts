import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products = [
    {
      name: "Product 1",
      category: "Category 1",
      description: "Product description",
      price: 11.99,
      currency: "PLN"
    },
    {
      name: "Product 1",
      category: "Category 1",
      description: "Product description",
      price: 11.99,
      currency: "PLN"
    },
    {
      name: "Product 1",
      category: "Category 1",
      description: "Product description",
      price: 11.99,
      currency: "PLN"
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
