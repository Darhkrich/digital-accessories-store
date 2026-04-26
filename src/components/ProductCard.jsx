import Link from 'next/link';
import Image from 'next/image';
import { Plus } from 'lucide-react';

export default function ProductCard({ id, title, price, image, category }) {
  return (
    <div className="group relative bg-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="aspect-square relative bg-gray-50 p-8">
        <img 
          src={image} 
          alt={title} 
          width={400} 
          height={400} 
          className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        <button className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-blue-600 hover:text-white">
          <Plus size={20} />
        </button>
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">{category}</p>
        <Link href={`/product/${id}`}>
          <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600 transition">{title}</h3>
        </Link>
        <p className="text-gray-500 font-medium">${price.toFixed(2)}</p>
      </div>
    </div>
  );
}