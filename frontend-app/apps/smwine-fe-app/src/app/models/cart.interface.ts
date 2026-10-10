export interface CartItem {
  beverageId: string;
  title: string;
  beverageImgUrl: string;
  quantity: number;
  priceEach: number;
  totalForQuantity: number;
}

export enum CartStatus {
  ACTIVE = 'ACTIVE',
  ABANDONED = 'ABANDONED',
  IN_CHECKOUT = 'IN_CHECKOUT',
  CONVERTED = 'CONVERTED',
  EXPIRED = 'EXPIRED',
  MERGED = 'MERGED',
  NONE = 'NONE',
}

export interface Cart {
  id: number;
  items: CartItem[];
  totalPrice: number;
  status: CartStatus;
}
