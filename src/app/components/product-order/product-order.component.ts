import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PanierService } from 'src/app/services/panier.service';
@Component({
  selector: 'app-product-order',
  templateUrl: './product-order.component.html',
  styleUrls: ['./product-order.component.css']
})
export class ProductOrderComponent implements OnInit {
  product: any;
  grandTotal!: number;
  constructor(private apiPanier: PanierService, private route:Router) { }

  ngOnInit(): void {
    this.apiPanier.getProducts().subscribe((res:any) => {
      this.product = res;
      this.grandTotal = 0;
    this.product.forEach((item:any) => {
      this.grandTotal += +item.Prix;
    });
    });
  }

}
