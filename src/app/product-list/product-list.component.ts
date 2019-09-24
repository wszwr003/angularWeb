import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import Product from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  constructor(private ps: ProductService) { }

  ngOnInit() {
    this.ps
      .getProducts()
      .subscribe((data: Product[]) => {
        this.products = data;
    });
  }

  deleteProduct(id) {
    this.ps.deleteProduct(id).subscribe(res => {
      this.products.splice(id, 1);
    });
  }
}
