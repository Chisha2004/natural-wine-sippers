import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { TranslatePipe } from '@ngx-translate/core';
import { HeaderComponent } from '../../components/header/header.component';
import { Router } from '@angular/router';
import { RouteCode, UserStore } from '@smwine-fe-app/shared';

@Component({
  selector: 'app-checkout',
  imports: [TranslatePipe, HeaderComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent {
  private readonly userStore = inject(UserStore);
  private readonly cartService: CartService = inject(CartService);
  private readonly router = inject(Router);

  readonly cart = this.cartService.cart;
  readonly isLoading = this.cartService.isLoading;
  readonly hasError = this.cartService.hasError;
  readonly isLoggedIn = this.userStore.isLoggedIn;

  //TODO on mobile we need to show the cart at the top of the page.
  //TODO we need to show header and footer on this page. Maybe we can use the layout component for that.

  handleRetry(): void {
    //TODO we need to implement retry logic here. Maybe we can call the cart service to retry the last failed request.
  }

  //TODO after redirect and login the cart is not being restored. Logic in the backend is there but the update is somehow not happening.
  redirectToLogin(): void {
    this.router.navigate(['/login'], {
      queryParams: { rd: RouteCode.CHECKOUT },
    });
  }
}
