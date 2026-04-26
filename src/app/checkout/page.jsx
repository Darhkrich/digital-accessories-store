import Navbar from '@/components/Navbar';
import { Lock } from 'lucide-react';

export default function Checkout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form Section */}
          <div className="lg:col-span-2 space-y-8">
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold mb-6">Contact Information</h2>
                <div className="grid grid-cols-2 gap-6">
                    <input type="email" placeholder="Email Address" className="col-span-2 p-3 bg-gray-50 rounded-lg border-transparent focus:bg-white focus:border-blue-500 focus:ring-0 transition" />
                    <input type="text" placeholder="First Name" className="p-3 bg-gray-50 rounded-lg border-transparent focus:bg-white focus:border-blue-500 focus:ring-0 transition" />
                    <input type="text" placeholder="Last Name" className="p-3 bg-gray-50 rounded-lg border-transparent focus:bg-white focus:border-blue-500 focus:ring-0 transition" />
                    <input type="text" placeholder="Address" className="col-span-2 p-3 bg-gray-50 rounded-lg border-transparent focus:bg-white focus:border-blue-500 focus:ring-0 transition" />
                </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold mb-6">Payment Details</h2>
                <div className="space-y-4">
                     <div className="p-4 border border-blue-600 bg-blue-50 rounded-lg flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-4 h-4 rounded-full border-4 border-blue-600"></div>
                            <span className="font-semibold text-gray-900">Credit Card</span>
                        </div>
                        <div className="flex gap-2">
                            <div className="w-8 h-5 bg-gray-200 rounded"></div>
                            <div className="w-8 h-5 bg-gray-200 rounded"></div>
                        </div>
                     </div>
                     <input type="text" placeholder="Card Number" className="w-full p-3 bg-gray-50 rounded-lg border-transparent" />
                     <div className="grid grid-cols-2 gap-6">
                        <input type="text" placeholder="MM / YY" className="p-3 bg-gray-50 rounded-lg border-transparent" />
                        <input type="text" placeholder="CVC" className="p-3 bg-gray-50 rounded-lg border-transparent" />
                     </div>
                </div>
            </div>

          </div>

          {/* Order Summary */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-fit sticky top-24">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6">
                <div className="flex gap-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200" className="object-cover w-full h-full"/>
                    </div>
                    <div className="flex-1">
                        <h4 className="font-bold text-sm">Nova ANC Headphones</h4>
                        <p className="text-xs text-gray-500">Black / Pro</p>
                    </div>
                    <p className="font-bold text-sm">$299.00</p>
                </div>
            </div>
            
            <div className="border-t border-gray-100 pt-4 space-y-2 text-sm">
                <div className="flex justify-between text-gray-500"><span>Subtotal</span><span>$299.00</span></div>
                <div className="flex justify-between text-gray-500"><span>Shipping</span><span>$0.00</span></div>
                <div className="flex justify-between font-bold text-lg text-gray-900 pt-2"><span>Total</span><span>$299.00</span></div>
            </div>

            <button className="w-full mt-8 bg-black text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition flex items-center justify-center gap-2">
                <Lock size={16} /> Pay $299.00
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}