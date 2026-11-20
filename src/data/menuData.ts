import { MenuItem } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  // Main Meals
  {
    id: 'jollof-rice',
    name: 'Jollof Party Rice',
    category: 'meals',
    categoryLabel: 'Main Meals',
    description: 'Classic smoky party-style seasoned rice prepared fresh with rich aromatic savoury spices and pepper base.',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Smoky_Jollof_Rice.jpg',
    imageAlt: 'Authentic Nigerian Smoky Party Jollof Rice ready to serve',
    badge: 'Popular Choice'
  },
  {
    id: 'amala',
    name: 'Amala',
    category: 'meals',
    categoryLabel: 'Main Meals',
    description: 'Traditional smooth yam flour swallow prepared soft and served hot with your choice of traditional soup.',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Amala_and_Abula.jpg',
    imageAlt: 'Traditional piping hot Amala swallow meal with Abula',
    badge: 'Traditional Favourite',
    isSwallow: true,
    soupOptions: [
      'Gbegiri & Ewedu (Abula)',
      'Ewedu Only',
      'Egusi Soup',
      'Ogbono Soup',
      'Efo Riro (Vegetable)',
      'Okro Soup'
    ]
  },
  {
    id: 'yam-porridge',
    name: 'Yam Porridge (Asaro)',
    category: 'meals',
    categoryLabel: 'Main Meals',
    description: 'Hearty slow-simmered tender yam pottage (Asaro) cooked in savoury seasoned palm oil and peppers.',
    image: './images/yam-porridge.jpg',
    imageAlt: 'Freshly prepared authentic Nigerian Yam Porridge Asaro with tender yam chunks in rich palm oil sauce',
    badge: 'Comfort Meal'
  },
  {
    id: 'ewa-agoyin',
    name: 'Ewa Agoyin',
    category: 'meals',
    categoryLabel: 'Main Meals',
    description: 'Soft slow-cooked mashed beans served with CODE-8 signature spicy, smoky Agoyin sauce.',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ewa_agoyin.jpg',
    imageAlt: 'Slow-cooked Ewa Agoyin beans with rich dark sauce',
    badge: 'Chef Special'
  },

  // Proteins & Sides
  {
    id: 'fried-chicken',
    name: 'Fried Chicken',
    category: 'proteins',
    categoryLabel: 'Proteins & Sides',
    description: 'Crispy, golden-brown seasoned Nigerian fried chicken, tender, juicy and deeply flavourful.',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Crispy golden-brown Nigerian seasoned fried chicken',
    badge: 'Top Protein'
  },
  {
    id: 'cooked-beef',
    name: 'Cooked & Fried Beef',
    category: 'proteins',
    categoryLabel: 'Proteins & Sides',
    description: 'Succulent chunks of seasoned Nigerian beef, simmered in rich spices and tossed in savoury peppered sauce.',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Food_flask_of_peppered_beef.jpg',
    imageAlt: 'Tender seasoned cooked and peppered Nigerian beef chunks',
    badge: 'Tender & Savoury'
  },
  {
    id: 'turkey',
    name: 'Fried Turkey',
    category: 'proteins',
    categoryLabel: 'Proteins & Sides',
    description: 'Generous portion of well-seasoned Nigerian fried turkey, golden-crisped with rich aromatic flavour.',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Fried_Turkey.jpg',
    imageAlt: 'Seasoned golden Nigerian fried turkey wings and cut',
    badge: 'Customer Favourite'
  },
  {
    id: 'fish',
    name: 'Fried / Roasted Fish',
    category: 'proteins',
    categoryLabel: 'Proteins & Sides',
    description: 'Crispy fried and flame-roasted fish, seasoned to perfection with aromatic local peppers, herbs and spices.',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Freshly_Roasted_Obokun_fish.jpg',
    imageAlt: 'Freshly roasted seasoned Nigerian Obokun fish',
    badge: 'Fresh Catch'
  },
  {
    id: 'goat-meat',
    name: 'Goat Meat (Asun)',
    category: 'proteins',
    categoryLabel: 'Proteins & Sides',
    description: 'Tender, spicy Nigerian peppered goat meat (Asun style) cut into savoury, fiery bite-sized portions.',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Goat_meat_Asun.jpg',
    imageAlt: 'Spicy peppered Nigerian goat meat Asun',
    badge: 'Spicy Special'
  },
  {
    id: 'fried-plantain',
    name: 'Fried Plantain (Dodo)',
    category: 'proteins',
    categoryLabel: 'Proteins & Sides',
    description: 'Sweet, caramelized golden-fried ripe plantain slices, the essential companion to every meal.',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Dodo_(Plantain).jpg',
    imageAlt: 'Sweet golden fried ripe plantain slices Dodo',
    badge: 'Sweet & Golden'
  },
  {
    id: 'coleslaw',
    name: 'Coleslaw',
    category: 'proteins',
    categoryLabel: 'Proteins & Sides',
    description: 'Fresh and crunchy cabbage and carrot salad tossed in creamy dressing.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Fresh creamy coleslaw salad',
    badge: 'Fresh Salad'
  },

  // Snacks
  {
    id: 'pie',
    name: 'Meat Pie',
    category: 'snacks',
    categoryLabel: 'Snacks',
    description: 'Golden-baked flaky pastry stuffed with savoury, seasoned hearty minced meat and potato filling.',
    image: './images/meat-pie.jpg',
    imageAlt: 'Freshly baked Nigerian meat pie with golden flaky crust and savory minced beef filling',
    badge: 'Freshly Baked'
  },
  {
    id: 'donut',
    name: 'Donut',
    category: 'snacks',
    categoryLabel: 'Snacks',
    description: 'Soft, fluffy golden glazed fried dough ring, perfectly sweet, light and freshly made.',
    image: './images/donut.jpg',
    imageAlt: 'Freshly made golden bakery donuts with glaze, sugar coating and chocolate topping',
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
    name: 'Yogurt (Bottled)',
    category: 'drinks',
    categoryLabel: 'Drinks',
    description: 'Smooth, rich and chilled creamy sweetened drinking yogurt in a bottle.',
    image: './images/yogurt.jpg',
    imageAlt: 'Fresh chilled creamy yoghurt in transparent sealed beverage bottle with condensation',
    badge: 'Chilled & Smooth'
  },
  {
    id: 'zobo',
    name: 'Zobo Drink (Bottled)',
    category: 'drinks',
    categoryLabel: 'Drinks',
    description: 'Deep ruby-red chilled hibiscus flower drink in bottle, naturally brewed with warming ginger, cloves and citrus.',
    image: './images/zobo.jpg',
    imageAlt: 'Freshly prepared chilled Nigerian Zobo drink in transparent sealed PET bottle with condensation',
    badge: 'House Refreshment'
  },
  {
    id: 'kunnu',
    name: 'Kunnu Drink (Bottled)',
    category: 'drinks',
    categoryLabel: 'Drinks',
    description: 'Traditional spiced creamy tiger nut and millet drink in a chilled bottle, refreshing, smooth and naturally nourishing.',
    image: './images/kunu.jpg',
    imageAlt: 'Traditional chilled Nigerian Kunu drink in transparent sealed PET bottle',
    badge: 'Traditional Cooler'
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
  instagramUrl: 'https://www.instagram.com/code8go/',
  instagramHandle: '@code8go',
  address: '8thGear Hub, 41 CMD Road, Magodo Secretariat, Lagos.',
  promises: [
    {
      title: 'Fresh Meals Daily',
      description: 'Cooked fresh every day to ensure every plate brings peak flavour and nourishment to your table.'
    },
    {
      title: 'Affordable & Pocket Friendly Meals',
      description: 'Generous, satisfying Nigerian meals, proteins, and snacks priced with your daily comfort and budget in mind.'
    },
    {
      title: 'Quality Food Always',
      description: 'Consistent care, rich taste, and strict culinary standards in every portion we prepare.'
    }
  ]
};

// SVG fallback image data URI in case network image fails to load
export const FALLBACK_FOOD_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%230e3822'/%3E%3Ccircle cx='400' cy='280' r='140' fill='%23144c2f' stroke='%23facc15' stroke-width='6'/%3E%3Cpath d='M360 260 L440 260 M400 220 L400 340' stroke='%23facc15' stroke-width='8' stroke-linecap='round'/%3E%3Ctext x='400' y='470' font-family='sans-serif' font-size='32' font-weight='bold' fill='%23facc15' text-anchor='middle'%3ECODE-8 DELICIOUS MEAL%3C/text%3E%3Ctext x='400' y='515' font-family='sans-serif' font-size='22' fill='%23faf7f2' text-anchor='middle'%3EGood Food, Great Vibes%3C/text%3E%3C/svg%3E";
