import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signal } from '@angular/core';
import { Cart } from '../models/cart.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly apiUrl = '/api/v1/cart/add';
  private cartSignal = signal<Cart>({ items: [], totalPrice: 0 });
  readonly cart = this.cartSignal.asReadonly();

  constructor(private readonly http: HttpClient) {}

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
    this.http.post<Cart>(this.apiUrl, { beverageId, quantity }).subscribe({
      next: (cartItems) => {
        this.cartSignal.set(cartItems);
      },
      error: (error) => {
        // Handle error - can be extended with error handling logic
      },
    });
  }
}
