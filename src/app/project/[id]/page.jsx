import Navbar from '@/components/Navbar';
import { Star, Check, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductDetail({ params }) {
  // In a real app, fetch data based on params.id
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden relative">
               {/*  */}
               <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1000&q=80" className="object-cover w-full h-full" alt="Product" />
            </div>
            <div className="grid grid-cols-4 gap-4">
                {[1,2,3,4].map((i) => (
                    <div key={i} className="aspect-square bg-gray-50 rounded-lg cursor-pointer hover:ring-2 ring-blue-500 transition"></div>
                ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <div className="mb-4 flex items-center gap-2">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">In Stock</span>
                <div className="flex text-yellow-400">
                    {[...Array(5)].map((_,i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <span className="text-sm text-gray-500">(128 Reviews)</span>
            </div>
            
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Nova ANC Headphones</h1>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Immerse yourself in pure sound with industry-leading noise cancellation. 
              Designed for all-day comfort with plush memory foam earcups and 30-hour battery life.
            </p>

            <div className="text-3xl font-bold text-gray-900 mb-8">$299.00</div>

            {/* Color Selection */}
            <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Color: <span className="text-gray-500 font-normal">Midnight Black</span></h3>
                <div className="flex gap-3">
                    {['bg-black', 'bg-gray-400', 'bg-blue-900'].map((color, i) => (
                        <button key={i} className={`w-8 h-8 rounded-full ${color} ring-2 ring-offset-2 ring-transparent hover:ring-gray-300 focus:ring-blue-500`}></button>
                    ))}
                </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-8">
                <button className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20">
                    Add to Cart
                </button>
                <button className="p-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition">
                   <ShieldCheck className="text-gray-600" />
                </button>
            </div>

            <div className="border-t border-gray-100 pt-8 space-y-3">
                {['Active Noise Cancellation', '30-Hour Battery Life', 'Spatial Audio Support'].map((feat, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-600">
                        <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"><Check size={12}/></div>
                        {feat}
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}