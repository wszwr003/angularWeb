import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  uri = 'http://localhost:4000/product';

  constructor(private http: HttpClient) { }

  addProduct(ProductName, ProductModel, ProductDescription) {
    const obj = {
      ProductName,
      ProductModel,
      ProductDescription,
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log('Done'));
  }

  getProducts() {
    return this
      .http
      .get(`${this.uri}/list`);
  }

  deleteProduct(ProductName) {  // TOSOLVE:删除后需要手动刷新。
    const obj = {
      ProductName
    };
    this.http.post(`${this.uri}/delete`, obj)
      .subscribe(res => {
      });
  }

  updateProduct(ProductName) {
    const obj = {
      ProductName
    };
    this.http.post(`${this.uri}/update`, obj)
      .subscribe(res => {
      });
  }
}
