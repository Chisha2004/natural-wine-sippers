import { Component, effect, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CartStatus } from '../../models/cart.interface';

@Component({
  selector: 'app-shopping-cart',
  imports: [],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
})
export class ShoppingCartComponent {
  private readonly cartService: CartService = inject(CartService);
  private router = inject(Router);

  showCart = false;
  readonly cart = this.cartService.cart;
  //TODO on mobile we need to show the cart at the top of the page.

  constructor() {
    effect(() => {
      if (this.cart() && this.cart().status === CartStatus.IN_CHECKOUT) {
        //redirect to checkout page if the cart is in checkout status
        this.router.navigate(['/checkout']);
      }
    });
  }

  addToCart(beverageId: string, quantity: number): void {
    this.cartService.addToCart({ beverageId, quantity });
    //TODO maybe show a toast message on error that the item was not added to the cart
  }
}
