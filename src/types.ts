export type MenuCategory = 'all' | 'meals' | 'snacks' | 'drinks';

export interface MenuItem {
  id: string;
  name: string;
  category: 'meals' | 'snacks' | 'drinks';
  categoryLabel: string;
  description: string;
  image: string;
  imageAlt: string;
  badge?: string;
}

export interface OrderItem {
  item: MenuItem;
  quantity: number;
}

export type OrderType = 'pickup' | 'delivery';

export interface CustomerOrderForm {
  name: string;
  orderType: OrderType;
  deliveryAddress: string;
  specialNotes: string;
}

export interface ToastNotification {
  id: string;
  message: string;
  type?: 'success' | 'info';
}
