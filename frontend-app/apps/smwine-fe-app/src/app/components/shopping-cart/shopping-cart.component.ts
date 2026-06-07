import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  imports: [],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
})
export class ShoppingCartComponent {
  private readonly cartService: CartService = inject(CartService);

  showCart = false;
  cart = this.cartService.cart;

  addToCart(beverageId: string, quantity: number): void {
    this.cartService.addToCart({ beverageId, quantity });
  }
}
