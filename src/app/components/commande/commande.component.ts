import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
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
