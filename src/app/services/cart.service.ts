import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: BehaviorSubject<[]> = new BehaviorSubject([]);

  constructor() {}

  addItem(item: any): void {
    let currentCart = this.cart.getValue();
    currentCart.push(item as never);
    this.cart.next(currentCart);
    console.log(this.cart);
  }

  removeItem(index: number): void {
    let currentCart = this.cart.getValue();
    currentCart.splice(index, 1);
    this.cart.next(currentCart);
  }

  getCartItems(): BehaviorSubject<[]> {
    console.log(this.cart);
    return this.cart;
  }
}
