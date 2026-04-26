// app/page.js
import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';
import products, { categories } from '@/data/products';
import {
  ArrowRight,
  Truck,
  Shield,
  RefreshCw,
  Star,
  Zap,
  Users,
  PackageOpen,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const featuredProducts = products.filter((p) => p.rating >= 4.5).slice(0, 8);
  const latestProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
      <Navbar cartCount={2} />

      {/* ========== Hero Section – mobile first ========== */}
      <section className="relative bg-gradient-to-br from-gray-50 to-blue-50 pt-12 pb-20 md:pt-20 md:pb-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          {/* Text block */}
          <div className="flex-1 text-center md:text-left z-10">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              New Arrival
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
              Sound that{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                Moves You.
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              Premium digital accessories engineered for creators, professionals,
              and audiophiles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/products"
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-600/30 text-center"
              >
                Shop Collection
              </Link>
              <Link
                href="/products"
                className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold border border-gray-200 hover:border-gray-400 transition flex items-center justify-center gap-2"
              >
                Explore Lookbook <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Hero image – visible on all devices */}
          <div className="flex-1 relative w-full max-w-md md:max-w-lg mx-auto">
            <div className="aspect-square relative">
              <Image
                src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=1000"
                alt="Hero headphones"
                fill
                className="object-contain drop-shadow-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            {/* Floating product badge */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur px-6 py-3 rounded-full shadow-lg text-gray-900 font-semibold text-sm whitespace-nowrap">
              Nova ANC Headphones – $299
            </div>
          </div>
        </div>
      </section>

      {/* ========== Features ========== */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: <Truck className="w-6 h-6 text-blue-600" />, title: 'Free Global Shipping', desc: 'On orders over $150' },
            { icon: <Shield className="w-6 h-6 text-blue-600" />, title: '2 Year Warranty', desc: 'Full peace of mind' },
            { icon: <RefreshCw className="w-6 h-6 text-blue-600" />, title: '30 Day Returns', desc: 'Hassle‑free returns' },
          ].map((f, i) => (
            <div key={i} className="flex items-center gap-4 p-5 rounded-xl bg-gray-50">
              <div className="bg-white p-3 rounded-full shadow-sm">{f.icon}</div>
              <div>
                <h4 className="font-bold text-gray-900">{f.title}</h4>
                <p className="text-sm text-gray-500">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========== Category Showcase ========== */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/products?category=${encodeURIComponent(cat)}`}
              className="group flex flex-col items-center p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-lg hover:border-blue-100 transition"
            >
              <div className="w-12 h-12 mb-3 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-100 transition">
                <Zap size={24} />
              </div>
              <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-600">
                {cat}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ========== Featured Products (best sellers) ========== */}
      <section className="py-20 bg-gray-50 rounded-3xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Trending Now</h2>
            <p className="text-gray-500 mt-2">
              Curated digital essentials for your workspace.
            </p>
          </div>
          <Link
            href="/products"
            className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-1"
          >
            View All <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* ========== Stats & Social Proof ========== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <Users className="w-10 h-10 text-blue-600 mb-3" />
            <span className="text-4xl font-extrabold text-gray-900">25k+</span>
            <span className="text-gray-500">Happy Customers</span>
          </div>
          <div className="flex flex-col items-center">
            <Star className="w-10 h-10 text-blue-600 mb-3" />
            <span className="text-4xl font-extrabold text-gray-900">4.8/5</span>
            <span className="text-gray-500">Average Rating</span>
          </div>
          <div className="flex flex-col items-center">
            <PackageOpen className="w-10 h-10 text-blue-600 mb-3" />
            <span className="text-4xl font-extrabold text-gray-900">50+</span>
            <span className="text-gray-500">Products Launched</span>
          </div>
        </div>
      </section>

      {/* ========== Testimonials ========== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { quote: "The Nova ANC headphones are incredible – worth every penny.", author: "Sarah L." },
            { quote: "Fast delivery and quality build on the Flux watch.", author: "Marcus T." },
            { quote: "Best accessories store I've come across. Highly recommended.", author: "James R." },
          ].map((t, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} fill="#2563eb" color="#2563eb" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">“{t.quote}”</p>
              <p className="font-semibold text-gray-900">{t.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========== Newsletter ========== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Stay in the loop</h2>
          <p className="text-blue-100 mb-8 max-w-md mx-auto">
            Subscribe for exclusive deals, new drops, and tech tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="bg-white text-blue-600 font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* ========== Footer ========== */}
      <footer className="border-t border-gray-100 py-10 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} TechNova. All rights reserved.</p>
      </footer>
    </div>
  );
}