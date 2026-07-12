import { effect, inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signal } from '@angular/core';
import { Cart } from '../models/cart.interface';
import { UserStore } from '@smwine-fe-app/store';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly API_BASE_URL = '/api/v1/cart';

  private readonly userStore = inject(UserStore);
  private readonly http = inject(HttpClient);

  private cartSignal = signal<Cart>({ items: [], totalPrice: 0 });
  private readonly _isLoading = signal(true);
  private readonly _hasError = signal(false);

  readonly cart = this.cartSignal.asReadonly();
  readonly isLoading = this._isLoading.asReadonly();
  readonly hasError = this._hasError.asReadonly();

  constructor() {
    effect(() => {
      const currentUser = this.userStore.currentUser();
      if (currentUser && currentUser.uuid) {
        this.loadCart();
      } else if (!this.userStore.isLoading) {
        this._hasError.set(true);
      }
    });
  }

  /**
   * Adds an item to the cart
   * @param beverageId - The ID of the beverage to add
   * @param quantity - The quantity of the beverage to add
   */
  addToCart({
    beverageId,
    quantity,
  }: {
    beverageId: string;
    quantity: number;
  }): void {
    this._isLoading.set(true);

    this.http
      .post<Cart>(`${this.API_BASE_URL}/add`, { beverageId, quantity })
      .subscribe({
        next: (cartItems) => {
          this.cartSignal.set(cartItems);
          this._isLoading.set(false);
          this._hasError.set(false);
        },
        error: () => {
          this._hasError.set(true);
          this._isLoading.set(false);
        },
      });
  }

  private loadCart(): void {
    this._isLoading.set(true);

    this.http.get<Cart>(`${this.API_BASE_URL}`).subscribe({
      next: (cartItems) => {
        this.cartSignal.set(cartItems);
        this._isLoading.set(false);
      },
      error: () => {
        this._hasError.set(true);
        this._isLoading.set(false);
      },
    });
  }
}
