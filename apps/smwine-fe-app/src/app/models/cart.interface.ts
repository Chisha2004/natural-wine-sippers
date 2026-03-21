export interface CartItem {
  beverageId: string;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
}
