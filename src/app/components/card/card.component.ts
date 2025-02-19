import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from 'src/app/interfaces/product';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() product!: Product;
  constructor(
    private cartService: CartService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void { }

  addToCart(product: Product): void {
    this.cartService.addItem(product);
    this.dialog.open(ConfirmationDialogComponent);
  }

  openProductDetails(productCategory?: string, productId?: string) {
    this.router.navigate(['shop/product', productCategory, productId]);
  }
}
