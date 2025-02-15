import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  quantity = 1;
  cartItems: Product[] = [];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((cart) => {
      this.cartItems = cart;
    });
  }

  removeItem(index: number): void {
    this.cartService.removeItem(index);
  }
}
