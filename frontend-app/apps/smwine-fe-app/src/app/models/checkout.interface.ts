import { ShippingAddress } from './shipping-address.interface';

export interface CheckoutRequest {
  shipmentAddress: ShippingAddress;
  paymentMethod: string;
  cartId: number;
}

export interface CheckoutResponse {
  orderId: number;
  paymentRedirectUrl: string;
}
