import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShippingAddress } from '../../models/shipping-address.interface';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  private readonly http = inject(HttpClient);

  private readonly API_BASE_URL = '/api/v1/checkout';

  loadDefaultShippingAddress(): Observable<ShippingAddress> {
    return this.http.get<ShippingAddress>(
      `${this.API_BASE_URL}/shipping-address`
    );
  }
}
