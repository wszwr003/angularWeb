import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder,  private ps: ProductService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      ProductName: ['', Validators.required ],
      ProductModel: ['', Validators.required ],
      ProductDescription: ['', Validators.required ],
    });
  }

  addProduct(ProductName, ProductModel, ProductDescription) {
    this.ps.addProduct(ProductName, ProductModel, ProductDescription);
  }

  ngOnInit() {
  }

}
