import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';
import { ArrowRight, Truck, Shield, RefreshCw } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
// Mock Data
const products = [
  { id: 1, title: 'Nova ANC Headphones', price: 299.00, category: 'Audio', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80' },
  { id: 2, title: 'Flux Smartwatch Gen 2', price: 199.00, category: 'Wearable', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80' },
  { id: 3, title: 'MagCharge Stand', price: 49.00, category: 'Accessories', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&q=80' },
  { id: 4, title: 'Ergo Mechanical Key', price: 149.00, category: 'Peripherals', image: 'https://images.unsplash.com/photo-1587829741301-dc798b91a91e?w=500&q=80' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-50 pt-16 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 z-10">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">New Arrival</span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
              Sound that <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Moves You.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Experience the next generation of digital accessories. Designed for creators, professionals, and audiophiles.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-600/30">
                Shop Collection
              </button>
              <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold border border-gray-200 hover:border-gray-400 transition flex items-center gap-2">
                View Lookbook <ArrowRight size={18} />
              </button>
            </div>
          </div>
          
          {/* Hero Illustration / Image */}
          <div className="md:w-1/2 mt-12 md:mt-0 relative">
             <div className="relative w-full h-[500px]">
                {/*  - Simulated via Placeholder */}
                <img 
                  src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=1000" 
                  alt="Hero Product" 
                  className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition duration-700"
                />
             </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { icon: <Truck className="w-6 h-6 text-blue-600"/>, title: "Free Global Shipping", desc: "On all orders over $150" },
                { icon: <Shield className="w-6 h-6 text-blue-600"/>, title: "2 Year Warranty", desc: "Full protection for your gear" },
                { icon: <RefreshCw className="w-6 h-6 text-blue-600"/>, title: "30 Day Returns", desc: "No questions asked returns" },
            ].map((feature, i) => (
                <div key={i} className="flex items-center gap-4 p-6 rounded-xl bg-gray-50">
                    <div className="bg-white p-3 rounded-full shadow-sm">{feature.icon}</div>
                    <div>
                        <h4 className="font-bold text-gray-900">{feature.title}</h4>
                        <p className="text-sm text-gray-500">{feature.desc}</p>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Trending Now</h2>
            <p className="text-gray-500 mt-2">Curated digital essentials for your workspace.</p>
          </div>
          <Link href="/products" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-1">View All <ArrowRight size={16}/></Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
    </div>
  );
}