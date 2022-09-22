import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Products } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  constructor( private http:HttpClient) { }

  addToPanier(product : Products):Observable<any>{
    return this.http.post('http://localhost:3000/cart', product);
  }
  delete(productRefer : any){
    return this.http.delete('http://localhost:3000/cart/'+ productRefer);
  }
  getProducts(){
    return this.http.get<any>('http://localhost:3000/cart').pipe(map((res:any)=>{
      return(res);
    }))
  }
}