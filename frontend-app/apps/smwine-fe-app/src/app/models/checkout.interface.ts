import { ShippingAddress } from './shipping-address.interface';

export interface CheckoutRequest {
  address: ShippingAddress;
  paymentMethod: string;
  cartId: number;
}

export interface CheckoutResponse {
  orderId: number;
  paymentUrl: string;
}
