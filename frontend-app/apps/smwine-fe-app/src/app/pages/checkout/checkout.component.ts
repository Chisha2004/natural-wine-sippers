import { Component, effect, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { RouteCode, UserStore } from '@smwine-fe-app/shared';
import { take } from 'rxjs';
import { HeaderComponent } from '../../components/header/header.component';
import { ShippingAddress } from '../../models/shipping-address.interface';
import { CartService } from '../../services/cart.service';
import { CheckoutService } from '../../services/checkout/checkout.service';

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

  readonly cart = this.cartService.cart;
  readonly isLoading = this.cartService.isLoading;
  readonly hasError = this.cartService.hasError;
  readonly isLoggedIn = this.userStore.isLoggedIn;

  // Signal state for selected payment method
  readonly selectedPaymentMethod = signal<string>('ideal');

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
            error: (error) => {
              console.error('Error loading default shipping address:', error);
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

  onSubmit(): void {
    if (this.shippingForm.invalid) {
      this.shippingForm.markAllAsTouched();
      return;
    }

    const payload = {
      address: this.shippingForm.getRawValue(),
      paymentMethod: this.selectedPaymentMethod(),
    };

    console.log('Submitting checkout payload:', payload);
    // Call checkoutService.placeOrder(payload)...
  }
}
