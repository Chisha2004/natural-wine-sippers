import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signal } from '@angular/core';
import { CartItem } from '../models/cart.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly apiUrl = '/api/v1/cart/add';
  private cartItemsSignal = signal<CartItem[]>([]);
  readonly cartItems = this.cartItemsSignal.asReadonly();

  constructor(private readonly http: HttpClient) {}

  /**
   * Adds an item to the cart
   * @param item - The cart item containing beverageId and quantity
   */
  addToCart(item: CartItem): void {
    this.http.post<CartItem[]>(this.apiUrl, item).subscribe({
      next: (cartItems) => {
        this.cartItemsSignal.set(cartItems);
      },
      error: (error) => {
        // Handle error - can be extended with error handling logic
      },
    });
  }
}
