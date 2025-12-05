'use client';

import React, { useState } from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Dish } from '@/lib/data';
import { useApp } from '@/lib/context';
import { LayoutDashboard, UtensilsCrossed, ClipboardList, Settings, LogOut, Plus, Edit, Trash2, CheckCircle, XCircle, X } from 'lucide-react';
import Image from '@/components/Image';

// Mock Order Data
const MOCK_ORDERS = [
  { id: 'ORD-001', customer: 'Rahul Sharma', dish: 'Chicken Biryani', qty: 2, status: 'Completed', time: '10:30 AM', total: 700 },
  { id: 'ORD-002', customer: 'Priya Patel', dish: 'Paneer Tikka', qty: 1, status: 'Pending', time: '11:15 AM', total: 280 },
  { id: 'ORD-003', customer: 'Amit Verma', dish: 'Butter Chicken', qty: 1, status: 'Cancelled', time: 'Yesterday', total: 380 },
];

export default function AdminPage() {
  const { dishes, addDish, deleteDish } = useApp();
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Add Dish Modal State
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newDish, setNewDish] = useState<Partial<Dish>>({
    name: '', category: 'Starters', price: 0, description: ''
  });

  // Simple Mock Login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid Password (Try: admin123)');
    }
  };

  const handleDeleteDish = (id: number) => {
    if (window.confirm('Are you sure you want to delete this dish?')) {
      deleteDish(id);
    }
  };

  const handleAddDish = (e: React.FormEvent) => {
    e.preventDefault();
    const id = dishes.length > 0 ? Math.max(...dishes.map(d => d.id)) + 1 : 1;
    const dishToAdd = {
      ...newDish,
      id,
      image: 'https://picsum.photos/600/400', // Placeholder
    } as Dish;
    
    addDish(dishToAdd);
    setIsAddModalOpen(false);
    setNewDish({ name: '', category: 'Starters', price: 0, description: '' });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif font-bold text-secondary">Owner Login</h1>
            <p className="text-gray-500">Access your restaurant dashboard</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary outline-none"
                placeholder="Enter admin password"
              />
              <p className="text-xs text-gray-400 mt-2">Hint: admin123</p>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-orange-700 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Dashboard Components
  const StatCard = ({ title, value, icon: Icon, color }: any) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
      <div className={`p-4 rounded-full ${color} text-white`}>
        <Icon size={24} />
      </div>
      <div>
        <p className="text-gray-500 text-sm font-medium">{title}</p>
        <h3 className="text-2xl font-bold text-secondary">{value}</h3>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-secondary text-white md:min-h-screen flex-shrink-0">
        <div className="p-6">
          <h2 className="text-2xl font-serif font-bold">SpiceCraft<span className="text-primary">.</span></h2>
          <p className="text-gray-400 text-sm">Admin Panel</p>
        </div>
        <nav className="mt-6 px-4 space-y-2">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'dashboard' ? 'bg-primary text-white' : 'text-gray-300 hover:bg-white/10'}`}
          >
            <LayoutDashboard size={20} /> Dashboard
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'orders' ? 'bg-primary text-white' : 'text-gray-300 hover:bg-white/10'}`}
          >
            <ClipboardList size={20} /> Orders
          </button>
          <button
            onClick={() => setActiveTab('menu')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'menu' ? 'bg-primary text-white' : 'text-gray-300 hover:bg-white/10'}`}
          >
            <UtensilsCrossed size={20} /> Menu Items
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'settings' ? 'bg-primary text-white' : 'text-gray-300 hover:bg-white/10'}`}
          >
            <Settings size={20} /> Settings
          </button>
        </nav>
        <div className="p-4 mt-auto border-t border-white/10 md:absolute md:bottom-0 md:w-64">
          <button 
            onClick={() => setIsAuthenticated(false)}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors w-full"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        
        {/* DASHBOARD TAB */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8 animate-fade-in">
            <div>
              <h1 className="text-2xl font-bold text-secondary mb-1">Dashboard Overview</h1>
              <p className="text-gray-500">Welcome back, Owner!</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard title="Total Orders" value="1,284" icon={ClipboardList} color="bg-blue-500" />
              <StatCard title="Total Revenue" value="₹45.2k" icon={CheckCircle} color="bg-green-500" />
              <StatCard title="Menu Items" value={dishes.length} icon={UtensilsCrossed} color="bg-orange-500" />
              <StatCard title="Pending Orders" value="12" icon={LayoutDashboard} color="bg-red-500" />
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-lg mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {MOCK_ORDERS.map((order) => (
                  <div key={order.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-50 rounded-lg gap-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-white p-2 rounded-full border border-gray-200">
                        <UtensilsCrossed size={16} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-bold text-sm">{order.customer}</p>
                        <p className="text-xs text-gray-500">Ordered {order.qty}x {order.dish}</p>
                      </div>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="font-bold text-sm">₹{order.total}</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        order.status === 'Completed' ? 'bg-green-100 text-green-700' : 
                        order.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                      }`}>{order.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* MENU TAB */}
        {activeTab === 'menu' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h1 className="text-2xl font-bold text-secondary">Menu Management</h1>
              <button 
                onClick={() => setIsAddModalOpen(true)}
                className="bg-primary text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-orange-700 transition-colors"
              >
                <Plus size={18} /> Add Dish
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-4 font-bold text-gray-600 text-sm">Image</th>
                      <th className="px-6 py-4 font-bold text-gray-600 text-sm">Name</th>
                      <th className="px-6 py-4 font-bold text-gray-600 text-sm">Category</th>
                      <th className="px-6 py-4 font-bold text-gray-600 text-sm">Price</th>
                      <th className="px-6 py-4 font-bold text-gray-600 text-sm text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {dishes.map((dish) => (
                      <tr key={dish.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-100">
                            <Image src={dish.image} alt={dish.name} fill className="object-cover" />
                          </div>
                        </td>
                        <td className="px-6 py-4 font-medium">{dish.name}</td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">{dish.category}</span>
                        </td>
                        <td className="px-6 py-4 font-bold text-secondary">₹{dish.price}</td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-full transition-colors">
                              <Edit size={18} />
                            </button>
                            <button 
                              onClick={() => handleDeleteDish(dish.id)}
                              className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ORDERS TAB */}
        {activeTab === 'orders' && (
           <div className="space-y-6 animate-fade-in">
             <div className="flex justify-between items-center">
               <h1 className="text-2xl font-bold text-secondary">Order History</h1>
               <div className="flex gap-2">
                 <button className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-lg hover:bg-gray-50">Filter</button>
                 <button className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-lg hover:bg-gray-50">Export</button>
               </div>
             </div>
             
             <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <div className="text-center text-gray-500 max-w-md mx-auto">
                   <ClipboardList size={48} className="mx-auto mb-4 text-gray-300" />
                   <h3 className="text-lg font-bold text-secondary mb-2">WhatsApp Order Integration</h3>
                   <p className="mb-4">Orders placed by customers are sent directly to your WhatsApp. This section will sync with your order database in the Pro version.</p>
                   <p className="text-xs bg-orange-50 text-orange-600 p-2 rounded border border-orange-100">Live API Connection Inactive</p>
                </div>
             </div>
           </div>
        )}

        {/* SETTINGS TAB */}
        {activeTab === 'settings' && (
           <div className="space-y-6 animate-fade-in">
             <h1 className="text-2xl font-bold text-secondary">Restaurant Settings</h1>
             <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 max-w-2xl space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Restaurant Name</label>
                  <input type="text" defaultValue="SpiceCraft Kitchen" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">WhatsApp Number</label>
                  <input type="text" defaultValue="+91 98765 43210" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Address</label>
                  <textarea defaultValue="123 Culinary Avenue, Food District, Mumbai" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50" rows={3} />
                </div>
                <button className="bg-secondary text-white px-6 py-2 rounded-lg font-bold hover:bg-secondary/90 transition-colors">Save Changes</button>
             </div>
           </div>
        )}

      </main>

      {/* Add Dish Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h3 className="font-bold text-xl text-secondary">Add New Dish</h3>
              <button onClick={() => setIsAddModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleAddDish} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Dish Name</label>
                <input 
                  type="text" 
                  required 
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={newDish.name}
                  onChange={e => setNewDish({...newDish, name: e.target.value})}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price (₹)</label>
                  <input 
                    type="number" 
                    required 
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    value={newDish.price}
                    onChange={e => setNewDish({...newDish, price: Number(e.target.value)})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select 
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                    value={newDish.category}
                    onChange={e => setNewDish({...newDish, category: e.target.value as any})}
                  >
                    <option>Starters</option>
                    <option>Main Course</option>
                    <option>Biryani</option>
                    <option>Drinks</option>
                    <option>Desserts</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea 
                  required 
                  rows={2}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  value={newDish.description}
                  onChange={e => setNewDish({...newDish, description: e.target.value})}
                />
              </div>
              <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-orange-700 transition-colors mt-2">
                Add to Menu
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}