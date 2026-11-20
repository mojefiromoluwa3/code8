export type MenuCategory = 'all' | 'meals' | 'proteins' | 'snacks' | 'drinks';

export interface MenuItem {
  id: string;
  name: string;
  category: 'meals' | 'proteins' | 'snacks' | 'drinks';
  categoryLabel: string;
  description: string;
  image: string;
  imageAlt: string;
  badge?: string;
  isSwallow?: boolean;
  soupOptions?: string[];
}

export interface OrderItem {
  item: MenuItem;
  quantity: number;
  selectedSoup?: string;
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
