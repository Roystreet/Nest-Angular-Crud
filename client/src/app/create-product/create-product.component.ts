import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {CreateProductService} from './create-product.service'

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  
  datos:any;
  productForm= new FormGroup({
    title: new FormControl(''),
    description:new FormControl(''),
    image: new FormControl(''),
    price: new FormControl(''),
    stock:new FormControl(''),
  });

  constructor( private createProductService: CreateProductService) { }

  ngOnInit(): void {
  }
  submit(): void {

    this.createProductService.submit({
      title: this.productForm.value.title,
      description: this.productForm.value.description,
      image: this.productForm.value.image,
      price: this.productForm.value.price,
      stock: this.productForm.value.stock
    }).subscribe(data => {
      this.datos= data
    });
  }

}
