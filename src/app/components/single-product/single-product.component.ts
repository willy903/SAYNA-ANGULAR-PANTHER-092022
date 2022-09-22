import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
})
export class SingleProductComponent implements OnInit {
  product: any;
  constructor(private api: ApiProductsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const productId = +this.route.snapshot.params['productId'];
    this.api.getProductId(productId).subscribe((res) => {
      this.product = res;
    });
  }
}