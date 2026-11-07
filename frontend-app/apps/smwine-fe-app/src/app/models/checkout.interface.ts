import { ShippingAddress } from './shipping-address.interface';

export interface CheckoutRequest {
  shipmentAddress: ShippingAddress;
  paymentMethod: string;
  cartId: number;
}

export enum OrderStatus {
  AWAITING_PAYMENT = 'AWAITING_PAYMENT',
  PAID = 'PAID',
  PROCESSING = 'PROCESSING',
  SHIPPED = 'SHIPPED',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED',
  REFUNDED = 'REFUNDED',
}
export interface CheckoutResponse {
  orderId: number;
  orderStatus: OrderStatus;
  paymentRedirectUrl: string;
}
