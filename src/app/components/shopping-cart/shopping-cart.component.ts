import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from 'src/app/interfaces/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  quantity = 1;
  cartItems: Product[] = [];
  deliveryForm: FormGroup;
  totalPrice: number = 0;
  isLoggedIn = false
  constructor(private cartService: CartService, private fb: FormBuilder, public authService: AuthService) {
    this.isLoggedIn = this.authService.isLoggedIn()
    this.deliveryForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10,15}$')]],
      city: ['', Validators.required],
      address: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((cart) => {
      this.cartItems = cart;
    });
    this.calculateTotal()
  }

  removeItem(index: number): void {
    this.cartService.removeItem(index);
    this.calculateTotal()
  }

  calculateTotal() {
    this.totalPrice = this.cartItems.reduce((sum, item) => sum + item.price!, 0)
  }

  submitOrder() {
    if (this.deliveryForm.valid) {
      console.log("Order submitted")
    } else {
      console.log("invalid")
    }
  }
}
