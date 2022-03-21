import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateProductService {

  constructor(private http: HttpClient) {
   }
   submit(product:any){
     return this.http.post('http://localhost:3000/product',product)
   }
}
