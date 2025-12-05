'use client';

import React, { useState } from 'react';
import SectionTitle from '@/components/SectionTitle';
import { createWhatsAppLink, RESTAURANT_PHONE } from '@/lib/utils';
import { useApp } from '@/lib/context';
import { Send, MapPin, User, Phone, ShoppingBag, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import Image from '@/components/Image';
import Link from '@/lib/router-shim';

export default function OrderPage() {
  const { cart, updateQuantity, removeFromCart, cartTotal, clearCart } = useApp();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // Format Cart Items for WhatsApp
    const itemsList = cart.map(item => `- ${item.name} x ${item.quantity} (₹${item.price * item.quantity})`).join('\n');

    const message = `*New Order Request*
----------------
*Customer:* ${formData.name}
*Phone:* ${formData.phone}
*Address:* ${formData.address}
----------------
*Order Details:*
${itemsList}

*Total Amount: ₹${cartTotal}*
----------------
*Notes:* ${formData.notes || "None"}`;

    const link = createWhatsAppLink(RESTAURANT_PHONE, message);
    
    // Optional: Clear cart after ordering
    // clearCart(); 
    
    window.open(link, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background py-10 md:py-16">
      <div className="container mx-auto px-4">
        <SectionTitle title="Complete Your Order" subtitle="Checkout" center />

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          
          {/* LEFT: Cart Summary */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-secondary p-6 text-white flex justify-between items-center">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <ShoppingBag size={20} /> Your Cart
                </h2>
                <span className="text-sm opacity-80">{cart.length} Items</span>
              </div>
              
              <div className="p-6">
                {cart.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                      <ShoppingBag size={32} />
                    </div>
                    <p className="text-gray-500 mb-6">Your cart is empty.</p>
                    <Link href="/menu" className="inline-block px-6 py-2 bg-primary text-white rounded-lg font-bold hover:bg-orange-700 transition-colors">
                      Browse Menu
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cart.map((item) => (
                      <div key={item.cartId} className="flex gap-4 items-center">
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0">
                          <Image src={item.image} alt={item.name} fill className="object-cover" />
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-bold text-secondary text-sm">{item.name}</h4>
                          <p className="text-primary font-bold text-sm">₹{item.price * item.quantity}</p>
                        </div>
                        <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1">
                          <button 
                            onClick={() => updateQuantity(item.cartId, -1)}
                            className="w-8 h-8 flex items-center justify-center bg-white rounded shadow-sm text-gray-600 hover:text-primary disabled:opacity-50"
                            disabled={item.quantity <= 1}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.cartId, 1)}
                            className="w-8 h-8 flex items-center justify-center bg-white rounded shadow-sm text-gray-600 hover:text-primary"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.cartId)}
                          className="text-gray-400 hover:text-red-500 transition-colors p-2"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    ))}
                    
                    <div className="border-t border-gray-100 pt-4 mt-4 space-y-2">
                      <div className="flex justify-between text-gray-600">
                        <span>Subtotal</span>
                        <span>₹{cartTotal}</span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span>Taxes (5%)</span>
                        <span>₹{Math.round(cartTotal * 0.05)}</span>
                      </div>
                      <div className="flex justify-between text-xl font-bold text-secondary pt-2 border-t border-gray-100 mt-2">
                        <span>Total</span>
                        <span>₹{Math.round(cartTotal * 1.05)}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT: Delivery Details Form */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8">
                <h3 className="text-xl font-bold text-secondary mb-6">Delivery Details</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                        <User size={16} /> Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                        <Phone size={16} /> Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="Mobile Number"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                      <MapPin size={16} /> Address
                    </label>
                    <textarea
                      name="address"
                      required
                      rows={3}
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Full delivery address..."
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Notes (Optional)</label>
                    <textarea
                      name="notes"
                      rows={2}
                      value={formData.notes}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Cooking instructions..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={cart.length === 0}
                    className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-lg mt-4"
                  >
                    <Send size={20} />
                    Place Order via WhatsApp
                  </button>
                  <p className="text-xs text-center text-gray-500">
                    You will be redirected to WhatsApp to send the message.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}