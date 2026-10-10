import { Component, effect, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import {
  RouteCode,
  ToastService,
  ToastType,
  UserStore,
} from '@smwine-fe-app/shared';
import { take } from 'rxjs';
import { HeaderComponent } from '../../components/header/header.component';
import { ShippingAddress } from '../../models/shipping-address.interface';
import { CartService } from '../../services/cart.service';
import { CheckoutService } from '../../services/checkout/checkout.service';
import { CheckoutRequest } from '../../models/checkout.interface';

@Component({
  selector: 'app-checkout',
  imports: [TranslatePipe, HeaderComponent, ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent {
  private readonly userStore = inject(UserStore);
  private readonly cartService = inject(CartService);
  private readonly checkoutService = inject(CheckoutService);
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);
  private readonly toastService = inject(ToastService);

  readonly cart = this.cartService.cart;
  readonly isLoading = this.cartService.isLoading;
  readonly hasError = this.cartService.hasError;
  readonly isLoggedIn = this.userStore.isLoggedIn;

  // Signal state for selected payment method
  readonly selectedPaymentMethod = signal<string>('IDEAL');

  // Reactive Form instance bound to shipping address
  readonly shippingForm = this.fb.nonNullable.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    streetName: ['', Validators.required],
    houseNumber: ['', Validators.required],
    postcode: ['', Validators.required],
    city: ['', Validators.required],
    country: ['Netherlands', Validators.required],
  });

  constructor() {
    // Reactively populate form when user logs in and default address loads
    effect(() => {
      if (this.isLoggedIn()) {
        this.checkoutService
          .loadDefaultShippingAddress()
          .pipe(take(1))
          .subscribe({
            next: (address: ShippingAddress | null) => {
              if (address) {
                this.shippingForm.patchValue(address);
              }
            },
            error: () => {
              this.toastService.show({
                type: ToastType.ERROR,
                title:
                  'Failed to load default shipping address. Please try again. Or refresh the page.', //TODO we need translation for this message
              });
            },
          });
      }
    });
  }

  handleRetry(): void {
    // Retry cart or checkout fetch
  }

  redirectToLogin(): void {
    this.router.navigate(['/login'], {
      queryParams: { rd: RouteCode.CHECKOUT },
    });
  }

  continueWithPayment(): void {
    // window.location.href = this.cart().paymentRedirectUrl; //TODO we need to implement the payment page and route
  }

  onSubmit(): void {
    if (this.shippingForm.invalid) {
      this.shippingForm.markAllAsTouched();
      return;
    }

    const payload: CheckoutRequest = {
      shipmentAddress: this.shippingForm.getRawValue(),
      paymentMethod: this.selectedPaymentMethod(),
      cartId: this.cart().id,
    };

    this.checkoutService.initiateCheckout(payload).subscribe({
      next: (response) => {
        window.location.href = response.paymentRedirectUrl; //Maybe we have a page which indicates that the user is being redirected to the payment gateway. This is a better UX than just redirecting them without any indication.
      },
      error: () => {
        this.toastService.show({
          type: ToastType.ERROR,
          title:
            'Failed to initiate checkout. Please try again. Or refresh the page.', //TODO we need translation for this message
        });
      },
    });
  }
}
