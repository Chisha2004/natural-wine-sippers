/* eslint-disable @angular-eslint/prefer-inject */
import { Component, Signal } from '@angular/core';
import { CartService, CartItem } from '../../services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  imports: [],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
})
export class ShoppingCartComponent {
  showCart = false;
  cartItems: Signal<CartItem[]>;

  constructor(private readonly cartService: CartService) {
    this.cartItems = this.cartService.cartItems;
  }

  /**
   * Adds an item to the cart
   * @param item - The cart item to add
   */
  addToCart(item: CartItem): void {
    this.cartService.addToCart(item);
  }
}
