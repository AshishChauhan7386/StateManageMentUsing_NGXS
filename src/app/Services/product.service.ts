import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../../Models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getProductData(): Observable<product[]>{
return this.http.get<product[]>('http://localhost:3000/Product');
  }
}
