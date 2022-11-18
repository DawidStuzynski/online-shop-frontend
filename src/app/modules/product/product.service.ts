import {Injectable} from '@angular/core';
import {Product} from "./model/product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<Product[]> {

    return this.http.get<Product[]>("http://localhost:8080/products")

    //todo 42min

    // return [
    //   {
    //     name: "Product 1",
    //     category: "Category 1",
    //     description: "Product description",
    //     price: 11.99,
    //     currency: "PLN"
    //   },
    //   {
    //     name: "Product 1",
    //     category: "Category 1",
    //     description: "Product description",
    //     price: 11.99,
    //     currency: "PLN"
    //   },
    //   {
    //     name: "Product 1",
    //     category: "Category 1",
    //     description: "Product description",
    //     price: 11.99,
    //     currency: "PLN"
    //   }
    // ]

  }
}
