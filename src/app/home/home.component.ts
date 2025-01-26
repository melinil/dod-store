import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products1: any[] = [];
  products2: any[] = [];
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getTopProducts();
  }

  getProducts() {
    this.productsService.fetchProducts().subscribe((response: any[]) => {
      this.products2 = response;
      console.log(this.products2, 'ffffffff');
    });
  }

  getTopProducts() {
    this.productsService.getBestSellingItems().subscribe((response: any[]) => {
      this.products1 = response;
      console.log(this.products1, 'ppppppp');
    });
  }
}
