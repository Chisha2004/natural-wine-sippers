export interface CartItem {
  beverageId: string;
  title: string;
  beverageImgUrl: string;
  quantity: number;
  priceEach: number;
  totalForQuantity: number;
}

export interface Cart {
  items: CartItem[];
  totalPrice: number;
}
