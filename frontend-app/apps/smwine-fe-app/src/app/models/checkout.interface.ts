import { ShippingAddress } from './shipping-address.interface';

export interface CheckoutRequest {
  shipmentAddress: ShippingAddress;
  paymentMethod: string;
  cartId: number;
}

export enum OrderStatus {
  AWAITING_PAYMENT,
  PAID,
  PROCESSING,
  SHIPPED,
  DELIVERED,
  CANCELLED,
  REFUNDED,
}

export interface CheckoutResponse {
  orderId: number;
  status: OrderStatus;
  paymentRedirectUrl: string;
}
