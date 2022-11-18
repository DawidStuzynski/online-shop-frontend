import {Injectable} from '@angular/core';
import {Product} from "./model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  getProducts(): Product[] {
    return [
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

  }
}
