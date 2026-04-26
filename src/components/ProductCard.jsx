'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Plus, Star } from 'lucide-react';
import PropTypes from 'prop-types';
import { useCart } from '@/providers/cart-provider';

const placeholderImage = '/images/placeholder.png';

export default function ProductCard({
  id,
  title,
  price,
  image,
  category,
  rating,
  inStock = true,
  onAddToCart,   // optional – if provided, it will be used instead of context
}) {
  const { addToCart: contextAddToCart } = useCart();
  const addToCart = onAddToCart || contextAddToCart; // fallback to context

  const handleAddToCart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (inStock && addToCart) {
      addToCart({ id, title, price, image, category });
    }
  };

  return (
    <Link
      href={`/products/${id}`}
      className={`group relative bg-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden block ${
        !inStock ? 'opacity-90' : ''
      }`}
    >
      <div className="aspect-square relative bg-gray-50 p-8">
        <Image
          src={image || placeholderImage}
          alt={title}
          width={400}
          height={400}
          className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-500"
          unoptimized
        />

        <button
          onClick={handleAddToCart}
          disabled={!inStock}
          className={`absolute bottom-4 right-4 p-3 rounded-full shadow-lg transition-all duration-300 ${
            inStock
              ? 'bg-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 hover:bg-blue-600 hover:text-white'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0'
          }`}
          aria-label={`Add ${title} to cart`}
        >
          <Plus size={20} />
        </button>

        {!inStock && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow">
            Out of Stock
          </span>
        )}
      </div>

      <div className="p-5">
        <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">{category}</p>
        <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition">{title}</h3>

        {rating !== undefined && (
          <div className="flex items-center gap-0.5 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={14}
                fill={star <= Math.round(rating) ? '#2563eb' : 'none'}
                color={star <= Math.round(rating) ? '#2563eb' : '#9ca3af'}
                strokeWidth={1.5}
              />
            ))}
            <span className="text-xs text-gray-500 ml-1">({rating})</span>
          </div>
        )}

        <p className="text-gray-500 font-medium">${price.toFixed(2)}</p>
      </div>
    </Link>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string,
  category: PropTypes.string.isRequired,
  rating: PropTypes.number,
  inStock: PropTypes.bool,
  onAddToCart: PropTypes.func,
};