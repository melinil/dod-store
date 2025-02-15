import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from 'src/app/interfaces/product';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  topProducts: Product[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getTopProducts();
  }

  getTopProducts() {
    this.productsService.getBestSellingItems().subscribe((response: Product[]) => {
      this.topProducts = response;
    });
  }
}
