import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() product: any;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart(product: any): void {
    this.cartService.addItem(product);
    alert(`${product.name} added to cart!`);
  }
}
