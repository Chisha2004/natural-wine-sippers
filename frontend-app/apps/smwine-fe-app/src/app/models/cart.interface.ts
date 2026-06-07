export interface CartItem {
  beverageId: string;
  beverageImgUrl: string;
  quantity: number;
  priceEach: number;
  totalForQuantity: number;
}

export interface Cart {
  items: CartItem[];
  totalPrice: number;
}
