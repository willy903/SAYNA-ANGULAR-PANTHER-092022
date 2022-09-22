import { Router } from '@angular/router';
import { PanierService } from 'src/app/services/panier.service';
import { Products } from './../../models/product.model';
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
  constructor(private api: ApiProductsService, private panierService :PanierService, private router:Router) {}

  ngOnInit(): void {
    this.api.getProducts().subscribe((res:any) => {
      this.products = res;
    });
  }
  addToPanier(productItem: any){
    this.panierService.addToPanier(productItem).subscribe();
    this.router.navigateByUrl('panier');
  }
}