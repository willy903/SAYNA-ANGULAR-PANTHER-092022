import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<any>('http://localhost:3000/products').pipe(map((res:any)=>{
      return(res);
    }))
  }
  getProductId(id: number) {
    return this.http.get<any>('http://localhost:3000/products/' + id).pipe(
      map((res: any) => {
        return res;
      })
    )}
}