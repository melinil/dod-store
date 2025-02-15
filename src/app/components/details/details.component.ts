import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from '../../services/products.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  product: Product = {};
  quantity: number = 1;
  itemId: string | null = null;
  constructor(private cartService: CartService, private productsService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('id')
    this.getCurrentProduct()
  }

  getCurrentProduct() {
    this.productsService.getItemById(this.itemId!).subscribe((response: Product) => {
      this.product = response
    });
  }

  addToCart(product: Product): void {
    this.cartService.addItem(product);
    alert(`${product.name} added to cart!`);
  }
}
