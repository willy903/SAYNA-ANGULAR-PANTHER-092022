import { PanierService } from 'src/app/services/panier.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  PanierService: any;
  productAdd: any;
  grandTotal!: number;
  constructor(private apiPanier: PanierService, private route:Router) { }

  ngOnInit(): void {
    this.apiPanier.getProducts().subscribe((res:any) => {
      this.productAdd = res;
      this.grandTotal = 0;
    this.productAdd.forEach((item:any) => {
    });
    });
    
  }

  suppromerItem(id : any){
    this.apiPanier.delete(id).subscribe(() =>{
      alert("Deleted");
      window.location.reload();
    })
  }
}
