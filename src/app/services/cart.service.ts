import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: BehaviorSubject<[]> = new BehaviorSubject([]);

  constructor() {}

  addItem(item: Product): void {
    let currentCart = this.cart.getValue();
    currentCart.push(item as never);
    this.cart.next(currentCart);
  }

  removeItem(index: number): void {
    let currentCart = this.cart.getValue();
    currentCart.splice(index, 1);
    this.cart.next(currentCart);
  }

  getCartItems(): BehaviorSubject<[]> {
    return this.cart;
  }
}
