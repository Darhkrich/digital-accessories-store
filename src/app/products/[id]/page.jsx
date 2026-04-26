// app/products/[id]/page.jsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import products from '@/data/products';
import { Star, Truck, Shield, ArrowLeft, Plus } from 'lucide-react';

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductPage({ params }) {
  // Unwrap the params Promise
  const { id } = await params;

  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    notFound();
  }

  // Related products (same category, excluding current)
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      <Navbar cartCount={2} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Back link */}
        <Link
          href="/products"
          className="inline-flex items-center gap-1 text-gray-500 hover:text-blue-600 mb-8 text-sm"
        >
          <ArrowLeft size={16} /> Back to products
        </Link>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Image */}
          <div className="flex-1 max-w-lg">
            <div className="aspect-square bg-gray-50 rounded-2xl overflow-hidden relative">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain p-8"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Details */}
          <div className="flex-1 space-y-6">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              {product.category}
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              {product.title}
            </h1>

            {product.rating && (
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    fill={star <= Math.round(product.rating) ? '#2563eb' : 'none'}
                    color={star <= Math.round(product.rating) ? '#2563eb' : '#d1d5db'}
                  />
                ))}
                <span className="text-sm text-gray-500 ml-2">
                  {product.rating} / 5
                </span>
              </div>
            )}

            <div className="text-3xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </div>

            <p className="text-gray-600 leading-relaxed">{product.description}</p>

            {product.features && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Key Features</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {product.features.map((feat, i) => (
                    <li key={i}>{feat}</li>
                  ))}
                </ul>
              </div>
            )}

            {product.inStock ? (
              <p className="text-green-600 font-medium flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full inline-block" />
                In Stock
              </p>
            ) : (
              <p className="text-red-500 font-medium">Out of Stock</p>
            )}

            <button
              disabled={!product.inStock}
              className={`w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-lg transition ${
                product.inStock
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/30'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              <Plus size={20} />
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Truck size={16} />
                Free shipping over $150
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Shield size={16} />
                2‑year warranty included
              </div>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              You might also like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((rp) => (
                <Link
                  key={rp.id}
                  href={`/products/${rp.id}`}
                  className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-md transition"
                >
                  <div className="aspect-square relative">
                    <Image
                      src={rp.image}
                      alt={rp.title}
                      fill
                      className="object-contain p-6"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition">
                      {rp.title}
                    </p>
                    <p className="text-gray-500">${rp.price.toFixed(2)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}