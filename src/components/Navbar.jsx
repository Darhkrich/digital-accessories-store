// components/Navbar.js
"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/providers/cart-provider';   // import hook

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { totalItems } = useCart();   // live cart count

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            StoreName
          </Link>

          <div className="hidden md:flex items-center space-x-8">
          
            <Link href="/products" className={`text-sm font-medium transition-colors ${pathname.startsWith('/products') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}>
              Products
            </Link>
            <Link href="/cart" className="relative" aria-label="View cart">
              <ShoppingBag className="w-5 h-5 text-gray-500 hover:text-blue-600" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <Link href="/checkout" className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition">
              Checkout
            </Link>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            
            <Link href="/products" className={`text-sm font-medium transition-colors ${pathname.startsWith('/products') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}>
              Products
            </Link>
            <Link href="/cart" className="relative">
              <ShoppingBag className="w-5 h-5 text-gray-500 hover:text-blue-600" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="text-gray-500" aria-label="Toggle menu">
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4 animate-in slide-in-from-top-2">
          <Link href="/" className="block text-gray-700 font-medium hover:text-blue-600" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link href="/products" className="block text-gray-700 font-medium hover:text-blue-600" onClick={() => setMobileOpen(false)}>Products</Link>
          <Link href="/checkout" className="block text-center bg-black text-white py-2 rounded-full font-medium hover:bg-gray-800 transition" onClick={() => setMobileOpen(false)}>Checkout</Link>
        </div>
      )}
    </nav>
  );
}