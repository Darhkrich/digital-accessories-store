// app/layout.js
import { CartProvider } from '@/providers/cart-provider';
import './globals.css';

export const metadata = {
  title: 'Digital Accessories',
  description: 'Premium digital accessories store',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}