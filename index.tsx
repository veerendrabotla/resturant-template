'use client';

import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import MainLayout from './components/MainLayout';
import Home from './app/page';
import Menu from './app/menu/page';
import Order from './app/order/page';
import About from './app/about/page';
import Contact from './app/contact/page';
import Gallery from './app/gallery/page';
import Admin from './app/admin/page';
import { RouterProvider, usePathname } from './lib/router-shim';
import { AppProvider } from './lib/context';
import Link from './lib/router-shim';

// 404 Component
const NotFound = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-4">
    <h1 className="text-6xl font-serif font-bold text-secondary mb-4">404</h1>
    <h2 className="text-2xl font-bold text-gray-600 mb-6">Page Not Found</h2>
    <p className="text-gray-500 mb-8 max-w-md">
      The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
    </p>
    <Link href="/" className="px-6 py-3 bg-primary text-white rounded-lg font-bold hover:bg-orange-700 transition-colors">
      Go Back Home
    </Link>
  </div>
);

const AppContent = () => {
  const path = usePathname();

  // Dynamic Title Management
  useEffect(() => {
    let title = "SpiceCraft Kitchen";
    if (path === '/menu') title = "Menu | SpiceCraft Kitchen";
    else if (path === '/order') title = "Order Online | SpiceCraft Kitchen";
    else if (path === '/about') title = "About Us | SpiceCraft Kitchen";
    else if (path === '/contact') title = "Contact Us | SpiceCraft Kitchen";
    else if (path === '/gallery') title = "Gallery | SpiceCraft Kitchen";
    else if (path === '/admin') title = "Admin Dashboard | SpiceCraft Kitchen";
    else if (path !== '/') title = "404 - Page Not Found | SpiceCraft Kitchen";
    
    document.title = title;
  }, [path]);

  // Route Config
  let Component = NotFound;
  if (path === '/' || path === '') Component = Home;
  else if (path === '/menu') Component = Menu;
  else if (path === '/order') Component = Order;
  else if (path === '/about') Component = About;
  else if (path === '/contact') Component = Contact;
  else if (path === '/gallery') Component = Gallery;
  else if (path === '/admin') {
    // Admin page has its own internal layout logic (sidebar), so we render it without MainLayout
    return <Admin />;
  }

  return (
    <MainLayout>
      <Component />
    </MainLayout>
  );
};

const App = () => {
  return (
    <RouterProvider>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </RouterProvider>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}