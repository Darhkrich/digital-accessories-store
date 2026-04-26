// data/products.js

const products = [
  // Audio
  {
    id: 1,
    title: 'Nova ANC Headphones',
    price: 299.00,
    category: 'Audio',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
    description: 'Immerse yourself in rich, detailed sound with adaptive noise cancellation. Memory foam ear cushions and 30‑hour battery life keep you in the zone all day.',
    rating: 4.8,
    inStock: true,
    features: ['Active Noise Cancellation', '30h Battery', 'Bluetooth 5.3', 'Memory Foam Earcups']
  },
  {
    id: 2,
    title: 'SonicBuds Pro',
    price: 149.00,
    category: 'Audio',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12f889cd1?w=500&q=80',
    description: 'True wireless earbuds with dynamic drivers and IPX5 water resistance. Perfect for workouts and commuting.',
    rating: 4.5,
    inStock: true,
    features: ['True Wireless', 'IPX5 Water Resistant', '6h + 18h Battery', 'Touch Controls']
  },

  // Wearable
  {
    id: 3,
    title: 'Flux Smartwatch Gen 2',
    price: 199.00,
    category: 'Wearable',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
    description: 'Track your fitness, sleep, and heart rate with a vibrant AMOLED display. Water‑resistant to 50m and supports 100+ workout modes.',
    rating: 4.6,
    inStock: true,
    features: ['AMOLED Display', 'Heart Rate Monitor', 'GPS', '5ATM Water Resistance']
  },
  {
    id: 4,
    title: 'Aura Fitness Ring',
    price: 79.00,
    category: 'Wearable',
    image: 'https://images.unsplash.com/photo-1611954117987-9f6c1b4a3f1b?w=500&q=80',
    description: 'Sleek, discreet smart ring that monitors sleep quality, steps, and blood oxygen. 7‑day battery life and titanium build.',
    rating: 4.3,
    inStock: false,
    features: ['Sleep Tracking', 'SpO2 Monitor', '7‑Day Battery', 'Titanium Finish']
  },

  // Accessories
  {
    id: 5,
    title: 'MagCharge Stand',
    price: 49.00,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&q=80',
    description: '3‑in‑1 magnetic charging station for phone, watch, and earbuds. Adjustable angle and fast wireless charging up to 15W.',
    rating: 4.7,
    inStock: true,
    features: ['3‑in‑1 Charging', '15W Fast Charge', 'Adjustable Angle', 'MagSafe Compatible']
  },
  {
    id: 6,
    title: 'Leather Laptop Sleeve',
    price: 69.00,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1622560480605-f325dca9d1d9?w=500&q=80',
    description: 'Premium genuine leather sleeve with soft microfiber lining. Fits most 13‑14 inch laptops and tablets.',
    rating: 4.9,
    inStock: true,
    features: ['Genuine Leather', 'Microfiber Lining', 'Magnetic Closure', 'Slim Profile']
  },

  // Peripherals
  {
    id: 7,
    title: 'Ergo Mechanical Key',
    price: 149.00,
    category: 'Peripherals',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b91a91e?w=500&q=80',
    description: 'Tenkeyless mechanical keyboard with hot‑swappable switches, RGB backlighting, and a programmable knob.',
    rating: 4.4,
    inStock: true,
    features: ['Hot‑Swap Switches', 'RGB Backlight', 'Tenkeyless Layout', 'Programmable Knob']
  },
  {
    id: 8,
    title: 'Precision Mouse MX',
    price: 89.00,
    category: 'Peripherals',
    image: 'https://images.unsplash.com/photo-1605773527852-c546a8584ea3?w=500&q=80',
    description: 'Ergonomic wireless mouse with 8K DPI sensor and quiet clicks. Works on any surface, up to 70 days on a single charge.',
    rating: 4.6,
    inStock: true,
    features: ['8K DPI Sensor', 'Quiet Clicks', 'USB‑C Rechargeable', 'Multi‑Device Pairing']
  },

  // Charging
  {
    id: 9,
    title: 'HyperDrive USB‑C Hub',
    price: 59.00,
    category: 'Charging',
    image: 'https://images.unsplash.com/photo-1618331835717-887b4d3f9fe8?w=500&q=80',
    description: 'Compact 7‑in‑1 hub with HDMI 4K, 100W Power Delivery, USB‑A, and SD card slots. Perfect for laptops and tablets.',
    rating: 4.3,
    inStock: true,
    features: ['7 Ports', '4K HDMI', '100W PD Pass‑Through', 'SD/MicroSD Slots']
  },
  {
    id: 10,
    title: 'NitroCharge 20K Power Bank',
    price: 39.00,
    category: 'Charging',
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&q=80',
    description: '20,000 mAh power bank with 65W USB‑C output, capable of charging a laptop. Dual USB‑A and LED battery indicator.',
    rating: 4.5,
    inStock: true,
    features: ['20000mAh Capacity', '65W USB‑C Output', 'Dual USB‑A', 'LED Indicator']
  },

  // Cases
  {
    id: 11,
    title: 'AeroArmor Phone Case',
    price: 34.00,
    category: 'Cases',
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500&q=80',
    description: 'Ultra‑slim, military‑grade drop protection with a textured grip. Compatible with MagSafe and wireless charging.',
    rating: 4.7,
    inStock: true,
    features: ['MIL‑STD Drop Tested', 'MagSafe Compatible', 'Anti‑Slip Texture', 'Wireless Charging Ready']
  },
  {
    id: 12,
    title: 'ClearView Bumper Case',
    price: 24.00,
    category: 'Cases',
    image: 'https://images.unsplash.com/photo-1604586376807-f73185cea9ba?w=500&q=80',
    description: 'Crystal clear polycarbonate back with shock‑absorbing TPU edges. Never yellows, shows off your phone’s original colour.',
    rating: 4.4,
    inStock: true,
    features: ['Anti‑Yellowing', 'Shock‑Absorbing TPU', 'Scratch‑Resistant', 'Raised Bezel Protection']
  },

  // Additional Audio
  {
    id: 13,
    title: 'Bassline Portable Speaker',
    price: 99.00,
    category: 'Audio',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80',
    description: 'Compact Bluetooth speaker with 360° sound and deep bass radiator. IP67 dust and water resistant for outdoor adventures.',
    rating: 4.6,
    inStock: true,
    features: ['360° Sound', 'IP67 Rating', '12h Battery', 'Built‑in Microphone']
  },
  {
    id: 14,
    title: 'Wired In‑Ear Monitor',
    price: 59.00,
    category: 'Audio',
    image: 'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=500&q=80',
    description: 'High‑fidelity in‑ear monitors with detachable MMCX cable. Ideal for studio monitoring and stage use.',
    rating: 4.2,
    inStock: true,
    features: ['Hi‑Res Audio', 'MMCX Detachable Cable', 'Noise Isolation', 'Lightweight']
  }
];

// Export the products array (default export) and a separate list of categories for filtering.
export default products;

export const categories = [
  'Audio',
  'Wearable',
  'Accessories',
  'Peripherals',
  'Charging',
  'Cases'
];