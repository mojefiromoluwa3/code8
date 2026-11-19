import { MenuItem } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  // Main Meals
  {
    id: 'jollof-rice',
    name: 'Jollof Rice',
    category: 'meals',
    categoryLabel: 'Main Meals',
    description: 'Classic party-style seasoned rice prepared fresh with rich aromatic savoury spices.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Flavourful seasoned Nigerian Jollof Rice',
    badge: 'Popular Choice'
  },
  {
    id: 'amala',
    name: 'Amala',
    category: 'meals',
    categoryLabel: 'Main Meals',
    description: 'Traditional smooth yam flour swallow prepared soft and served hot with savoury soup.',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Traditional piping hot Amala swallow meal',
    badge: 'Traditional Favourite'
  },
  {
    id: 'yam-porridge',
    name: 'Yam Porridge',
    category: 'meals',
    categoryLabel: 'Main Meals',
    description: 'Hearty slow-simmered tender yam pottage cooked in savoury seasoned sauce.',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Rich slow-simmered Yam Porridge',
    badge: 'Comfort Meal'
  },
  {
    id: 'ewa-agoyin',
    name: 'Ewa Agoyin',
    category: 'meals',
    categoryLabel: 'Main Meals',
    description: 'Soft slow-cooked mashed beans served with CODE-8 signature spicy Agoyin sauce.',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Slow-cooked Ewa Agoyin beans with rich sauce',
    badge: 'Chef Special'
  },

  // Snacks
  {
    id: 'pie',
    name: 'Pie',
    category: 'snacks',
    categoryLabel: 'Snacks',
    description: 'Golden-baked flaky pastry stuffed with savoury, seasoned hearty filling.',
    image: 'https://images.unsplash.com/photo-1562007908-859b4ba9a1a2?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Freshly baked golden meat pie',
    badge: 'Freshly Baked'
  },
  {
    id: 'donut',
    name: 'Donut',
    category: 'snacks',
    categoryLabel: 'Snacks',
    description: 'Soft, fluffy golden glazed fried dough ring, perfectly sweet and light.',
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Golden fluffy glazed donut snack',
    badge: 'Sweet Delight'
  },
  {
    id: 'popcorn',
    name: 'Popcorn',
    category: 'snacks',
    categoryLabel: 'Snacks',
    description: 'Crisp, freshly popped crunchy corn kernels with delicious savoury sweetness.',
    image: 'https://images.unsplash.com/photo-1578849278619-e73505e9610f?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Freshly popped golden crunchy popcorn',
    badge: 'Crunchy Snack'
  },

  // Drinks
  {
    id: 'yogurt',
    name: 'Yogurt',
    category: 'drinks',
    categoryLabel: 'Drinks',
    description: 'Smooth, rich and chilled creamy sweetened drinking yogurt.',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Chilled creamy yogurt drink',
    badge: 'Chilled & Smooth'
  },
  {
    id: 'zobo',
    name: 'Zobo',
    category: 'drinks',
    categoryLabel: 'Drinks',
    description: 'Deep ruby-red chilled hibiscus flower drink infused with warming natural spices.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Chilled vibrant spiced Zobo hibiscus drink',
    badge: 'House Refreshment'
  }
];

export const BUSINESS_INFO = {
  brandName: 'CODE-8',
  slogan: 'Good Food, Great Vibes.',
  brandLine: 'Our Code-Ate.',
  serviceMessage: 'Pick Up & Delivery',
  phone: '08054493605',
  whatsappRaw: '2348054493605',
  whatsappDisplay: '+234 805 449 3605',
  address: '8thGear Hub, 41 CMD Road, Magodo Secretariat, Lagos.',
  promises: [
    {
      title: 'Fresh Meals Daily',
      description: 'Cooked fresh every day to ensure every plate brings peak flavour and nourishment to your table.'
    },
    {
      title: 'Affordable & Pocket Friendly Meals',
      description: 'Generous, satisfying Nigerian meals and snacks priced with your daily comfort and budget in mind.'
    },
    {
      title: 'Quality Food Always',
      description: 'Consistent care, rich taste, and strict culinary standards in every portion we prepare.'
    }
  ]
};

// SVG fallback image data URI in case network image fails to load
export const FALLBACK_FOOD_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%230e3822'/%3E%3Ccircle cx='400' cy='280' r='140' fill='%23144c2f' stroke='%23facc15' stroke-width='6'/%3E%3Cpath d='M360 260 L440 260 M400 220 L400 340' stroke='%23facc15' stroke-width='8' stroke-linecap='round'/%3E%3Ctext x='400' y='470' font-family='sans-serif' font-size='32' font-weight='bold' fill='%23facc15' text-anchor='middle'%3ECODE-8 DELICIOUS MEAL%3C/text%3E%3Ctext x='400' y='515' font-family='sans-serif' font-size='22' fill='%23faf7f2' text-anchor='middle'%3EGood Food, Great Vibes%3C/text%3E%3C/svg%3E";
