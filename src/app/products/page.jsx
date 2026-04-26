// app/products/page.jsx
'use client';
import { Suspense, useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';
import { categories } from '@/data/products';
import products from '@/data/products';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/providers/cart-provider';

// Separate the core content into its own component
function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || '';
  const initialSearch = searchParams.get('q') || '';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [sortBy, setSortBy] = useState('default');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const { addToCart } = useCart();

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description?.toLowerCase().includes(q)
      );
    }
    switch (sortBy) {
      case 'price-asc': result.sort((a, b) => a.price - b.price); break;
      case 'price-desc': result.sort((a, b) => b.price - a.price); break;
      case 'rating': result.sort((a, b) => (b.rating || 0) - (a.rating || 0)); break;
      case 'name': result.sort((a, b) => a.title.localeCompare(b.title)); break;
    }
    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  const clearFilters = () => {
    setSelectedCategory('');
    setSearchQuery('');
    setSortBy('default');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="bg-gray-50 border-b border-gray-100 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900">Products</h1>
          <p className="mt-2 text-gray-500">
            {filteredProducts.length} item{filteredProducts.length !== 1 && 's'} found
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar filters */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              <div>
                <label className="text-sm font-semibold text-gray-900 block mb-2">Search</label>
                <div className="relative">
                  <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Category</h3>
                <div className="space-y-2">
                  <button onClick={() => setSelectedCategory('')} className={`block w-full text-left text-sm px-3 py-2 rounded-lg ${selectedCategory === '' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}>All Categories</button>
                  {categories.map((cat) => (
                    <button key={cat} onClick={() => setSelectedCategory(cat)} className={`block w-full text-left text-sm px-3 py-2 rounded-lg ${selectedCategory === cat ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}>{cat}</button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Sort By</h3>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="w-full p-2 border border-gray-200 rounded-lg text-sm">
                  <option value="default">Default</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Rating</option>
                  <option value="name">Alphabetical</option>
                </select>
              </div>
              <button onClick={clearFilters} className="text-sm text-blue-600 hover:underline flex items-center gap-1"><X size={14} /> Clear all filters</button>
            </div>
          </aside>

          {/* Mobile filter toggle */}
          <div className="lg:hidden flex items-center justify-between mb-6">
            <button onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)} className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full text-sm font-medium text-gray-700"><SlidersHorizontal size={16} /> Filters</button>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="p-2 border border-gray-200 rounded-full text-sm">
              <option value="default">Sort: Default</option>
              <option value="price-asc">Price: Low-High</option>
              <option value="price-desc">Price: High-Low</option>
              <option value="rating">Rating</option>
              <option value="name">A-Z</option>
            </select>
          </div>

          {mobileFiltersOpen && (
            <div className="lg:hidden bg-white p-4 rounded-2xl border border-gray-100 shadow-lg mb-6 space-y-4">
              <div className="flex justify-between items-center"><h3 className="font-semibold">Filters</h3><button onClick={() => setMobileFiltersOpen(false)}><X size={20} /></button></div>
              <div><label className="text-sm font-medium block mb-1">Search</label><input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full p-2 border border-gray-200 rounded-lg text-sm" /></div>
              <div><p className="text-sm font-medium mb-1">Category</p><div className="flex flex-wrap gap-2"><button onClick={() => { setSelectedCategory(''); setMobileFiltersOpen(false); }} className={`px-3 py-1 rounded-full text-xs font-medium ${selectedCategory === '' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}>All</button>{categories.map((cat) => (<button key={cat} onClick={() => { setSelectedCategory(cat); setMobileFiltersOpen(false); }} className={`px-3 py-1 rounded-full text-xs font-medium ${selectedCategory === cat ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}>{cat}</button>))}</div></div>
              <button onClick={clearFilters} className="text-sm text-blue-600 hover:underline">Clear all</button>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} onAddToCart={addToCart} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg mb-4">No products found.</p>
                <button onClick={clearFilters} className="text-blue-600 font-medium hover:underline">Clear filters & try again</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Wrap ProductsContent in Suspense
export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading products…</div>}>
      <ProductsContent />
    </Suspense>
  );
}