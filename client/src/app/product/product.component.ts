import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() id: number = 0;
  @Input() title: string="";
  @Input() description: string="";
  @Input() image: string="";
  @Input() price: string="";
  @Input() stock: number=0;
  @Input() status: boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

}
