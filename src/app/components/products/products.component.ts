import { ApiProductsService } from 'src/app/services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: any;
  p: number = 1;
  constructor(private api: ApiProductsService) {}

  ngOnInit(): void {
    this.api.getProducts().subscribe((res:any) => {
      this.products = res;
      

    });
  }
}