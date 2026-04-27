'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { useCart } from '@/providers/cart-provider';
import { CreditCard, Smartphone, Check, ArrowLeft, Loader2 } from 'lucide-react';

const PAYMENT_METHODS = {
  CARD: 'card',
  MOMO: 'momo',
};

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, clearCart } = useCart();

  const [step, setStep] = useState('shipping'); // 'shipping' | 'payment' | 'processing' | 'success'
  const [paymentMethod, setPaymentMethod] = useState(PAYMENT_METHODS.CARD);
  const [isProcessing, setIsProcessing] = useState(false);

  // Shipping form state
  const [shipping, setShipping] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
  });

  // Card payment state
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvc: '',
    nameOnCard: '',
  });

  // MoMo payment state
  const [momoDetails, setMomoDetails] = useState({
    network: '',
    phone: '',
  });

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!shipping.name || !shipping.email || !shipping.address) return;
    setStep('payment');
  };

  const handlePlaceOrder = () => {
    if (paymentMethod === PAYMENT_METHODS.CARD) {
      if (!cardDetails.number || !cardDetails.expiry || !cardDetails.cvc) return;
    } else if (paymentMethod === PAYMENT_METHODS.MOMO) {
      if (!momoDetails.network || !momoDetails.phone) return;
    }

    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      // Save order info if needed (localStorage)
      const order = {
        id: `TN-${Date.now()}`,
        items,
        subtotal,
        shipping,
        paymentMethod,
        date: new Date().toISOString(),
      };
      localStorage.setItem('lastOrder', JSON.stringify(order));
      clearCart();
      setStep('success');
    }, 2000);
  };

  // If cart is empty and not success state, redirect or show empty message
  if (items.length === 0 && step !== 'success') {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="max-w-3xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
          <p className="text-gray-500 mb-8">Add items to proceed to checkout.</p>
          <button
            onClick={() => router.push('/products')}
            className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium"
          >
            Shop Products
          </button>
        </main>
      </div>
    );
  }

  // Success state
  if (step === 'success') {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="max-w-3xl mx-auto px-4 py-20 text-center">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <Check size={36} className="text-green-600" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
          <p className="text-gray-600 mb-8">
            Thank you for your purchase. You’ll receive a confirmation email shortly.
          </p>
          <button
            onClick={() => router.push('/products')}
            className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium"
          >
            Continue Shopping
          </button>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb / back */}
        <button
          onClick={() => (step === 'payment' ? setStep('shipping') : router.push('/cart'))}
          className="flex items-center gap-1 text-gray-500 hover:text-blue-600 mb-8"
        >
          <ArrowLeft size={16} /> {step === 'shipping' ? 'Back to Cart' : 'Back to Shipping'}
        </button>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left – form area */}
          <div className="flex-1 space-y-8">
            <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>

            {/* Step indicator */}
            <div className="flex gap-4 border-b pb-4">
              <span className={`font-semibold ${step === 'shipping' ? 'text-blue-600' : 'text-gray-400'}`}>1. Shipping</span>
              <span className="text-gray-300">→</span>
              <span className={`font-semibold ${step === 'payment' ? 'text-blue-600' : 'text-gray-400'}`}>2. Payment</span>
              <span className="text-gray-300">→</span>
              <span className="font-semibold text-gray-400">3. Review</span>
            </div>

            {/* Shipping Form */}
            {step === 'shipping' && (
              <form onSubmit={handleShippingSubmit} className="space-y-6 bg-white p-6 rounded-2xl shadow-sm">
                <h2 className="text-xl font-bold">Shipping Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Full Name *</label>
                    <input
                      type="text"
                      value={shipping.name}
                      onChange={(e) => setShipping({ ...shipping, name: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email *</label>
                    <input
                      type="email"
                      value={shipping.email}
                      onChange={(e) => setShipping({ ...shipping, email: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone</label>
                    <input
                      type="tel"
                      value={shipping.phone}
                      onChange={(e) => setShipping({ ...shipping, phone: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Address *</label>
                    <input
                      type="text"
                      value={shipping.address}
                      onChange={(e) => setShipping({ ...shipping, address: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">City</label>
                    <input
                      type="text"
                      value={shipping.city}
                      onChange={(e) => setShipping({ ...shipping, city: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Country</label>
                    <input
                      type="text"
                      value={shipping.country}
                      onChange={(e) => setShipping({ ...shipping, country: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-blue-600 text-white py-3 px-8 rounded-full font-bold hover:bg-blue-700 transition"
                >
                  Continue to Payment
                </button>
              </form>
            )}

            {/* Payment Methods & Review */}
            {step === 'payment' && (
              <div className="space-y-6">
                {/* Payment method selection */}
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <h2 className="text-xl font-bold mb-4">Payment Method</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setPaymentMethod(PAYMENT_METHODS.CARD)}
                      className={`p-4 border-2 rounded-xl flex flex-col items-center gap-2 ${
                        paymentMethod === PAYMENT_METHODS.CARD
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <CreditCard size={24} />
                      <span className="font-medium">Credit / Debit</span>
                    </button>
                    <button
                      onClick={() => setPaymentMethod(PAYMENT_METHODS.MOMO)}
                      className={`p-4 border-2 rounded-xl flex flex-col items-center gap-2 ${
                        paymentMethod === PAYMENT_METHODS.MOMO
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <Smartphone size={24} />
                      <span className="font-medium">Mobile Money</span>
                    </button>
                  </div>
                </div>

                {/* Card details form */}
                {paymentMethod === PAYMENT_METHODS.CARD && (
                  <div className="bg-white p-6 rounded-2xl shadow-sm space-y-4">
                    <h3 className="font-bold">Card Details</h3>
                    <div>
                      <label className="block text-sm font-medium mb-1">Card Number</label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        value={cardDetails.number}
                        onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm"
                        maxLength={19}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Expiry</label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          value={cardDetails.expiry}
                          onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                          className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm"
                          maxLength={5}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">CVC</label>
                        <input
                          type="text"
                          placeholder="123"
                          value={cardDetails.cvc}
                          onChange={(e) => setCardDetails({ ...cardDetails, cvc: e.target.value })}
                          className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm"
                          maxLength={4}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Name on Card</label>
                      <input
                        type="text"
                        value={cardDetails.nameOnCard}
                        onChange={(e) => setCardDetails({ ...cardDetails, nameOnCard: e.target.value })}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm"
                      />
                    </div>
                  </div>
                )}

                {/* MoMo details form */}
                {paymentMethod === PAYMENT_METHODS.MOMO && (
                  <div className="bg-white p-6 rounded-2xl shadow-sm space-y-4">
                    <h3 className="font-bold">Mobile Money Details</h3>
                    <div>
                      <label className="block text-sm font-medium mb-1">Network</label>
                      <select
                        value={momoDetails.network}
                        onChange={(e) => setMomoDetails({ ...momoDetails, network: e.target.value })}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm"
                      >
                        <option value="">Select network</option>
                        <option value="mtn">MTN Mobile Money</option>
                        <option value="vodafone">Vodafone Cash</option>
                        <option value="airteltigo">AirtelTigo Money</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="05X XXX XXXX"
                        value={momoDetails.phone}
                        onChange={(e) => setMomoDetails({ ...momoDetails, phone: e.target.value })}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm"
                      />
                      <p className="text-xs text-gray-400 mt-1">You will receive a prompt on your phone to confirm payment.</p>
                    </div>
                  </div>
                )}

                {/* Place Order Button */}
                <button
                  onClick={handlePlaceOrder}
                  disabled={isProcessing}
                  className="w-full bg-blue-600 text-white py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition shadow-lg flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isProcessing ? <Loader2 size={20} className="animate-spin" /> : 'Place Order'}
                  {isProcessing ? 'Processing...' : ` – $${subtotal.toFixed(2)}`}
                </button>
              </div>
            )}
          </div>

          {/* Right – order summary */}
          <div className="lg:w-80">
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
              <h2 className="font-bold text-lg mb-4">Order Summary</h2>
              <div className="space-y-3 max-h-64 overflow-y-auto mb-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3 text-sm">
                    <span className="font-medium flex-1">{item.title} × {item.quantity}</span>
                    <span>GH₵{(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <hr className="my-4" />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>GH₵{subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-gray-400 mt-3 text-center">
                {subtotal >= 150 ? 'Free shipping included' : 'Shipping calculated at next step'}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}