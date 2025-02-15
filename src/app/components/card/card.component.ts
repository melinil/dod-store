import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from 'src/app/interfaces/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() product!: Product;
  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void { }

  addToCart(product: Product): void {
    this.cartService.addItem(product);
    alert(`${product.name} added to cart!`);
  }

  openProductDetails(productId?: string) {
    this.router.navigate(['shop/product', productId])
  }
}
