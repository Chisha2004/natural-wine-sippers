import { Component, effect, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-checkout',
  imports: [TranslatePipe],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent {
  private readonly cartService: CartService = inject(CartService);

  readonly cart = this.cartService.cart;
  readonly isLoading = this.cartService.isLoading;
  readonly hasError = this.cartService.hasError;
}
