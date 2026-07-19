import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-checkout',
  imports: [TranslateModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent {
  private readonly cartService: CartService = inject(CartService);

  readonly cart = this.cartService.cart;
  readonly isLoading = this.cartService.isLoading;
  readonly hasError = this.cartService.hasError;

  //TODO on mobile we need to show the cart at the top of the page.
  //TODO we need to show header and footer on this page. Maybe we can use the layout component for that.

  handleRetry(): void {
    //TODO we need to implement retry logic here. Maybe we can call the cart service to retry the last failed request.
  }
}
