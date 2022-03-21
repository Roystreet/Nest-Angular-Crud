import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:any ;
  constructor( private ProductsService: ProductsService) { }

  ngOnInit(): void {

    this.ProductsService.getProducts()
    .subscribe(result=> this.products = result)
  }

}