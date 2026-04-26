"use client";
import { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            TechNova
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/products" className="text-gray-600 hover:text-blue-600 transition">Audio</Link>
            <Link href="/products" className="text-gray-600 hover:text-blue-600 transition">Wearables</Link>
            <Link href="/products" className="text-gray-600 hover:text-blue-600 transition">Charging</Link>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <Search className="w-5 h-5 text-gray-500 cursor-pointer hover:text-blue-600" />
            <div className="relative cursor-pointer">
              <ShoppingBag className="w-5 h-5 text-gray-500 hover:text-blue-600" />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">2</span>
            </div>
            <Link href="/checkout" className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition">
              Checkout
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4">
          <Link href="/products" className="block text-gray-600 font-medium">Audio</Link>
          <Link href="/products" className="block text-gray-600 font-medium">Wearables</Link>
          <Link href="/checkout" className="block text-blue-600 font-bold">Go to Checkout</Link>
        </div>
      )}
    </nav>
  );
}